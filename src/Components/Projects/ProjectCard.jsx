// import icons
import { LuExternalLink, LuGithub } from "react-icons/lu";

// import components
import TechTag from "./TechTag";

// project card component
export default function ProjectCard({ project }) {
    return (
        <div
            className="group bg-white/2 border border-white/6 rounded-2xl overflow-hidden flex flex-col
            hover:bg-white/4 hover:border-white/12 transition-all duration-300"
        >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-[#111111]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-75 grayscale-[0.3] group-hover:opacity-100 group-hover:grayscale-0 
                    group-hover:scale-[1.03] transition-all duration-500"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col gap-4">
                {/* Title row */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-[18px]">{project.icon}</span>

                        <div>
                            <h3 className="text-[15px] font-semibold text-white/90 tracking-wide leading-tight">
                                {project.title}
                            </h3>

                            {project.client && (
                                <p className="text-[11px] text-[#444444] mt-0.5 font-mono tracking-wide">
                                    for {project.client}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-1.5 shrink-0">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/4 border border-white/[0.07] text-[#555555]
                                hover:text-white hover:bg-white/8 transition-all duration-150"
                                title="Source Code"
                            >
                                <LuGithub size={14} />
                            </a>
                        )}

                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/4 border border-white/7 text-[#555555]
                            hover:text-white hover:bg-white/8 transition-all duration-150"
                            title="Live Demo"
                        >
                            <LuExternalLink size={14} />
                        </a>
                    </div>
                </div>

                {/* Description */}
                <p className="text-[13px] text-[#555555] leading-relaxed group-hover:text-[#777777] transition-colors duration-300 flex-1">
                    {project.summary}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                    {project.tech.map((t) => (
                        <TechTag
                            key={t}
                            label={t}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}