import { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";
import { productList, formInputList } from "./data";
import Input from "./components/ui/Input";

const App = () => {
  const productsList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  const renderInputs = formInputList.map((input) => (
    <div className="flex flex-col">
      <label
        className="mb-[1] text-sm font-medium text-gray-700"
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <Input name={input.name} id={input.id} type={input.type} />
    </div>
  ));
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
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
        <div className="space-y-3">
          {renderInputs}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button onClick={close} className="bg-gray-300 hover:bg-gray-400">
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
