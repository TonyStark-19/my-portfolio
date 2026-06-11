// import components
import useDaysStreak from "../Components/Footer/useDaysStreak";
import Footer from "../Components/Footer/Footer";
import ParticleBackground from "../Components/Intro/ParticleBackground";
import FeaturedProjects from "../Components/Intro/FeaturedProjects";
import Hero from "../Components/Intro/Hero";
import Consistency from "../Components/Intro/Consistentcy";

// constants
const STREAK_START = Date.UTC(2024, 6, 9);
const GITHUB_USERNAME = "TonyStark-19";

// typing animation phrases
const TYPING_PHRASES = [
    "Full Stack Developer",
    "Open Source Contributor",
    "Freelancer",
    "Learning AI ML and Data Science",
];

// GitHub calendar theme (dark mode only)
const GITHUB_THEME = {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

// Intro page component
export default function Intro() {
    const daysStreak = useDaysStreak(STREAK_START);

    return (
        <div className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col">
            {/* Particle bg */}
            <div className="absolute inset-0 h-screen overflow-hidden">
                <ParticleBackground />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#0a0a0a] to-transparent" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 w-full flex-1 p-10 lg:p-20 max-lg:pt-28 max-[500px]:p-5 flex flex-col justify-center">
                {/* ── Hero ── */}
                <Hero TYPING_PHRASES={TYPING_PHRASES} />

                {/* ── Featured Projects ── */}
                <FeaturedProjects />

                {/* ── Consistency ── */}
                <Consistency
                    GITHUB_THEME={GITHUB_THEME}
                    GITHUB_USERNAME={GITHUB_USERNAME}
                    daysStreak={daysStreak}
                />

                {/* footer */}
                <Footer />
            </div>
        </div>
    );
}