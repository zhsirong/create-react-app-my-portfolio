import "../styles/globals.css"; 
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="top-gradient-bar" /> {/* 确保这行在这里 */}
      <Component {...pageProps} />
    </>
  );
}