import Layout from "@/components/layout";
import "../public/scss/style.scss";
import { Provider } from "react-redux";
import store from "@/Redux/Store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoginState } from "@/Redux/slices/loginSlice";

function LoginStateInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    dispatch(setLoginState(isLogin === "true")); 
  }, [dispatch]);

  return null;
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LoginStateInitializer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </Provider>
  );
}

export default MyApp;
