import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import NavbarWrapper from "./components/NavbarWrapper";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Portfolio | Full-Stack Developer",
  description: "Showcasing projects, skills, and experience in full-stack development.",
  keywords: ["Full stack developer", "React developer", "Portfolio", "Web developer"],
  openGraph: {
    title: "My Portfolio | Full-Stack Developer",
    description: "Showcasing projects, skills, and experience in full-stack development.",
    url: "https://yourwebsite.com",
    siteName: "My Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NavbarWrapper />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
