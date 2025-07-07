import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return <>
    {/* This will render the Navbar component on every page */}
    <Navbar />
    {/* This will render the current page's component */}
    <Component {...pageProps} />
  </>
}
