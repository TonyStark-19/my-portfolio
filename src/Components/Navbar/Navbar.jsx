// import components
import MenuButton from "./MenuButton";
import Brand from "./Brand";

// navbar component
export default function TopNavbar({ toggleSidebar }) {
    return (
        <header className="lg:hidden fixed top-0 left-0 w-full z-50 bg-[#0e0e0e]/95 backdrop-blur-sm border-b border-white/5">
            <div className="flex items-center justify-between px-5 h-15">
                {/* brand */}
                <Brand />

                {/* menu button */}
                <MenuButton
                    onClick={toggleSidebar}
                />
            </div>
        </header>
    );
}