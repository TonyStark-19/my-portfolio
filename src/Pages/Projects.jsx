// import react icons
import { LuExternalLink, LuGithub, LuFolderCode, LuLayers, LuDatabase, LuCode } from "react-icons/lu";

// Projects Page Component
export default function Projects() {
    const projects = [
        {
            title: "DevStash",
            summary: "A full-stack MERN application for developers to save, explore, and contribute favorite resources across multiple domains.",
            tech: ["MongoDB", "Express", "React", "Node", "Tailwind"],
            image: "/images/Projects/DevStash.png",
            live: "https://devstash-nine.vercel.app",
            github: "https://github.com/TonyStark-19/DevStash",
            featured: true,
            icon: <LuLayers className="text-blue-500" />
        },
        {
            title: "LearnSQL",
            summary: "Beginner-friendly, interactive SQL documentation focusing on clarity, real examples, and visual learning.",
            tech: ["React JS", "Tailwind CSS", "React Router"],
            image: "/images/Projects/LearnSql.png",
            live: "https://learn-sql-eight.vercel.app/",
            github: "https://github.com/TonyStark-19/LearnSQL",
            featured: false,
            icon: <LuDatabase className="text-emerald-500" />
        },
        {
            title: "React Quiz App",
            summary: "Dynamic platform with score tracking, review sections, and dual-theme support for an optimal testing experience.",
            tech: ["React Js", "Tailwind CSS", "React Router"],
            image: "/images/Projects/Quiz.png",
            live: "https://quiz-app-drab-beta.vercel.app/",
            github: "https://github.com/TonyStark-19/Quiz-app",
            featured: false,
            icon: <LuCode className="text-purple-500" />
        },
        {
            title: "C-Coding Website",
            summary: "Categorized C programs across three levels of complexity, transformed from a repo into a responsive React app.",
            tech: ["React Js", "CSS", "C", "React Router"],
            image: "/images/Projects/C-Coding.png",
            live: "https://c-programming-six.vercel.app/",
            github: "https://github.com/TonyStark-19/C-Coding",
            featured: false,
            icon: <LuFolderCode className="text-orange-500" />
        },
        {
            title: "JS Mini Projects",
            summary: "A curated collection of HTML, CSS & JS projects built to sharpen front-end logic and UI/UX fundamentals.",
            tech: ["JavaScript", "HTML5", "CSS3"],
            image: "/images/Projects/HtmlCssJs.png",
            live: "https://html-css-js-projects-five.vercel.app/",
            github: "https://github.com/TonyStark-19/HTML-CSS-JS-Projects",
            featured: false,
            icon: <LuCode className="text-yellow-500" />
        },
        {
            title: "HTML/CSS UI Kits",
            summary: "Showcasing multiple UI components, animations, and layouts built to strengthen pure CSS skills.",
            tech: ["HTML5", "CSS3", "Animations"],
            image: "/images/Projects/HtmlCss.png",
            live: "https://html-css-projects-phi.vercel.app/",
            github: "https://github.com/TonyStark-19/HTML-CSS-Projects",
            featured: false,
            icon: <LuLayers className="text-pink-500" />
        }
    ];

    // Calculate streak dynamically
    const startDate = new Date("2024-07-09");
    const today = new Date();
    const daysStreak = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-2">Projects</h2>
                    <h1 className="text-5xl font-bold tracking-tight mb-4 text-white">Selected Work</h1>
                    <p className="text-[#888888] text-xl max-w-2xl">
                        A mix of full-stack applications and mini-projects built during my <span className="text-white border-b border-white/20">
                            {daysStreak}-day journey</span>.
                    </p>
                </div>

                {/* Projects Grid - CHANGED TO 2 COLUMNS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-[#111111] border border-[#222222] rounded-[2.5rem] overflow-hidden flex flex-col hover:border-blue-500/50
                            hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-transform
                                    duration-700 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Content */}
                            <div className="p-10 flex-1 flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-[#1a1a1a] rounded-2xl border border-[#222222] group-hover:bg-[#222222] transition-colors">
                                            {project.icon}
                                        </div>
                                        <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            className="p-3 bg-[#1a1a1a] rounded-full text-[#666] hover:text-white hover:bg-[#222222] transition-all"
                                            title="Source Code"
                                        >
                                            <LuGithub size={22} />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            className="p-3 bg-[#1a1a1a] rounded-full text-[#666] hover:text-white hover:bg-[#222222] transition-all"
                                            title="Live Demo"
                                        >
                                            <LuExternalLink size={22} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-[#888888] leading-relaxed mb-8 flex-1 text-lg">
                                    {project.summary}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2.5 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs uppercase tracking-widest px-4 py-1.5 bg-[#161616] border border-[#222222] text-[#666]
                                            group-hover:text-[#aaa] group-hover:border-[#333] rounded-full transition-all"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}