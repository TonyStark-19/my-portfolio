// import react icons
import { LuMenu } from "react-icons/lu";

// Top Navbar Component
export default function TopNavbar({ toggleSidebar }) {
    return (
        <header className="lg:hidden fixed top-0 left-0 w-full z-50 bg-[#111111] border-b border-[#222222]">
            <div className="flex items-center justify-between px-6 py-3">
                {/* Logo / Brand Name */}
                <div className="text-white font-semibold text-lg">
                    Aditya Chandel
                </div>

                {/* Menu Toggle Button */}
                <button
                    onClick={toggleSidebar}
                    className="p-2.5 rounded-xl bg-[#111111] border border-[#222222] text-white hover:bg-[#222222] transition"
                >
                    <LuMenu className="text-xl" />
                </button>
            </div>
        </header>
    );
}