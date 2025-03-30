import { portfolioData } from "@/data/portfolioData";

const Footer: React.FC = () => (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content">
        <div>
            <p>Designed & Developed by <a href={portfolioData.github} target="_blank" className="link link-primary">{portfolioData.name}</a></p>
            <p>© 2025 {portfolioData.name}. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;