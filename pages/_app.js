import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import ScrollToTop from "react-scroll-up";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { useEffect, useState } from "react";
import CollegeState from "directsecondyearadmission/Context/CollegeState";

export default function App({ Component, pageProps }) {
  const status = SpecificData().userStatus;
  const userData = SpecificData().user;
  const name = SpecificData().name;
  return (
    <CollegeState>
      <Nav />
      <Component {...pageProps} name={name} />
      <Footer />
      <ScrollToTop showUnder={160}>
        <i className="bi text-3xl pColor bi-arrow-up-square-fill"></i>
      </ScrollToTop>
    </CollegeState>
  );
}

export const SpecificData = () => {
  const [user, setUser] = useState(false);
  const [userAllData, setuserAllData] = useState({});
  const [name, setname] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
      const token = localStorage.getItem("token");
      if (token) {
        const [, payloadBase64] = token.split(".");
        const payloadString = atob(payloadBase64);
        const payload = JSON.parse(payloadString);
        localStorage.setItem("Name", payload.userData.credentails.fName);
        setuserAllData(payload.userData);
        setname(localStorage.getItem("Name"));
      }
    } else {
      setuserAllData({});
      localStorage.removeItem("Name");
    }
  }, []);

  return {
    user: { userAllData },
    userStatus: user,
    name: name,
  };
};
