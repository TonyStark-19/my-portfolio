import { LuExternalLink, LuGithub, LuFolderCode, LuLayers, LuDatabase, LuCode, LuBriefcase } from "react-icons/lu";

import useDaysStreak from "../Components/Footer/useDaysStreak";
import Footer from "../Components/Footer/Footer";

// ─── Constants ────────────────────────────────────────────────────────────────

const STREAK_START = Date.UTC(2024, 6, 9);

const PERSONAL_PROJECTS = [
    {
        title: "DevStash",
        summary: "A full-stack MERN application for developers to save, explore, and contribute favorite resources across multiple domains.",
        tech: ["MongoDB", "Express", "React", "Node", "Tailwind"],
        image: "/images/Projects/Side-Projects/DevStash.png",
        live: "https://devstash-nine.vercel.app",
        github: "https://github.com/TonyStark-19/DevStash",
        icon: <LuLayers className="text-blue-400" />,
    },
    {
        title: "LearnSQL",
        summary: "Beginner-friendly, interactive SQL documentation focusing on clarity, real examples, and visual learning.",
        tech: ["React JS", "Tailwind CSS", "React Router"],
        image: "/images/Projects/Side-Projects/LearnSql.png",
        live: "https://learn-sql-eight.vercel.app/",
        github: "https://github.com/TonyStark-19/LearnSQL",
        icon: <LuDatabase className="text-emerald-400" />,
    },
    {
        title: "Quizify",
        summary: "Responsive React + Tailwind interview quiz platform with multi-topic quizzes, instant scoring, answer review, and light/dark mode.",
        tech: ["React JS", "Tailwind CSS", "React Router"],
        image: "/images/Projects/Side-Projects/Quiz.png",
        live: "https://quiz-app-drab-beta.vercel.app/",
        github: "https://github.com/TonyStark-19/Quiz-app",
        icon: <LuCode className="text-purple-400" />,
    },
    {
        title: "C-Coding Website",
        summary: "Categorized C programs across three levels of complexity, transformed from a repo into a responsive React app.",
        tech: ["React JS", "CSS", "C", "React Router", "Open-Source"],
        image: "/images/Projects/Side-Projects/C-Coding.png",
        live: "https://c-programming-six.vercel.app/",
        github: "https://github.com/TonyStark-19/C-Coding",
        icon: <LuFolderCode className="text-orange-400" />,
    },
    {
        title: "JS Mini Projects",
        summary: "A curated collection of HTML, CSS & JS projects built to sharpen front-end logic and UI/UX fundamentals.",
        tech: ["JavaScript", "HTML5", "CSS3", "Open-Source"],
        image: "/images/Projects/Side-Projects/HtmlCssJs.png",
        live: "https://html-css-js-projects-five.vercel.app/",
        github: "https://github.com/TonyStark-19/HTML-CSS-JS-Projects",
        icon: <LuCode className="text-yellow-400" />,
    },
    {
        title: "HTML/CSS UI Kits",
        summary: "Showcasing multiple UI components, animations, and layouts built to strengthen pure CSS skills.",
        tech: ["HTML5", "CSS3", "Animations", "Open-Source"],
        image: "/images/Projects/Side-Projects/HtmlCss.png",
        live: "https://html-css-projects-phi.vercel.app/",
        github: "https://github.com/TonyStark-19/HTML-CSS-Projects",
        icon: <LuLayers className="text-pink-400" />,
    },
];

