import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { productList, formInputList, Colors, Categories } from "./data";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { validationProduct } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import Select from "./components/ui/Select";

const App = () => {
  const defaultProductObject = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: [],
    category: { name: "", imageUrl: "" },
  };
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const productsList = products.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  const renderInputs = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        className="mb-[1] text-sm font-medium text-gray-700"
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <Input
        name={input.name}
        id={input.id}
        type={input.type}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage message={errors[input.name]} />
    </div>
  ));

  const renderColors = Colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((c) => c !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));
  const selectedColors = tempColors.map((tempColor) => {
    return (
      <div
        key={tempColor}
        className="mb-2 px-1 rounded-md"
        style={{ background: `${tempColor}`, color: "#fff" }}
      >
        {tempColor}
      </div>
    );
  });

  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }

  const onClose = () => {
    setProduct(defaultProductObject);
    setIsOpen(false);
  };

  const formHandler = (e: FormEvent<HTMLFormElement>) => {
    const { title, description, imageUrl, price, colors } = product;
    e.preventDefault();
    const errors = validationProduct({
      title,
      description,
      imageUrl,
      price,
      colors,
    });
    const hasError =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasError) {
      setErrors(errors);
      return;
    }

    setProducts((prev) => [
      {
        ...product,
        id: Math.floor(Math.random() * 1000),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);

    setProduct(defaultProductObject);
    setTempColors([]);
    setIsOpen(false);
  };
  const [selectedCategory, setSelectedCategory] = useState(Categories[0]);

  return (
    <div className="container">
      <div className="flex items-center justify-between my-5">
        <h1 className="font-bold" style={{ fontSize: "30px" }}>
          Our Products
        </h1>
        <Button className="bg-blue-700" width="w-fit" onClick={open}>
          Add Product
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 m-auto rounded-md">
        {productsList}
      </div>
      <Modal isOpen={isOpen} close={close} title="Add New Product">
        <form className="space-y-3" onSubmit={formHandler}>
          {renderInputs}

          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex space-x-1 flex-wrap">{selectedColors}</div>
          <div className="flex space-x-1 flex-wrap">{renderColors}</div>
          <ErrorMessage message={errors["colors"]} />
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button onClick={onClose} className="bg-gray-400 hover:bg-gray-500">
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default App;
