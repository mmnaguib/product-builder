import { IProduct } from "../../interfaces";
import { txtslice } from "../../utils/functions";
import Button from "../ui/Button";
import Image from "../ui/Image";

interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  return (
    <div className=" max-w-md md:max-w-lg border p-2 flex flex-col rounded-md">
      <Image
        imageUrl={product.imageUrl}
        imageAlt={product.title}
        className="rounded-md mb-2"
        style={{ objectFit: "cover", height: "15rem" }}
      />

      <h3>{product.title}</h3>
      <p style={{ height: "48px" }}>{txtslice(product.description)}</p>
      <div className="flex my-4 items-cetner space-x-2">
        <span className="w-5 h-5 rounded-full bg-indigo-700 cursor-pointer"></span>
        <span className="w-5 h-5 rounded-full bg-red-700 cursor-pointer"></span>
        <span className="w-5 h-5 rounded-full bg-yellow-700 cursor-pointer"></span>
      </div>
      <div className="flex items-center justify-between">
        <span>${product.price}</span>
        <div className="flex items-center">
          <Image
            className="w-8 h-8 rounded-full object-cover"
            imageUrl={product.category.imageUrl}
            imageAlt={product.category.name}
          />
          <span>{product.category.name}</span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-2 space-x-2">
        <Button className="bg-blue-800">Edit</Button>
        <Button className="bg-red-800">Delete</Button>
      </div>
    </div>
  );
};
export default ProductCard;
