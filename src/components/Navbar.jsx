function Navbar({ page }) {
  return (
    <div className="bg-white border-b px-6 py-3 flex justify-between items-center">
      
      {/* Dynamic Title */}
      <h1 className="text-lg font-semibold text-gray-700 capitalize">
        {page}
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <span className="text-gray-500 cursor-pointer hover:text-gray-700 transition">
          🔔
        </span>

        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium">
          L
        </div>
      </div>
    </div>
  );
}

export default Navbar;