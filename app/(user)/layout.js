import Nevigation from "./nevigation";
import "./globals.css";
export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nevigation/>
        {children}
      </body>
    </html>
  );
}
