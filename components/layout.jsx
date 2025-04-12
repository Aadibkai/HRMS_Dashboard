import { useSelector } from "react-redux";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <div className="w-full">
      <Header />
      <div className="flex w-full ">
        {isLogin && <Sidebar />}
          <main style={{ paddingTop: "60px" }} className="w-full bg-[#F3F4F5]">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
