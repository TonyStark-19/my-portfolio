// philosophy card component
export default function PhilosophyCard({ icon: Icon, title, description, iconColor, tag }) {
    return (
        <div
            className="relative flex flex-col gap-4 p-6 rounded-2xl bg-white/2 border border-white/6 hover:bg-white/4 hover:border-blue-400/20
            hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 group h-full"
        >
            {/* Tag */}
            <span
                className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 
                text-white/40 border border-white/8"
            >
                {tag}
            </span>

            {/* Icon */}
            <div className={`text-[20px] ${iconColor}`}>
                <Icon />
            </div>

            {/* Content */}
            <div>
                <h4 className="text-[15px] font-semibold text-white/90">
                    {title}
                </h4>

                <p className="text-[13px] text-white/60 leading-relaxed mt-2 group-hover:text-white/70 transition-colors duration-200">
                    {description}
                </p>
            </div>
        </div>
    );
}