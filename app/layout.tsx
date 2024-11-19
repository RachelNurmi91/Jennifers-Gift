import "@styles/globals.css";
import Nav from "@components/Nav";
import { Roboto } from "next/font/google";
// Import ReactNode for type definition
import { ReactNode } from "react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jennifer's Gift",
  description: "Raising awareness for metastatic breast cancer.",
};

interface ChildrenTypes {
  children: ReactNode; // Define the type of children
}


export default function RootLayout({ children }: ChildrenTypes) {
  return (
    <html lang="en">
      <body>
        <main className={roboto.className}>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
