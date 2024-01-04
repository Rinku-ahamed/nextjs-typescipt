const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { tags: ["products"] },
  });
  return res.json();
};
export default getProducts;
