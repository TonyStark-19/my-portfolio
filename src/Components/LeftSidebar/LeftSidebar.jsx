// import uselocation hook
import { useLocation } from "react-router-dom";

// import icons
import { FaHome, FaRegUser, FaCode, FaProjectDiagram, FaBriefcase } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { LuX } from "react-icons/lu";

// nav links data
const NAV_ITEMS = [
    { name: "Home", slug: "home", icon: FaHome, path: "/home" },
    { name: "About", slug: "about", icon: FaRegUser, path: "/about" },
    { name: "Skills", slug: "skills", icon: FaCode, path: "/skills" },
    { name: "Projects", slug: "projects", icon: FaProjectDiagram, path: "/projects" },
    { name: "Experience", slug: "experience", icon: FaBriefcase, path: "/experience" },
    { name: "Articles", slug: "articles", icon: MdOutlineArticle, path: "/articles" },
    { name: "Connect", slug: "connect", icon: IoShareSocialOutline, path: "/connect" },
];

// import components
import NavItem from "./NavItem";
import ProfileCard from "./ProfileCard";

// left sidebar component
export default function LeftSidebar({ isOpen, setIsOpen }) {
    const { pathname } = useLocation();
    const activePath = pathname;

    // actice tab
    const isActive = (item) =>
        activePath === item.path || (activePath === "/" && item.slug === "home");

    return (
        <aside
            className={`fixed lg:sticky inset-0 lg:inset-auto top-0 left-0 z-50 h-screen w-full lg:w-80 bg-[#0e0e0e] border-r border-white/5
            transform transition-transform duration-300 ease-out
            ${isOpen
                    ? "translate-x-0"
                    : "-translate-x-full"
                } lg:translate-x-0 flex flex-col
            `}
        >
            {/* Mobile header */}
            <div className="lg:hidden flex items-center justify-between px-5 py-3.5 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                    {/* Logo */}
                    <img
                        src="/images/Other/profile.jpg"
                        alt="profile"
                        className="w-7 h-7 rounded-full"
                    />

                    <span className="text-[16px] font-semibold text-white/90 tracking-wide">
                        Aditya Chandel
                    </span>
                </div>

                <button
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/4 border border-white/[0.07] text-[#777777] hover:text-white
                    hover:bg-white/8 hover:border-white/12 active:scale-95 transition-all duration-150"
                >
                    <LuX className="text-[18px]" />
                </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar">
                {/* Profile Card */}
                <ProfileCard />

                {/* Nav */}
                <nav className="flex-1 px-3 pb-4 space-y-2">
                    {NAV_ITEMS.map((item) => (
                        <NavItem
                            key={item.slug}
                            item={item}
                            isActive={isActive(item)}
                            onClick={() => setIsOpen(false)}
                        />
                    ))}
                </nav>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-white/4">
                <p className="text-[#3a3a3a] text-[11px] text-center tracking-wide">
                    Made with <span className="text-[#553333]">♥</span> by Aditya Chandel
                </p>
            </div>
        </aside>
    );
}