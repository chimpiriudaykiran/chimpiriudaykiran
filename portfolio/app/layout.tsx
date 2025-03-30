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
        <body>
        <Navbar />
        <Sidebar />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}