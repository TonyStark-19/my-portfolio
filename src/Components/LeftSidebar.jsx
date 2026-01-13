// import useLocation from react
import { useLocation } from "react-router-dom";

// import icons from react-icons
import { FaHome, FaRegUser, FaCode, FaProjectDiagram, FaBriefcase } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { LuX } from "react-icons/lu";

// define pages for navigation
const pages = [
    { name: "Home", slug: "home", icon: <FaHome />, path: "/home" },
    { name: "About", slug: "about", icon: <FaRegUser />, path: "/about" },
    { name: "Skills", slug: "skills", icon: <FaCode />, path: "/skills" },
    { name: "Projects", slug: "projects", icon: <FaProjectDiagram />, path: "/projects" },
    { name: "Experience", slug: "experience", icon: <FaBriefcase />, path: "/experience" },
    { name: "Articles", slug: "articles", icon: <MdOutlineArticle />, path: "/articles" },
    { name: "Connect", slug: "connect", icon: <IoShareSocialOutline />, path: "/connect" },
];

// Left Sidebar Component
export default function LeftSidebar({ isOpen, setIsOpen }) {
    const location = useLocation();
    // This derived state ensures the sidebar matches the current URL
    const activePath = location.pathname;

    return (
        <aside className={`fixed lg:sticky inset-0 lg:inset-auto top-0 left-0 z-50 h-screen w-full lg:w-80 bg-[#111111] border-r border-[#222222]
                transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
            <div className="h-full flex flex-col overflow-y-auto">

                {/* Close Button (Mobile only) */}
                <div className="lg:hidden flex items-center justify-between px-6 py-3 border-b border-[#222222]">
                    {/* Logo / Brand Name */}
                    <div className="text-white font-semibold text-lg">
                        Aditya Chandel
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-xl bg-[#1a1a1a] hover:bg-[#222222] transition"
                    >
                        <LuX className="text-xl text-white" />
                    </button>
                </div>

                <nav className="flex-1 px-4 pb-5 space-y-2 overflow-y-auto custom-scrollbar">
                    {/* Profile Section */}
                    <div className="flex flex-col items-center py-10">
                        <div className="relative">
                            <img
                                src="/images/Other/profile.jpg"
                                alt="Profile"
                                className="w-32 h-32 rounded-2xl object-cover border-2 border-[#333333] grayscale hover:grayscale-0 transition-all duration-500
                                max-lg:w-75 max-lg:h-50"
                            />
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 flex items-center justify-center">
                                {/* The Pinging Radar Circle */}
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                                {/* The Solid Static Circle (Your original node) */}
                                <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-4 border-[#111111]"></span>
                            </div>
                        </div>
                        <h1 className="mt-4 text-white font-semibold text-lg tracking-wide">Aditya Chandel</h1>
                        <p className="text-[#666666] text-sm mt-1">Full Stack Developer</p>
                    </div>

                    {/* Navigation */}
                    {pages.map((page) => {
                        const isActive = activePath === page.path || (activePath === "/" && page.slug === "home");
                        return (
                            <Link
                                to={page.path}
                                key={page.slug}
                                onClick={() => setIsOpen(false)}
                                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 group cursor-pointer
                                ${isActive ? "bg-[#222222] text-white shadow-lg"
                                        : "text-[#888888] hover:bg-[#1a1a1a] hover:text-white"
                                    }`}
                            >
                                {/* Left side: Icon + Name */}
                                <div className="flex items-center space-x-4">
                                    <span className={`text-xl transition-transform duration-200 group-hover:scale-110 ${isActive ? "text-blue-400" : ""}`}>
                                        {page.icon}
                                    </span>
                                    <span className="text-sm font-medium tracking-wide">
                                        {page.name}
                                    </span>
                                </div>

                                {/* Right side: Arrow Icon */}
                                <div className={`transition-all duration-300 text-lg
                                ${isActive ? "opacity-100 translate-x-0 text-blue-400"
                                        : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                                    }`}>
                                    <IoIosArrowForward />
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom Footer */}
                <div className="px-6 pb-3 pt-3 text-[#888888] text-xs text-center">
                    Made with ❤️ by Aditya Chandel
                </div>
            </div>
        </aside>
    );
}