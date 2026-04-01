// import icons
import { MdSchool } from "react-icons/md";

// education card component
export default function EducationCard({ title, subtitle, duration, extra }) {
    return (
        <div className="flex gap-4 p-5 rounded-2xl bg-white/2 border border-white/6 hover:bg-white/4 hover:border-blue-400/20 transition-all duration-300">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-400/10">
                <MdSchool className="text-blue-400 text-[18px]" />
            </div>

            <div>
                <h4 className="text-[14px] font-semibold text-white/90">
                    {title}
                </h4>

                <p className="text-[13px] text-white/60">{subtitle}</p>
                <p className="text-[12px] text-white/40 mt-1">{duration}</p>

                {extra && (
                    <p className="text-[12px] text-blue-400 mt-1">{extra}</p>
                )}
            </div>
        </div>
    );
}