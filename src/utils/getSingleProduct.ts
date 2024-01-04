const getSingleProduct = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  return res.json();
};
export default getSingleProduct;
