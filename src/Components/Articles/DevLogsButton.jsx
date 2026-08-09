// import icons
import { FiChevronRight } from "react-icons/fi";

// DevLogs button component
export default function DevLogsButton() {
    return (
        <div
            className="mb-10 p-5 rounded-xl border border-zinc-900 bg-zinc-950/40 flex flex-col md:flex-row md:items-center justify-between 
            gap-4 transition-colors hover:border-zinc-800"
        >
            <div className="space-y-1 max-w-3xl">
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
                Explore DevLogs <FiChevronRight size={14} className="inline-block ml-1" />
            </a>
        </div>
    )
}