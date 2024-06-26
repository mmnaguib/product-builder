export interface IProduct {
  id: string | undefined;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  colors: string[];
  category: {
    name: string;
    imageUrl: string;
  };
}

export interface IInputForm {
  id: string | undefined;
  name: string;
  label: string;
  type: string;
}
