import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-emerald-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          GoFood
        </div>

        {/* Buttons */}
        <ul className="flex items-center gap-4">
          <li>
            <button className="px-5 py-2 border border-white text-white rounded-lg hover:bg-emerald-700 transition">
              Login
            </button>
          </li>

          <li>
            <button className="px-5 py-2 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}