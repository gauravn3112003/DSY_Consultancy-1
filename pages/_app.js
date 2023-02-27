import "../styles/globals.css";
import ScrollToTop from "react-scroll-up";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import CollegeState from "directsecondyearadmission/Context/CollegeState";

export default function App({ Component, pageProps }) {
  return (
    <CollegeState>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop showUnder={160}>
        <i className="bi text-3xl pColor bi-arrow-up-square-fill"></i>
      </ScrollToTop>
    </CollegeState>
  );
}
