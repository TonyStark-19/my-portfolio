// import components
import useDaysStreak from "../Components/Footer/useDaysStreak";
import Footer from "../Components/Footer/Footer";
import ProjectCard from "../Components/Projects/ProjectCard";
import FreelanceCard from "../Components/Projects/FreelanceCard";
import SectionHeader from "../Components/Projects/SectionHeader";

// constants
const STREAK_START = Date.UTC(2024, 6, 9);

// import icons
import { LuLayers, LuDatabase, LuCode, LuFolderCode, LuBriefcase, LuBookOpen, LuServer, LuLeaf } from "react-icons/lu";

// community projects data
const COMMUINITY_PROJECTS = [
    {
        title: "OpenSetup",
        summary: "A full-stack community platform where developers can discover, contribute, and request development setup guides with Markdown support and an admin approval workflow.",
        tech: ["React", "TypeScript", "Node", "Express", "MongoDB", "AWS", "Tailwind CSS"],
        image: "/images/Projects/Community/OpenSetup.png",
        live: "https://open-setup.vercel.app/",
        github: "https://github.com/TonyStark-19/OpenSetup",
        icon: <LuBookOpen className="text-emerald-400" />,
    },
    {
        title: "DevStash",
        summary: "A full-stack MERN application for developers to save, explore, and contribute favorite resources across multiple domains.",
        tech: ["MongoDB", "Express", "React", "Node", "Tailwind"],
        image: "/images/Projects/Community/DevStash.png",
        live: "https://devstash-nine.vercel.app",
        github: "https://github.com/TonyStark-19/DevStash",
        icon: <LuLayers className="text-blue-400" />,
    },
    {
        title: "LearnSQL",
        summary: "Beginner-friendly, interactive SQL documentation focusing on clarity, real examples, and visual learning.",
        tech: ["React JS", "Tailwind CSS", "React Router"],
        image: "/images/Projects/Community/LearnSql.png",
        live: "https://learn-sql-eight.vercel.app/",
        github: "https://github.com/TonyStark-19/LearnSQL",
        icon: <LuDatabase className="text-emerald-400" />,
    },
    {
        title: "C-Coding Website",
        summary: "Categorized C programs across three levels of complexity, transformed from a repo into a responsive React app.",
        tech: ["React JS", "CSS", "C", "React Router", "Open-Source"],
        image: "/images/Projects/Community/C-Coding.png",
        live: "https://c-programming-six.vercel.app/",
        github: "https://github.com/TonyStark-19/C-Coding",
        icon: <LuFolderCode className="text-orange-400" />,
    },
    {
        title: "JS Mini Projects",
        summary: "A curated collection of HTML, CSS & JS projects built to sharpen front-end logic and UI/UX fundamentals.",
        tech: ["JavaScript", "HTML5", "CSS3", "Open-Source"],
        image: "/images/Projects/Community/HtmlCssJs.png",
        live: "https://html-css-js-projects-five.vercel.app/",
        github: "https://github.com/TonyStark-19/HTML-CSS-JS-Projects",
        icon: <LuCode className="text-yellow-400" />,
    },
    {
        title: "HTML/CSS UI Kits",
        summary: "Showcasing multiple UI components, animations, and layouts built to strengthen pure CSS skills.",
        tech: ["HTML5", "CSS3", "Animations", "Open-Source"],
        image: "/images/Projects/Community/HtmlCss.png",
        live: "https://html-css-projects-phi.vercel.app/",
        github: "https://github.com/TonyStark-19/HTML-CSS-Projects",
        icon: <LuLayers className="text-pink-400" />,
    },
];

// project data
const PERSONAL_PROJECTS = [
    {
        title: "DevLogs",
        summary: "A deeply personalized, interactive digital engineering logbook featuring full-screen fluid sidebars, route-based markdown scraping for a dynamic real-time reference system, and responsive mobile-first navigation.",
        tech: ["React", "TypeScript", "Tailwind CSS", "React Router"],
        image: "/images/Projects/Side-Projects/DevLogs.png",
        live: "https://devlogs-henna.vercel.app",
        github: "https://github.com/TonyStark-19/DevLogs",
        icon: <LuLayers className="text-emerald-400" />,
    },
    {
        title: "Bookora",
        summary: "A full-stack book discovery platform featuring Google OAuth, live book search, personalized recommendations, wishlist management, cart functionality, and user activity tracking.",
        tech: ["MongoDB", "Express", "React", "Node", "TypeScript", "Tailwind"],
        image: "/images/Projects/Side-Projects/Bookora.png",
        live: "https://bookora-hazel.vercel.app",
        github: "https://github.com/TonyStark-19/Bookora",
        icon: <LuBookOpen className="text-amber-400" />,
    },
    {
        title: "Planto",
        summary: "A modern premium plant e-commerce landing page featuring elegant animations, glassmorphism-inspired UI, product showcases, customer testimonials, and a fully responsive shopping experience.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "AOS"],
        image: "/images/Projects/Side-Projects/Planto.png",
        live: "https://planto-snowy.vercel.app/",
        github: "https://github.com/TonyStark-19/Planto",
        icon: <LuLeaf className="text-green-400" />,
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
];

// freelance projects data
const FREELANCE_PROJECTS = [
    {
        title: "Krutrim Insights Website",
        client: "Krutrim Insights",
        summary: "An interconnected full-stack Admin, Mentor, and Student portal infrastructure backed by robust serverless logic. Engineered an advanced cloud architecture featuring 16 database tables, 12 API Gateways, 29 API routes, 13 Lambda functions, and automated email workflows via AWS SES.",
        tech: ["React.js", "Tailwind CSS", "AWS Lambda", "API Gateway", "Amazon S3", "AWS SES"],
        image: "/images/Projects/Freelance/Krutrim.png",
        live: "https://www.krutriminsights.com",
        github: null,
        icon: <LuServer className="text-blue-400" />,
    },
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

// projects page
export default function Projects() {
    const daysStreak = useDaysStreak(STREAK_START);

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-16 max-lg:pt-28"
            style={{
                backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.04) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                imageRendering: 'pixelated',
            }}
        >
            <div className="max-w-5xl mx-auto">
                {/* ── Community Projects ── */}
                <div className="mb-20">
                    <SectionHeader
                        label="Community"
                        title="Open Source & Collaborative Projects"
                        description="Global tools, group codebases, and open repositories I've contributed to or built for the developer community."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                        {COMMUINITY_PROJECTS.map((project) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                            />
                        ))}
                    </div>
                </div>

                {/* ── Personal Projects ── */}
                <div className="mb-20">
                    <SectionHeader
                        label="Personal"
                        title="Side Projects"
                        description="Things I built out of curiosity, to learn, or to solve a real problem."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                        {PERSONAL_PROJECTS.map((project) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                            />
                        ))}
                    </div>
                </div>

                {/* ── Freelance Projects ── */}
                <div className="pt-8 border-t border-white/5">
                    <SectionHeader
                        label="Freelance"
                        title="Client Work"
                        description="Real briefs, real clients, real deadlines."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                        {FREELANCE_PROJECTS.map((project) => (
                            <FreelanceCard
                                key={project.title}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}