import type { Metadata } from "next";
import "@/app/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Uday Kiran Chimpiri - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      </head>
      <body>
      <div
          className="fixed inset-0 z-[-1] bg-gradient-to-br from-primary/50 via-base-200/50 to-accent/50  backdrop-blur-3xl bg-black/50"
        />
        
        <Navbar />
        <Sidebar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
