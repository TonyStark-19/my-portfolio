// import icons
import { LuMenu } from "react-icons/lu";

// menu button component
export default function MenuButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            aria-label="Open navigation menu"
            className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/4 border border-white/[0.07] text-[#777777] hover:text-white
            hover:bg-white/8 hover:border-white12 active:scale-95 transition-all duration-150"
        >
            <LuMenu className="text-[18px]" />
        </button>
    );
}