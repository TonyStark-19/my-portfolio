// import icons
import { LuCircle } from "react-icons/lu";

// timeline node for experience cards, shows a circle on the timeline with hover effects
export default function TimelineNode() {
    return (
        <div className="absolute -left-2.25 top-1.5">
            <div className="relative flex items-center justify-center">
                <LuCircle className="text-[#222222] fill-[#0a0a0a] group-hover:text-blue-400 transition-colors duration-500" size={18} />
                <div className="absolute w-2 h-2 bg-blue-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500
                    shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
            </div>
        </div>
    );
}