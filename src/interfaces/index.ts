export interface IProduct {
  id?: string | undefined | number;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageUrl: string;
  };
}

export interface IInputForm {
  id: string | undefined;
  name: "title" | "description" | "price" | "imageUrl";
  label: string;
  type: string;
}

export interface ICategory {
  id: number;
  name: string;
  imageUrl: string;
}
