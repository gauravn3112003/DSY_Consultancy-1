import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import ScrollToTop from "react-scroll-up";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import SpecificData from "./Components/SpecificData";
export default function App({ Component, pageProps }) {
  SpecificData();
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
