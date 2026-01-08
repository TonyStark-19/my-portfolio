// import useState from react
import { useState } from "react";

// import icons from react-icons
import { FaHome, FaRegUser, FaCode, FaProjectDiagram, FaBriefcase } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

// define pages for navigation
const pages = [
    { name: "Home", slug: "home", icon: <FaHome /> },
    { name: "About", slug: "about", icon: <FaRegUser /> },
    { name: "Skills", slug: "skills", icon: <FaCode /> },
    { name: "Projects", slug: "projects", icon: <FaProjectDiagram /> },
    { name: "Experience", slug: "experience", icon: <FaBriefcase /> },
    { name: "Articles", slug: "articles", icon: <MdOutlineArticle /> },
    { name: "Connect", slug: "connect", icon: <IoShareSocialOutline /> },
];

// Left Sidebar Component
export default function LeftSidebar() {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <aside className="w-80 flex flex-col bg-[#111111] h-screen border-r border-[#222222] sticky top-0">
            {/* Profile Section */}
            <div className="flex flex-col items-center py-10">
                <div className="relative">
                    <img
                        src="/images/profile.jpg"
                        alt="Profile"
                        className="w-32 h-32 rounded-2xl object-cover border-2 border-[#333333] grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 flex items-center justify-center">
                        {/* The Pinging Radar Circle */}
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                        {/* The Solid Static Circle (Your original node) */}
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-4 border-[#111111]"></span>
                    </div>
                </div>
                <h1 className="mt-4 text-white font-semibold text-lg tracking-wide">Aditya chandel</h1>
                <p className="text-[#666666] text-sm mt-1">Fullstack Developer</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
                {pages.map((page) => {
                    const isActive = activeTab === page.slug;
                    return (
                        <button
                            key={page.slug}
                            onClick={() => setActiveTab(page.slug)}
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
                        </button>
                    );
                })}
            </nav>

            {/* Bottom Footer */}
            <div className="px-6 pb-3 text-[#888888] text-xs text-center">
                Made with ❤️ by Aditya chandel
            </div>
        </aside>
    );
}