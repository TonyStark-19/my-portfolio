// experience data structure supports both single roles and progressions (multiple roles at same org)
const EXPERIENCES = [
    {
        type: "single",
        role: "AI Product Developer",
        company: "Shikhram AI",
        badge: "Full-time",
        duration: "May 2026 - Present",
        location: "Delhi, India · Hybrid",
        description: [
            "Working as an AI Product Developer at Shikhram AI, building and improving AI-powered products and scalable web applications.",
            "Contributing across frontend, backend, APIs, and AI-powered workflows in a fast-paced startup environment.",
            "Focused on building impactful user experiences, scalable systems, and continuously improving product quality.",
        ],
        skills: ["React Native", "Supabase", "Fastapi", "Python", "Expo"],
        logo: "/images/Experience/Shikhram.png",
    },
    {
        type: "progression",
        company: "Krutrim Insights",
        logo: "/images/Experience/Krutrim.jpg",
        roles: [
            {
                role: "Software Developer Intern",
                company_label: "Krutrim Insights",
                badge: "New Role",
                duration: "March 2026 - May 2026",
                location: "Remote",
                description: [
                    "Built and deployed a full-stack website using React.js, Tailwind CSS, and AWS.",
                    "Developed interconnected Admin, Mentor, and Student portal systems with scalable backend workflows.",
                    "Worked with AWS Lambda, API Gateway, S3, and SES while solving complex integration and debugging challenges.",
                ],
                skills: ["React.js", "Tailwind CSS", "AWS", "API Development", "Problem Solving", "System Design"],
                isPromotion: true,
            },
            {
                role: "Campus Ambassador Intern",
                company_label: "Krutrim Insights",
                badge: null,
                duration: "Feb 2026 - Mar 2026",
                location: "Remote",
                description: [
                    "Represented Krutrim Insights within the college community to promote structured tech learning.",
                    "Drove awareness and participation for the 30-Day DSA Challenge through peer engagement.",
                    "Acted as a student liaison while strengthening communication, outreach, and leadership skills.",
                ],
                skills: ["Community Outreach", "DSA", "Communication", "Leadership"],
                isPromotion: false,
            },
        ],
    },
    {
        type: "single",
        role: "Web Development Intern",
        company: "PHICSIT InfoTech Pvt. Ltd.",
        badge: "Internship",
        duration: "Mar 2026 - Apr 2026",
        location: "Remote",
        description: [
            "Selected through Phase 2 of the Open Source Connect program after competing among 4000+ participants.",
            "Worked on real-world MERN stack projects while gaining practical industry exposure under mentorship.",
            "Improved overall UI/UX, performed code cleanup for better readability and maintainability, and contributed to enhancing development workflows.",
        ],
        skills: ["Web Development", "JavaScript", "React", "Git", "Collaboration"],
        logo: "/images/Experience/PHICSIT.jpg",
    },
    {
        type: "progression",
        company: "Open Source Global Connect",
        logo: "/images/Experience/OSGC.png",
        roles: [
            {
                role: "Web Development Intern",
                company_label: "PHICSIT InfoTech Pvt. Ltd. · via OSCG 2026",
                badge: "Phase 2",
                duration: "Mar 2026 - Apr 2026",
                location: "Remote",
                description: [
                    "Selected for Phase 2 of Open Source Connect Global (OSCG 2026) based on consistent performance and contributions.",
                    "Worked as a Web Development Intern with PHICSIT InfoTech Pvt. Ltd., gaining hands-on experience in MERN stack development under mentorship.",
                    "Contributed to improving overall UI/UX, performed code cleanup for better readability and maintainability, and enhanced project structure for smoother development workflows.",
                ],
                skills: ["Web Development", "React", "Node.js", "MongoDB", "Git"],
                isPromotion: true,
            },
            {
                role: "Open Source Contributor",
                company_label: "Open Source Global Connect",
                badge: "Phase 1",
                duration: "Feb 2026 - Mar 2026",
                location: "Remote",
                description: [
                    "Ranked among the top 20 contributors out of 4000+ participants in the Open Source Connect program.",
                    "Contributed to multiple repositories by submitting high-quality pull requests focused on UI improvements and code quality.",
                    "Collaborated with maintainers and developers using Git and GitHub while following open-source best practices.",
                ],
                skills: ["Open Source", "Git", "GitHub", "Collaboration"],
                isPromotion: false,
            },
        ],
    },
    {
        type: "single",
        role: "AI-ML Data Science Intern",
        company: "EiSystems Technologies",
        badge: "Internship",
        duration: "Aug 2025 - Sep 2025",
        location: "Remote",
        description: [
            "Collaborated with Technex'25, IIT BHU Varanasi for a 6-week intensive program.",
            "Built and deployed a Movie Recommendation System using Streamlit.",
            "Mastered data manipulation with NumPy, Pandas, and Matplotlib.",
        ],
        skills: ["Machine Learning", "Python", "Streamlit", "NumPy", "Pandas"],
        logo: "/images/Experience/EI-Systems.jpg",
    },
    {
        type: "single",
        role: "Technical Lead",
        company: "GDG on Campus HRIT",
        badge: "Leadership",
        duration: "Dec 2024 - Sep 2025",
        location: "Ghaziabad, India",
        description: [
            "Led technical initiatives and community building for 500+ students.",
            "Architected workshops focused on Google Cloud and Web technologies.",
            "Mentored junior devs to bridge the gap between theory and practice.",
        ],
        skills: ["Leadership", "Community Building", "Public Speaking", "Google Cloud"],
        logo: "/images/Experience/Gdg.webp",
    },
];

// import components
import Footer from "../Components/Footer/Footer";
import ProgressionCard from "../Components/Experience/ProgressionCard";
import SingleCard from "../Components/Experience/SingleCard";

// experience main page
export default function Experience() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-16 max-lg:pt-28"
            style={{
                backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
                imageRendering: 'pixelated',
            }}
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <p className="text-blue-400 font-mono tracking-[0.2em] uppercase text-[11px] mb-3">
                        History
                    </p>

                    <h1 className="text-[36px] md:text-[48px] font-bold tracking-tight leading-none">
                        Experience.
                    </h1>

                    <p className="text-[#444444] mt-3 text-[14px] italic">
                        A timeline of my work, contributions, and the experiences that shaped my journey.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-white/5 ml-2">
                    {EXPERIENCES.map((exp) =>
                        exp.type === "progression"
                            ?
                            <ProgressionCard
                                key={exp.company}
                                exp={exp}
                            />
                            :
                            <SingleCard
                                key={exp.company}
                                exp={exp}
                            />
                    )}
                </div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}