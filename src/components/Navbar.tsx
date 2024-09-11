import { Logo, LinksDropdown, NavLinks, ModeToggle, CartButton } from ".";

const Navbar = () => {
  return (
    <nav className="bg-muted py-4">
      <div className="align-element flex justify-between items-center">
        <Logo />
        <LinksDropdown />
        <NavLinks />
        <div className="flex justify-between items-center">
          <ModeToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
