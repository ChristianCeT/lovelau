import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";

export const metadata = {
  title: "Our love review",
  description: "For Laura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
