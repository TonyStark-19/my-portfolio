// import icons
import { LuGithub, LuArrowRight } from "react-icons/lu";

// project card component for featured projects section
export default function ProjectCard({ project }) {
    const accentHover = project.accent === "blue"
        ? "hover:border-blue-500/30"
        : "hover:border-emerald-500/30";

    return (
        <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col bg-white/2 border border-white/6 rounded-2xl overflow-hidden
            transition-all duration-300 hover:bg-white/4 ${accentHover}`}
        >
            {/* Thumbnail */}
            <div className="relative w-full aspect-video overflow-hidden bg-[#111111]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-75 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0e0e0e] via-transparent to-transparent" />
            </div>

            {/* Body */}
            <div className="flex flex-col gap-3 px-5 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <span className="text-[17px]">{project.icon}</span>
                        <h3 className="text-[14px] font-semibold text-white/90 tracking-wide">
                            {project.title}
                        </h3>
                    </div>

                    <LuArrowRight className="text-[13px] text-[#333333] group-hover:text-white/40 group-hover:translate-x-0.5 transition-all duration-200" />
                </div>

                <p className="text-[13px] text-[#555555] leading-relaxed group-hover:text-[#777777] transition-colors duration-200">
                    {project.summary}
                </p>

                {/* GitHub source link */}
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 w-fit text-[11px] font-mono text-[#3a3a3a] hover:text-white/50 transition-colors duration-150"
                >
                    <LuGithub className="text-[13px]" />
                    Source
                </a>
            </div>
        </a>
    );
}