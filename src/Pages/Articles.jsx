// import React icons
import { LuExternalLink, LuClock, LuCalendar, LuPenTool } from "react-icons/lu";

// Articles Page Component
export default function Articles() {
    const articles = [
        {
            title: "How to be Consistent?",
            description: "How to be consistent with your journey? The biggest struggle when learning a new skill is staying consistent. We all start with high energy...",
            date: "Jun 18, 2025",
            readTime: " 7 min read",
            link: "https://medium.com/@adityachandel371/how-to-be-consistent-c080f45e0f1d",
            image: "/images/Articles/Consistency.png",
            tags: ["Productivity", "Learning"]
        }
    ];

    // Calculate streak dynamically
    const startDate = new Date("2024-07-09");
    const today = new Date();
    const daysStreak = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-20">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-5xl font-bold tracking-tight mb-4 flex items-center gap-4">
                        <LuPenTool className="text-blue-500" />
                        Writing
                    </h1>
                    <p className="text-[#888888] text-xl max-w-2xl">
                        Sharing my thoughts on development, consistency, and my {daysStreak}-day journey through tech.
                    </p>
                </div>

                {/* Article Feed */}
                <div className="space-y-8">
                    {articles.map((article, index) => (
                        <a
                            key={index}
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-[#111111] border border-[#222222] rounded-4xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row items-center">
                                {/* Article Image */}
                                <div className="w-full md:w-1/3 h-56 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Article Content */}
                                <div className="w-full md:w-2/3 p-8">
                                    <div className="flex gap-2 mb-4">
                                        {article.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                        {article.title}
                                        <LuExternalLink className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h2>
                                    <p className="text-[#666666] line-clamp-2 mb-6">
                                        {article.description}
                                    </p>

                                    <div className="flex items-center gap-6 text-sm text-[#444444]">
                                        <span className="flex items-center gap-1">
                                            <LuCalendar className="text-xs" /> {article.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <LuClock className="text-xs" /> {article.readTime}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}