import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <nav>navbar</nav>
      <Outlet />
    </>
  );
}
export default HomeLayout;
