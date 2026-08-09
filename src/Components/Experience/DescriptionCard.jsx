// import components
import SkillTag from "./SkillTag";

// import icons
import { TbPointFilled } from "react-icons/tb";

// description card
export default function DescriptionCard({ description, skills }) {
    return (
        <div className="bg-white/2 border border-white/5 p-5 rounded-xl group-hover:border-white/10 transition-all duration-500">
            <ul className="space-y-3">
                {description.map((item, i) => (
                    <li
                        key={i}
                        className="text-[#555555] group-hover:text-[#777777] leading-relaxed text-[13px] flex gap-3 transition-colors duration-300
                        flex-row justify-start items-center"
                    >
                        <span className="text-blue-500/40 shrink-0 max-sm:hidden">
                            <TbPointFilled />
                        </span>

                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-white/5">
                {skills.map((skill) => (
                    <SkillTag
                        key={skill}
                        label={skill}
                    />
                ))}
            </div>
        </div>
    );
}