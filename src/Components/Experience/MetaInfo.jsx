// import icons
import { LuCalendar, LuMapPin } from "react-icons/lu";

// meta info component
export default function MetaInfo({ duration, location }) {
    return (
        <div className="flex flex-col md:items-end text-[11px] font-mono text-[#444444] tracking-wider uppercase gap-1 shrink-0">
            <span className="flex items-center gap-1.5">
                <LuCalendar size={11} />
                {duration}
            </span>

            <span className="flex items-center gap-1.5">
                <LuMapPin size={11} />
                {location}
            </span>
        </div>
    );
}