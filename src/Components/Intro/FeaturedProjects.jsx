// import icons
import { LuArrowRight, LuLayers, LuDatabase } from "react-icons/lu";

// import link
import { Link } from "react-router-dom";

// import components
import ProjectCard from "./ProjectCard";

// featured projects data
const FEATURED_PROJECTS = [
    {
        title: "DevStash",
        summary: "A full-stack MERN application for developers to save, explore, and contribute favorite resources across multiple domains.",
        image: "/images/Projects/Community/DevStash.png",
        live: "https://devstash-nine.vercel.app",
        github: "https://github.com/TonyStark-19/DevStash",
        icon: <LuLayers className="text-blue-400" />,
        accent: "blue",
    },
    {
        title: "LearnSQL",
        summary: "Beginner-friendly, interactive SQL documentation focusing on clarity, real examples, and visual learning.",
        image: "/images/Projects/Community/LearnSql.png",
        live: "https://learn-sql-eight.vercel.app/",
        github: "https://github.com/TonyStark-19/LearnSQL",
        icon: <LuDatabase className="text-emerald-400" />,
        accent: "emerald",
    },
];

// featured projects section for intro page
export default function FeaturedProjects() {
    return (
        <div className="mt-24 max-w-4xl">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-px h-5 bg-white/20 rounded-full" />

                    <h4 className="text-[18px] text-white font-medium tracking-tight">
                        Featured Projects
                    </h4>
                </div>

                <Link
                    to="/projects"
                    className="flex items-center gap-1.5 text-[12px] text-[#3a3a3a] hover:text-white/50 transition-colors duration-150 group"
                >
                    View all
                    <LuArrowRight className="group-hover:translate-x-0.5 transition-transform duration-150" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {FEATURED_PROJECTS.map((project) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
}