const FREELANCE_PROJECTS = [
    {
        title: "Cervine",
        client: "Cervine Home Loans",
        summary: "Home loan aggregator platform built with a clean, professional UI and responsive layout to help users explore loan services and financial tools.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/images/Projects/Freelance/Cervine.png",
        live: "https://cervine.vercel.app/",
        github: null,
        icon: <LuLayers className="text-amber-400" />,
    },
    {
        title: "DS Machine Tools",
        client: "DS Machine Tools (P) Ltd.",
        summary: "Fully responsive business website showcasing the company's services, capabilities, and products with smooth animations and a professional UI.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/images/Projects/Freelance/DS.png",
        live: "https://ds-machine-tools.vercel.app/",
        github: null,
        icon: <LuBriefcase className="text-amber-400" />,
    },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TechTag({ label }) {
    return (
        <span className="text-[11px] uppercase tracking-widest px-3 py-1 bg-white/[0.03] border border-white/[0.06] text-[#555555]
            group-hover:text-[#888888] group-hover:border-white/[0.1] rounded-full transition-all duration-300">
            {label}
        </span>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden flex flex-col
            hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300">

            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-[#111111]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-75 grayscale-[0.3]
                        group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.03]
                        transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col gap-4">

                {/* Title row */}
                <div className="flex items-start justify-between gap-4">
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
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-8 h-8 rounded-lg
                                    bg-white/[0.04] border border-white/[0.07] text-[#555555]
                                    hover:text-white hover:bg-white/[0.08] transition-all duration-150"
                                title="Source Code"
                            >
                                <LuGithub size={14} />
                            </a>
                        )}
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-8 h-8 rounded-lg
                                bg-white/[0.04] border border-white/[0.07] text-[#555555]
                                hover:text-white hover:bg-white/[0.08] transition-all duration-150"
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
                        <TechTag key={t} label={t} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function FreelanceCard({ project }) {
    return (
        <div className="group bg-white/[0.02] border border-amber-400/[0.08] rounded-2xl overflow-hidden flex flex-col
            hover:bg-white/[0.04] hover:border-amber-400/[0.18] transition-all duration-300">

            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-[#111111]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top opacity-75 grayscale-[0.3]
                        group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.03]
                        transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                {/* Freelance badge on image */}
                <div className="absolute top-3 left-3">
                    <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase
                        px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/25 text-amber-400">
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
                        className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0
                            bg-white/[0.04] border border-white/[0.07] text-[#555555]
                            hover:text-white hover:bg-white/[0.08] transition-all duration-150"
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
                        <TechTag key={t} label={t} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function SectionHeader({ label, title, description }) {
    return (
        <div className="mb-8">
            <p className="text-blue-400 font-mono tracking-[0.2em] uppercase text-[11px] mb-3">
                {label}
            </p>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight leading-none">
                {title}
            </h2>
            {description && (
                <p className="text-[#444444] mt-3 text-[14px] leading-relaxed max-w-xl">
                    {description}
                </p>
            )}
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Projects() {
    const daysStreak = useDaysStreak(STREAK_START);

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-16 max-lg:pt-28">
            <div className="max-w-5xl mx-auto">

                {/* Page header */}
                <div className="mb-16">
                    <p className="text-blue-400 font-mono tracking-[0.2em] uppercase text-[11px] mb-3">
                        Projects
                    </p>
                    <h1 className="text-[36px] md:text-[52px] font-bold tracking-tight leading-none">
                        Selected Work
                    </h1>
                    <p className="text-[#444444] mt-4 text-[15px] leading-relaxed max-w-xl">
                        A curated mix of full-stack apps and focused builds across my{" "}
                        <span className="text-[#666666]">{daysStreak}-day journey</span>.
                    </p>
                </div>

                {/* ── Personal Projects ── */}
                <div className="mb-20">
                    <SectionHeader
                        label="Personal"
                        title="Side Projects"
                        description="Things I built out of curiosity, to learn, or to solve a real problem."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {PERSONAL_PROJECTS.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </div>

                {/* ── Freelance Projects ── */}
                <div className="pt-8 border-t border-white/[0.05]">
                    <SectionHeader
                        label="Freelance"
                        title="Client Work"
                        description="Real briefs, real clients, real deadlines."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {FREELANCE_PROJECTS.map((project) => (
                            <FreelanceCard key={project.title} project={project} />
                        ))}
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}