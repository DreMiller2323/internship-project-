import Navbar from "../components/NavBar.js";
import Footer from "../components/Footer.js"
import "./global.css"
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
