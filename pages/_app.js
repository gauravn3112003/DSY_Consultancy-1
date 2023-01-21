import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
}
