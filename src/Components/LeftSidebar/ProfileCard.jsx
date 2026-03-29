// profile card component
export default function ProfileCard() {
    return (
        <div className="flex flex-col items-center py-8 px-4">
            {/* Avatar */}
            <div className="relative mb-4">
                <div className="w-32 h-32 rounded-2xl overflow-hidden ring-1 ring-white/10">
                    <img
                        src="/images/Other/profile.jpg"
                        alt="Aditya Chandel"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100"
                    />
                </div>

                {/* Online badge */}
                <span className="absolute -bottom-1 -right-1 flex items-center justify-center w-5 h-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                    <span className="relative flex rounded-full h-3.5 w-3.5 bg-green-500 ring-2 ring-[#111111]" />
                </span>
            </div>

            {/* Name & title */}
            <h2 className="text-white text-[15px] font-semibold tracking-wide leading-tight">
                Aditya Chandel
            </h2>

            <p className="mt-1 text-[#555555] text-[12px] tracking-widest uppercase font-medium">
                Full Stack Developer
            </p>

            {/* Thin divider */}
            <div className="mt-5 w-10 h-px bg-white/8" />
        </div>
    );
}