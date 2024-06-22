import ProductCard from "./components/ProductCard/ProductCard";
import Button from "./components/ui/Button";
import { productList } from "./data";

const App = () => {
  const productsList = productList.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));
  return (
    <div className="container">
      <div className="flex items-center justify-between my-5">
        <h1 className="font-bold" style={{ fontSize: "30px" }}>
          Our Products
        </h1>
        <Button className="bg-blue-700" width="w-fit">
          Add Product
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 m-auto rounded-md">
        {productsList}
      </div>
    </div>
  );
};

export default App;
