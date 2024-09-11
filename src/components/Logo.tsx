import { Link } from "react-router-dom";
import { Armchair } from "lucide-react";

const Logo = () => {
  return (
    <Link
      to="/"
      className="hidden lg:flex justify-between items-center p-2 rounded-lg bg-primary text-white">
      <Armchair className="w-8 h-8" />
    </Link>
  );
};

export default Logo;
