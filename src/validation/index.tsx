export const validationProduct = (product: {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  colors: string[];
}) => {
  const validUrl = /^(ftp|http|https):\/\/[^.'']+$/.test(product.imageUrl);
  const errors: {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
    colors: string;
  } = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: "",
  };

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "product title must between 10 and 80";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 800
  ) {
    errors.description = "product description must between 10 and 800";
  }
  if (!product.imageUrl.trim() || !validUrl) {
    errors.imageUrl = "valid product image Url is require";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "valid product price is require";
  }
  if (product.colors.length === 0) {
    errors.colors = "Must Choose Colors of Products";
    console.log("Must Choose Colors of Products");
  }

  return errors;
};
