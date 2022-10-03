import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full bg-gray-50 h-[100vh] ">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
