// import icons
import { LuExternalLink, LuBriefcase } from "react-icons/lu";

// import components
import TechTag from "./TechTag";

// freelance project card component
export default function FreelanceCard({ project }) {
    return (
        <div
            className="group bg-white/2 border border-amber-400/8 rounded-2xl overflow-hidden flex flex-col
            hover:bg-white/4 hover:border-amber-400/18 transition-all duration-300"
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

                {/* Freelance badge on image */}
                <div className="absolute top-3 left-3">
                    <span
                        className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase
                        px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/25 text-amber-400"
                    >
                        <LuBriefcase size={9} />
                        Freelance
                    </span>
                </div>
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-[18px]">{project.icon}</span>

                        <div>
                            <h3 className="text-[15px] font-semibold text-white/90 tracking-wide leading-tight">
                                {project.title}
                            </h3>

                            <p className="text-[11px] text-amber-400/60 mt-0.5 font-mono tracking-wide">
                                for {project.client}
                            </p>
                        </div>
                    </div>

                    {/* Live link only — no github for client work */}
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0 bg-white/4 border border-white/[0.07] text-[#555555]
                        hover:text-white hover:bg-white/8 transition-all duration-150"
                        title="Live Site"
                    >
                        <LuExternalLink size={14} />
                    </a>
                </div>

                <p className="text-[13px] text-[#555555] leading-relaxed group-hover:text-[#777777] transition-colors duration-300 flex-1">
                    {project.summary}
                </p>

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