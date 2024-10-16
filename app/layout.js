import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Jennifer's Gift",
  description: "Raising awareness for metastatic breast cancer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
