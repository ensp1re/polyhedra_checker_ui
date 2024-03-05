
import { Inter } from "next/font/google";

import { Poppins } from "next/font/google"
import "./globals.css";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/footer/footer";
import { StateProvider } from "./contexts/StateContext";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "700"],
})

export const metadata = {
  title: "Checker",
  description: "Polyhedra checker airdrop. Just simulation nothing more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black`}>
        <StateProvider>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow h-full">
            {children}
          </main>
          <Footer />
        </div>
        </StateProvider>
      </body>
    </html>
  );
}
