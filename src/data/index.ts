import { IInputForm, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: "1",
    title: "Product 1",
    description:
      "Description of Product 1 Description of Product 1Description of Product 1Description of Product 1",
    imageUrl: "https://picsum.photos/200/300",
    price: "19.99",
    colors: ["#FF0000", "#00FF00", "#0000FF"],
    category: {
      name: "Category A",
      imageUrl: "https://picsum.photos/200/300",
    },
  },
  {
    id: "2",
    title: "Product 2",
    description: "Description of Product 2",
    imageUrl: "https://picsum.photos/200/300",
    price: "29.99",
    colors: ["#FFFF00", "#FF00FF", "#00FFFF"],
    category: {
      name: "Category B",
      imageUrl: "https://picsum.photos/200/300",
    },
  },
  {
    id: "3",
    title: "Product 3",
    description: "Description of Product 3",
    imageUrl: "https://picsum.photos/200/300",
    price: "39.99",
    colors: ["#800080", "#008080", "#808000"],
    category: {
      name: "Category A",
      imageUrl: "https://picsum.photos/200/300",
    },
  },
  {
    id: "4",
    title: "Product 4",
    description: "Description of Product 4",
    imageUrl: "https://picsum.photos/200/300",
    price: "49.99",
    colors: ["#C0C0C0", "#808080", "#A9A9A9"],
    category: {
      name: "Category C",
      imageUrl: "https://picsum.photos/200/300",
    },
  },
  {
    id: "5",
    title: "Product 5",
    description: "Description of Product 5",
    imageUrl: "https://picsum.photos/200/300",
    price: "59.99",
    colors: ["#FFA500", "#FFD700", "#DAA520"],
    category: {
      name: "Category B",
      imageUrl: "https://picsum.photos/200/300",
    },
  },
  {
    id: "6",
    title: "Product 6",
    description: "Description of Product 6",
    imageUrl: "https://picsum.photos/200/300",
    price: "69.99",
    colors: ["#008000", "#FF6347", "#4682B4"],
    category: {
      name: "Category A",
      imageUrl: "https://picsum.photos/200/300",
    },
  },
  {
    id: "7",
    title: "Product 7",
    description: "Description of Product 7",
    imageUrl: "https://picsum.photos/200/300",
    price: "79.99",
    colors: ["#800000", "#7B68EE", "#87CEEB"],
    category: {
      name: "Category C",
      imageUrl: "https://picsum.photos/200/300",
    },
  },
  {
    id: "8",
    title: "Product 8",
    description: "Description of Product 8",
    imageUrl: "https://picsum.photos/200/300",
    price: "89.99",
    colors: ["#191970", "#9932CC", "#FF1493"],
    category: {
      name: "Category B",
      imageUrl: "https://picsum.photos/200/300",
    },
  },
  {
    id: "9",
    title: "Product 9",
    description: "Description of Product 9",
    imageUrl: "https://picsum.photos/200/300",
    price: "99.99",
    colors: ["#2E8B57", "#8A2BE2", "#4B0082"],
    category: {
      name: "Category A",
      imageUrl: "https://picsum.photos/200/300",
    },
  },
  {
    id: "10",
    title: "Product 10",
    description: "Description of Product 10",
    imageUrl: "https://picsum.photos/200/300",
    price: "109.99",
    colors: ["#FF4500", "#8B0000", "#8B4513"],
    category: {
      name: "Category C",
      imageUrl: "https://picsum.photos/200/300",
    },
  },
];

export const formInputList: IInputForm[] = [
  { id: "title", name: "title", label: "Product Title", type: "text" },
  {
    id: "description",
    name: "description",
    label: "description",
    type: "text",
  },
  { id: "image", name: "imageUrl", label: "Product Image Url", type: "text" },
  { id: "price", name: "price", label: "price", type: "text" },
];

export const Colors: string[] = [
  "#000000",
  "#808080",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FF0000",
  "#00FFFF",
  "#FF00FF",
  "#C0C0C0",
];
