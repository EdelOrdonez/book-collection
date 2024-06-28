const Navbar = () => {
  return (
    <nav className="bg-background p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-primaryStronger text-lg font-semibold font-playwrite">
          My Year In Books
        </div>
        <div className="flex space-x-4 h-full">
          <a
            href="#"
            className="text-primaryStrong hover:text-primaryDarker font-playwrite flex items-center h-full"
          >
            2021
          </a>
          <a
            href="#"
            className="text-primaryStrong hover:text-primaryDarker font-playwrite flex items-center h-full"
          >
            2022
          </a>
          <a
            href="#"
            className="text-primaryStrong hover:text-primaryDarker font-playwrite flex items-center h-full"
          >
            2023
          </a>
          <a
            href="#"
            className="text-primaryStrong hover:text-primaryDarker font-playwrite flex items-center h-full underline-thick"
          >
            2024
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
