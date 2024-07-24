import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: any }>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
