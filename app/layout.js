import { Inter } from "next/font/google";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Providers } from "./context/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZOYO",
  description: "Decentralized Ride-Hailing system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
