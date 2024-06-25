const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">My Year In Books</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            2020
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            2021
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            2022
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            2023
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
