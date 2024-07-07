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
import toast, { Toaster } from "react-hot-toast";

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
  const [editModal, setEditModal] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleted, setIsDelete] = useState(false);
  const [updatedProduct, setUpdatedProduct] =
    useState<IProduct>(defaultProductObject);
  const [deletedProduct, setDeletedProduct] =
    useState<IProduct>(defaultProductObject);
  const [updateProductIdx, setUpdateProductIdx] = useState<number>(0);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);

  const [selectedCategory, setSelectedCategory] = useState(Categories[0]);

  const productsList = products.map((product, idx) => (
    <ProductCard
      product={product}
      key={product.id}
      setUpdatedProduct={setUpdatedProduct}
      openEdit={openEdit}
      setUpdateProductIdx={setUpdateProductIdx}
      index={idx}
      deleteModal={deleteModal}
      setDeletedProduct={setDeletedProduct}
    />
  ));

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

  const onChangeHandlerEdit = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

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

  const renderEditInputs = (
    id: string,
    label: string,
    inputName: "title" | "description" | "price" | "imageUrl"
  ) => {
    return (
      <div className="flex flex-col">
        <label
          className="mb-[1] text-sm font-medium text-gray-700"
          htmlFor={id}
        >
          {label}
        </label>
        <Input
          name={inputName}
          id={id}
          type={"text"}
          value={updatedProduct[inputName]}
          onChange={onChangeHandlerEdit}
        />
        <ErrorMessage message={errors[inputName]} />
      </div>
    );
  };

  const renderColors = Colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((c) => c !== color));
          return;
        }
        if (updatedProduct.colors.includes(color)) {
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

  function open() {
    setIsOpen(true);
  }
  function openEdit() {
    setEditModal(true);
  }

  function closeAdd() {
    setIsOpen(false);
  }

  function closeEdit() {
    setEditModal(false);
  }

  function closeDelete() {
    setIsDelete(false);
  }
  function deleteModal() {
    setIsDelete(true);
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

  const formEditHandler = (e: FormEvent<HTMLFormElement>) => {
    const { title, description, imageUrl, price, colors } = updatedProduct;
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
    const updatedProducts = [...products];
    updatedProducts[updateProductIdx] = {
      ...updatedProduct,
      colors: tempColors.concat(updatedProduct.colors),
    };
    setProducts(updatedProducts);
    setUpdatedProduct(defaultProductObject);
    setTempColors([]);
    setEditModal(false);
  };

  const deleteProduct = () => {
    const filtered = products.filter(
      (product) => product.id !== deletedProduct.id
    );
    setProducts(filtered);
    closeDelete();
    toast.success("product is Deleted");
  };
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
      <Modal isOpen={isOpen} close={closeAdd} title="Add New Product">
        <form className="space-y-3 " onSubmit={formHandler}>
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

      <Modal isOpen={editModal} close={closeEdit} title="Edit Product">
        <form className="space-y-3" onSubmit={formEditHandler}>
          {renderEditInputs("", "Product title", "title")}
          {renderEditInputs("", "Product Description", "description")}
          {renderEditInputs("", "Product Image", "imageUrl")}
          {renderEditInputs("", "Product Price", "price")}

          <Select
            selected={updatedProduct.category}
            setSelected={(value) =>
              setUpdatedProduct({ ...updatedProduct, category: value })
            }
          />
          <div className="flex space-x-2">{renderColors}</div>
          <div className="flex space-x-2">
            {tempColors.concat(updatedProduct.colors).map((color) => (
              <div
                key={color}
                className="mb-2 px-1 rounded-md"
                style={{ background: `${color}`, color: "#fff" }}
              >
                {color}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              onClick={closeEdit}
              className="bg-gray-400 hover:bg-gray-500"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={isDeleted} close={closeDelete} title="Delete Product">
        <h5>
          Are You Wanted To Delete This Product {deletedProduct.title} From
          Store
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ullam,
          quos voluptates quod nesciun
        </p>
        <div className="flex items-center space-x-3 mt-2">
          <Button
            className="bg-red-700 hover:bg-red-800"
            onClick={deleteProduct}
          >
            Delete
          </Button>
          <Button
            onClick={closeDelete}
            className="bg-gray-400 hover:bg-gray-500"
          >
            Cancel
          </Button>
        </div>
      </Modal>
      <Toaster />
    </div>
  );
};

export default App;
