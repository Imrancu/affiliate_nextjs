import "./globals.css";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scrollbar-y-hidden">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
