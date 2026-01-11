// HobbyCard Component
export default function HobbyCard({ icon, title, desc }) {
    return (
        <div className="bg-[#111111] border border-[#222222] p-8 rounded-4xl hover:border-blue-500/30 transition-all group text-center">
            <div className="text-blue-400 text-3xl flex justify-center mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h5 className="font-bold text-lg text-white">{title}</h5>
            <p className="text-xs text-[#555] uppercase tracking-widest mt-1">{desc}</p>
        </div>
    );
}