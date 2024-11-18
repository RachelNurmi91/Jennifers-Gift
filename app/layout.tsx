import "@styles/globals.css";
import Nav from "@components/Nav";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jennifer's Gift",
  description: "Raising awareness for metastatic breast cancer.",
};

export default function RootLayout({ children }) {
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
