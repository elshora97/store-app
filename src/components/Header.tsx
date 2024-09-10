import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  // temp
  const [user, setUser] = useState<{ userName: string } | null>({
    userName: "demo",
  });

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="align-element flex justify-center sm:justify-end py-2">
      {user ? (
        <div className="flex gap-x-2 sm:gap-x-8 items-center">
          <p className="text-xs sm:text-sm">Hello, {user.userName}</p>
          <Button
            variant="link"
            size="sm"
            onClick={handleLogout}>
            Log out
          </Button>
        </div>
      ) : (
        <div className="flex gap-x-6 justify-center items-center -mr-4">
          <Button
            asChild
            variant="link"
            size="sm">
            <Link to="/login">Login / Guest</Link>
          </Button>
          <Button
            asChild
            variant="link"
            size="sm">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
