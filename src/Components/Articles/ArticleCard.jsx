// import icons
import { LuExternalLink, LuClock, LuCalendar } from "react-icons/lu";

// import components
import ArticleTag from "../Articles/ArticleTag";

// article card component for articles page
export default function ArticleCard({ article }) {
    return (
        <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row bg-white/200 border border-white/6 rounded-2xl overflow-hidden
            hover:bg-white/4 hover:border-white/12 transition-all duration-300"
        >
            {/* Thumbnail */}
            <div className="sm:w-65 sm:shrink-0 h-52 sm:h-auto overflow-hidden bg-[#111111]">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between gap-4 p-6 flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                        <ArticleTag key={tag} label={tag} />
                    ))}

                    {article.featured && <ArticleTag label="Latest" variant="featured" />}
                </div>

                {/* Title */}
                <div>
                    <h2 className="text-[18px] font-semibold text-white/90 group-hover:text-white tracking-tight leading-snug
                    flex items-start gap-2 transition-colors duration-200">
                        {article.title}
                        <LuExternalLink className="text-[13px] text-[#444444] group-hover:text-white/40 shrink-0 mt-1
                        opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </h2>

                    <p className="mt-2 text-[13px] text-[#555555] leading-relaxed line-clamp-2 group-hover:text-[#777777] transition-colors duration-200">
                        {article.description}
                    </p>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-5 text-[11px] font-mono text-[#3a3a3a] tracking-wider">
                    <span className="flex items-center gap-1.5">
                        <LuCalendar size={11} /> {article.date}
                    </span>

                    <span className="w-px h-3 bg-white/6" />

                    <span className="flex items-center gap-1.5">
                        <LuClock size={11} /> {article.readTime}
                    </span>
                </div>
            </div>
        </a>
    );
}