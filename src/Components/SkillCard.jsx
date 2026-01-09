// Individual skill card component
export default function SkillCard({ img, label }) {
    return (
        <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl hover:scale-105 transition-all duration-300 shadow-md cursor-default group border border-transparent hover:border-blue-400">
            <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-contain"
                />
            </div>
            <span className="text-black font-bold text-sm tracking-tight whitespace-nowrap">
                {label}
            </span>
        </div>
    );
}