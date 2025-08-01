import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from '@clerk/nextjs'
// import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </ClerkProvider>
  );
}
