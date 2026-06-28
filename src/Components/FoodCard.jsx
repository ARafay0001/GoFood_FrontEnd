const FoodCard = () => {
  return (
    <div className="bg-white m-3 w-[300px] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
        alt="Pizza"
        className=" w-full h-52 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Margherita Pizza</h2>

          <select
            name="quantity"
            id="quantity"
            className="w-12 px-2 py-1 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer"
          >
            {[...Array(6)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>

        <p className="text-gray-500 mt-2">
          Fresh mozzarella, basil & homemade tomato sauce.
        </p>

        <div className="flex justify-between items-center mt-5">
          <span className="text-2xl font-bold text-emerald-600 ">$12.99</span>

          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg transition italic">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
