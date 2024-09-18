import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks";

import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useToast } from "../hooks/use-toast";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const user = useAppSelector((state) => state.userState.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    navigate("/");
    toast({ description: "Logged out successfully" });
  };

  return (
    <div className="align-element flex justify-center sm:justify-end py-2">
      {user ? (
        <div className="flex gap-x-2 sm:gap-x-8 items-center">
          <p className="text-xs sm:text-sm">Hello, {user.username}</p>
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
