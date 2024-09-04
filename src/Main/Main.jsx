import { Outlet } from "react-router-dom";

import Nav from "../Dashboard/Navbar/Nav";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
