import Logo from "../common/Logo/Logo";
import AuthBtns from "./AuthBtns/AuthBtns";
import NavLinks from "./NavLinks/NavLinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between appWidth h-20">
      <Logo />
      <NavLinks />
      <AuthBtns />
    </div>
  );
};

export default Navbar;
