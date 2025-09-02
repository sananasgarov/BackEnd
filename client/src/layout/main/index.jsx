import { createContext, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router";
import Login from "../../pages/login";
function Layout() {
  const [hidden, setHidden] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {isLogin ? (
        <>
          <Header hidden={hidden} setHidden={setHidden} setIsLogin={setIsLogin} />
          <div className="bg-black">
            <Outlet />
          </div>
          <Footer />
        </>
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default Layout;
