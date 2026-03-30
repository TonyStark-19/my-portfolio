// import components
import useDaysStreak from "../Components/Footer/useDaysStreak";
import Footer from "../Components/Footer/Footer";
import ProjectCard from "../Components/Projects/ProjectCard";
import FreelanceCard from "../Components/Projects/FreelanceCard";
import SectionHeader from "../Components/Projects/SectionHeader";

// constants
const STREAK_START = Date.UTC(2024, 6, 9);

// import icons
import { LuLayers, LuDatabase, LuCode, LuFolderCode, LuBriefcase } from "react-icons/lu";

// project data
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

// freelance projects data
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

// projects page
export default function Projects() {
    const daysStreak = useDaysStreak(STREAK_START);

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-16 max-lg:pt-28">
            <div className="max-w-5xl mx-auto">
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
                <div className="pt-8 border-t border-white/5">
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