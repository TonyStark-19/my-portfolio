// brand component
export default function Brand() {
    return (
        <div className="flex items-center gap-2.5">
            {/* Monogram */}
            <div className="w-8 h-8 rounded-lg bg-white/6 border border-white/6 flex items-center justify-center">
                <span className="text-[12px] font-semibold text-white/70 tracking-tight">AC</span>
            </div>

            <span className="text-[16px] font-semibold text-white/90 tracking-wide">
                Aditya Chandel
            </span>
        </div>
    );
}