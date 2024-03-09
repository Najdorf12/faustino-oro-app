import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-screen absolute z-50 overflow-hidden">
        <div className="w-full py-6 px-5 lg:px-28 flex justify-between text-gray-400">
          <span className="text-lg font-semibold"></span>
          <ul
            id="nav-btns"
            className="hidden md:flex items-center gap-10 font-cabin text-xl font-semibold pt-4 tracking-wider"
          >
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/tournaments"}>
              <li>Torneos</li>
            </Link>

            <Link to={"/contact"}>
              <li>Contacto</li>
            </Link>
          </ul>

          {/* hamburger menu */}
          <button className="pr-4 pt-2 space-y-1 group md:hidden">
            <div className="w-8 h-1 bg-white"></div>
            <div className="w-8 h-1 bg-white"></div>
            <div className="w-8 h-1 bg-white"></div>

            {/* menu */}
            <ul className="bg-[#252525] w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end z-50">
              <button className="px-12 py-10 relative ml-auto">
                <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
                <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
              </button>
              <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
                About
              </li>
              <Link to={"/contact"}>
              <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
                Contact
              </li>
              </Link>
              <Link to={"/tournaments"}>
              <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
                Tournaments
              </li>
              </Link>
            </ul>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
