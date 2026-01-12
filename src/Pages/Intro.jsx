// import github calendar component
import { GitHubCalendar } from 'react-github-calendar';

// import icons
import { LuGithub, LuArrowRight } from "react-icons/lu";

// import link
import { Link } from 'react-router-dom';

// import components
import useDaysStreak from '../Components/useDaysStreak';
import Footer from '../Components/Footer';

// Intro Page Component
export default function Intro() {
    // Calculate days streak dynamically
    const daysStreak = useDaysStreak(Date.UTC(2024, 6, 9));

    return (
        <div className="w-full min-h-screen p-10 lg:p-20 max-lg:pt-30 max-[500px]:p-5 flex flex-col justify-center bg-[#0a0a0a]">

            {/* Text Content */}
            <div className="text-white max-w-4xl">
                <h3 className="text-4xl md:text-5xl font-light text-[#888888]">
                    Hi, I’m
                </h3>

                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter bg-linear-to-r from-white via-[#888888] to-[#444444]
                    bg-clip-text text-transparent py-2">
                    Aditya Chandel
                </h2>

                <h3 className="text-2xl md:text-4xl font-medium text-[#b3b3b3] mt-4">
                    Full Stack Developer
                </h3>

                <p className="mt-8 text-[#888888] text-lg max-w-2xl leading-relaxed">
                    I love <span className="text-white">building, improving, and contributing</span> to digital projects
                    that challenge me. For me, coding is more than just shipping features—it's the
                    best way to <span className="text-white">feed my creativity</span> and explore new
                    possibilities in the web space.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex space-x-4 mt-10 max-[500px]:flex-col max-[500px]:space-x-0 max-[500px]:space-y-4">
                    <Link to="/projects">
                        <button className="bg-white text-black px-8 py-3 rounded-2xl font-semibold flex items-center group hover:bg-blue-400
                        transition-all cursor-pointer max-[500px]:w-full justify-center">
                            View Projects
                            <LuArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>

                    <Link to="/about">
                        <button className="border border-[#333333] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#1a1a1a] transition-all
                        cursor-pointer max-[500px]:w-full justify-center">
                            About me
                        </button>
                    </Link>
                </div>
            </div>

            {/* Consistency & Growth Section */}
            <div className="mt-20 max-w-4xl">
                <h4 className="text-2xl text-white font-medium">
                    Consistent Coder. Daily Learner.
                </h4>
                <p className="mt-3 text-[#888888] text-lg leading-relaxed">
                    I believe in the power of marginal gains. I focus on becoming <span className="text-white">1% better every single day</span>.
                    This discipline has led me to consistently share my progress on LinkedIn for
                    <span className="text-blue-400 font-bold"> {daysStreak} consecutive days</span>.
                </p>
            </div>

            {/* GitHub Section */}
            <div className="mt-10 p-8 bg-[#111111] border border-[#222222] rounded-3xl max-w-5xl">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <LuGithub className="text-2xl text-white" />
                        <h4 className="text-white font-medium">Commit History</h4>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <GitHubCalendar
                        username="TonyStark-19"
                        blockSize={12}
                        blockMargin={5}
                        colorScheme="dark"
                        fontSize={14}
                        theme={{
                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                        }}
                        labels={{
                            totalCount: "{{count}} contributions in the last year",
                        }}
                        style={{
                            color: '#888888',
                        }}
                    />
                </div>

                <p className="text-[#444444] text-xs mt-4 uppercase tracking-widest">
                    Live Data from GitHub API
                </p>
            </div>

            <Footer />
        </div>
    );
}