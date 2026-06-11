// import components
import useDaysStreak from "../Components/Footer/useDaysStreak";
import Footer from "../Components/Footer/Footer";
import ArticleCard from "../Components/Articles/ArticleCard";

// constants
const STREAK_START = Date.UTC(2024, 6, 9);

// articles data
const ARTICLES = [
    {
        title: "Learning by Building",
        description: "I built 79 C programs before I truly understood coding. Not from tutorials. Not from docs. But by building.",
        date: "April 06, 2026",
        readTime: "5 min read",
        link: "https://medium.com/@adityachandel371/learning-by-building-b591e7f4646e",
        image: "/images/Articles/coding.jpg",
        tags: ["Learning by Building", "Web Development", "Programming"],
        featured: true,
    },
    {
        title: "How to Be Consistent",
        description: "The biggest struggle when learning a new skill is staying consistent. We all start with high energy, but maintaining it is the real challenge.",
        date: "June 18, 2025",
        readTime: "7 min read",
        link: "https://medium.com/@adityachandel371/how-to-be-consistent-c080f45e0f1d",
        image: "/images/Articles/Consistency.png",
        tags: ["Productivity", "Self Growth", "Consistency"],
        featured: false,
    },
];

// articles page
export default function Articles() {
    const daysStreak = useDaysStreak(STREAK_START);

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-16 max-lg:pt-28"
            style={{
                backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                imageRendering: 'pixelated',
            }}
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-blue-400 font-mono tracking-[0.2em] uppercase text-[11px] mb-3">
                        Articles
                    </p>

                    <h1 className="text-[36px] md:text-[52px] font-bold tracking-tight leading-none">
                        Writing
                    </h1>

                    <p className="text-[#444444] mt-4 text-[15px] leading-relaxed max-w-xl">
                        Thoughts on development, consistency, and documenting my{" "}
                        <span className="text-[#666666]">{daysStreak}-day journey</span>.
                    </p>
                </div>

                {/* DevLogs Standalone Logging Callout Block */}
                <div
                    className="mb-10 p-5 rounded-xl border border-zinc-900 bg-zinc-950/40 flex flex-col sm:flex-row sm:items-center justify-between 
                    gap-4 transition-colors hover:border-zinc-800"
                >
                    <div className="space-y-1 max-w-xl">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

                            <h3 className="text-sm font-semibold tracking-tight text-zinc-200">
                                Interactive Live Logs
                            </h3>
                        </div>

                        <p className="text-xs text-zinc-400 leading-relaxed">
                            While I publish polished articles on Medium, I maintain an independent, dedicated system specifically to break down my daily
                            technical insights, internal shifts, and execution workflows in real time.
                        </p>
                    </div>

                    <a
                        href="https://devlogs-henna.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 text-center text-xs font-mono px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 
                        hover:bg-zinc-800 hover:text-white transition-all duration-200 cursor-pointer"
                    >
                        Explore DevLogs &rarr;
                    </a>
                </div>

                {/* Article feed */}
                <div className="space-y-4">
                    {ARTICLES.map((article) => (
                        <ArticleCard
                            key={article.link}
                            article={article}
                        />
                    ))}
                </div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}