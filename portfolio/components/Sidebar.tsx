import { portfolioData } from "@/data/portfolioData";

const Sidebar: React.FC = () => (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 hidden md:block z-50">
        <ul className="menu menu-vertical bg-base-200 p-4 rounded-r-lg shadow-lg">
            <li><a href={portfolioData.github} target="_blank" className="btn btn-ghost tooltip" data-tip="GitHub"><i className="fab fa-github"></i></a></li>
            <li><a href={portfolioData.linkedin} target="_blank" className="btn btn-ghost tooltip" data-tip="LinkedIn"><i className="fab fa-linkedin"></i></a></li>
            <li><a href={portfolioData.website} target="_blank" className="btn btn-ghost tooltip" data-tip="Website"><i className="fas fa-globe"></i></a></li>
            <li><a href={portfolioData.googleScholar} target="_blank" className="btn btn-ghost tooltip" data-tip="Google Scholar"><i className="fas fa-graduation-cap"></i></a></li>
        </ul>
    </div>
);

export default Sidebar;