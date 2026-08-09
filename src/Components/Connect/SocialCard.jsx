// import icons
import { LuExternalLink } from "react-icons/lu";

// social card component for connect page
export default function SocialCard({ social }) {
    const Icon = social.icon;

    return (
        <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-between px-4 py-3.5 rounded-xl bg-white/2 border border-white/6 transition-all duration-200 ${social.accent}`}
        >
            <div className="flex items-center gap-3">
                <div
                    className="w-8 h-8 rounded-lg bg-white/4 border border-white/[0.07] flex items-center justify-center
                    text-[#666666] group-hover:text-white transition-colors duration-200"
                >
                    <Icon size={14} />
                </div>

                <div>
                    <p className="text-[13px] font-medium text-white/80 leading-none">{social.name}</p>
                    <p className="text-[11px] font-mono text-[#3a3a3a] group-hover:text-[#666666] mt-1 transition-colors duration-200">
                        {social.handle}
                    </p>
                </div>
            </div>

            {/* external link icon */}
            <LuExternalLink
                size={12}
                className="text-[#2a2a2a] group-hover:text-[#666666] transition-colors duration-200"
            />
        </a>
    );
}