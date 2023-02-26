import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import ScrollToTop from "react-scroll-up";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { useEffect, useState } from "react";
export default function App({ Component, pageProps }) {
  
  return (
    <ThemeProvider attribute="class">
      <Nav />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop showUnder={160}>
        <i className="bi text-3xl pColor bi-arrow-up-square-fill"></i>
      </ScrollToTop>
    </ThemeProvider>
  );
}

export const SpecificData = () => {
  const [user, setUser] = useState(false);
  const [userAllData, setuserAllData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
      const token = localStorage.getItem("token");
      if (token) {
        // Decode the JWT token to get the payload
        const [, payloadBase64] = token.split(".");
        const payloadString = atob(payloadBase64);
        const payload = JSON.parse(payloadString);
        setuserAllData(payload.userData);
      }
    } else {
      setuserAllData({});
    }
  }, []);

  return {
    user: { userAllData },
    userStatus: user,
  };
};
