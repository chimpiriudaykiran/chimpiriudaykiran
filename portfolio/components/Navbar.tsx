"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import Link from "next/link"; // Added missing import

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg bg-base-100 sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                    {portfolioData.name}
                </Link>
                <button className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <motion.div
                    className={`flex-col lg:flex-row lg:flex ${isOpen ? "flex" : "hidden"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                        <Link key={item} href={`/${item.toLowerCase()}`} className="btn btn-ghost mx-2">
                            {item}
                        </Link>
                    ))}
                    <a href="/Resume.pdf" download className="btn btn-primary mx-2">
                        Resume
                    </a>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;