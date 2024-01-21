const Product = () => {
  return (
    <div className="border rounded-md p-5 space-y-1 flex-1">
      <img className="h-[150px] w-full object-cover rounded" src="http://placehold.it/500x400" alt="" />
      <h2 className="font-semibold">GoPro</h2>
      <p className="font-thin">$ 57</p>
      <button className="bg-gray-700 hover:ring-1 hover:ring-yellow-50 capitalize w-full  px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
};

export default Product;
