// import github calendar
import { GitHubCalendar } from "react-github-calendar";

// import icons
import { LuGithub } from "react-icons/lu";

// github calendar card component
export default function GitHubCard({ username, theme }) {
    return (
        <div className="mt-10 p-7 bg-white/2 border border-white/6 rounded-2xl max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/[0.07] flex items-center justify-center">
                    <LuGithub className="text-[15px] text-[#888888]" />
                </div>

                <div>
                    <h4 className="text-[13.5px] font-medium text-white/80">Commit History</h4>
                    <p className="text-[11px] text-[#444444] tracking-widest uppercase mt-0.5">Live · GitHub API</p>
                </div>
            </div>

            <div className="overflow-x-auto">
                <GitHubCalendar
                    username={username}
                    blockSize={11}
                    blockMargin={4}
                    colorScheme="dark"
                    fontSize={13}
                    theme={theme}
                    labels={{ totalCount: "{{count}} contributions in the last year" }}
                    style={{ color: "#555555" }}
                />
            </div>
        </div>
    );
}