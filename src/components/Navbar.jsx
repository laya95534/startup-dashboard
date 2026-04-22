function Navbar() {
  return (
    <div className="bg-white border-b px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-700">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-500 cursor-pointer">🔔</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}

export default Navbar;