import Logo from "../common/Logo/Logo";
import AuthBtns from "./AuthBtns/AuthBtns";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import NavLinks from "./NavLinks/NavLinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between appWidth h-20 px-5 lg:p-0">
      <div>
        <Logo placement="navbar" />
      </div>
      <div className="hidden md:block">
        <NavLinks />
      </div>
      <div className="hidden md:block">
        <AuthBtns />
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
