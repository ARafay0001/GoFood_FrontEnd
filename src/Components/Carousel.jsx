import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Delicious Food
          <span className="block text-emerald-400">
            Delivered To Your Door
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          Discover thousands of restaurants and enjoy your favorite meals
          delivered fresh and fast.
        </p>

        {/* Search */}
        <div className="mt-10 flex flex-col sm:flex-row bg-white rounded-full overflow-hidden shadow-2xl">
          <div className="flex items-center flex-1 px-5">
            <Search className="text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search burgers, pizza, sushi..."
              className="w-full px-4 py-4 text-gray-700 outline-none"
            />
          </div>

          <button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 font-semibold transition cursor-pointer">
            Search
          </button>
        </div>

        {/* Categories */}
        {/* <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["🍕 Pizza", "🍔 Burger", "🍣 Sushi", "🥗 Salad", "🍗 Chicken"].map(
            (item) => (
              <button
                key={item}
                className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full hover:bg-emerald-600 transition"
              >
                {item}
              </button>
            )
          )}
        </div> */}
      </div>
    </section>
  );
}