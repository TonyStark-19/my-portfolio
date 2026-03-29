import { LuCalendar, LuMapPin, LuCircle } from "react-icons/lu";
import Footer from "../Components/Footer/Footer";

// ─── Constants ────────────────────────────────────────────────────────────────

// type: "single" | "progression"
// progression entries have a `roles` array instead of flat fields

const EXPERIENCES = [
    {
        type: "progression",
        company: "Krutrim Insights",
        logo: "/images/Experience/Krutrim.jpg",
        roles: [
            {
                role: "Software Developer Intern",
                company_label: "Krutrim Insights",
                badge: "New Role",
                duration: "Apr 2026 - Present",
                location: "Remote",
                description: [
                    "Selected for a project-based Software Developer Internship based on performance as Campus Ambassador.",
                    "Contributing to development initiatives and gaining hands-on engineering experience within the organization.",
                ],
                skills: ["Software Development", "Problem Solving", "Collaboration"],
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
        duration: "Mar 2026 - Present",
        location: "Remote",
        description: [
            "Selected through Phase 2 of the Open Source Connect program after an interview process among 4000+ participants.",
            "Working on real-world web development tasks while gaining practical industry exposure.",
            "Collaborating with mentors and developers to improve code quality, development workflows, and problem-solving skills.",
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
                duration: "Mar 2026 - Present",
                location: "Remote",
                description: [
                    "Selected for Phase 2 of Open Source Connect Global (OSCG 2026) based on consistent performance and contributions.",
                    "Working as a Web Development Intern with PHICSIT InfoTech Pvt. Ltd., gaining hands-on experience in MERN stack development under mentorship.",
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

// ─── Sub-components ───────────────────────────────────────────────────────────

function SkillTag({ label }) {
    return (
        <span className="text-[10px] font-mono tracking-wider text-[#444444] group-hover:text-[#666666] transition-colors duration-300">
            #{label}
        </span>
    );
}

function Badge({ label, isPromotion }) {
    if (!label) return null;
    if (isPromotion) {
        return (
            <span className="inline-flex items-center text-[10px] font-mono tracking-widest uppercase px-2.5 py-1
                rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400">
                {label}
            </span>
        );
    }
    return (
        <span className="inline-flex items-center text-[10px] font-mono tracking-widest uppercase px-2.5 py-1
            rounded-full bg-white/[0.04] border border-white/[0.07] text-[#555555]">
            {label}
        </span>
    );
}

function MetaInfo({ duration, location }) {
    return (
        <div className="flex flex-col md:items-end text-[11px] font-mono text-[#444444] tracking-wider uppercase gap-1 flex-shrink-0">
            <span className="flex items-center gap-1.5"><LuCalendar size={11} />{duration}</span>
            <span className="flex items-center gap-1.5"><LuMapPin size={11} />{location}</span>
        </div>
    );
}

function DescriptionCard({ description, skills }) {
    return (
        <div className="bg-white/[0.02] border border-white/[0.05] p-5 rounded-xl
            group-hover:border-white/[0.1] transition-all duration-500">
            <ul className="space-y-3">
                {description.map((item, i) => (
                    <li key={i} className="text-[#555555] group-hover:text-[#777777] leading-relaxed text-[13px] flex gap-3 transition-colors duration-300">
                        <span className="text-blue-500/40 mt-0.5 flex-shrink-0">▸</span>
                        {item}
                    </li>
                ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-white/[0.05]">
                {skills.map((skill) => (
                    <SkillTag key={skill} label={skill} />
                ))}
            </div>
        </div>
    );
}

// Single role entry (used inside both single and progression cards)
function RoleEntry({ role, company_label, badge, duration, location, description, skills, isPromotion, isLast }) {
    return (
        <div className={`relative ${!isLast ? "pb-0" : ""}`}>
            {/* Divider between roles */}
            {isPromotion && (
                <div className="w-full h-px bg-white/[0.05] mb-5" />
            )}

            <div className="flex flex-col gap-3">
                {/* Role header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2.5 flex-wrap">
                            <h3 className="text-[15px] font-semibold text-white/90 group-hover:text-white tracking-wide transition-colors">
                                {role}
                            </h3>
                            <Badge label={badge} isPromotion={isPromotion} />
                        </div>
                        <p className="text-[12px] text-[#444444] font-mono">{company_label}</p>
                    </div>
                    <MetaInfo duration={duration} location={location} />
                </div>

                <DescriptionCard description={description} skills={skills} />
            </div>
        </div>
    );
}

// Card for a single experience (no progression)
function SingleCard({ exp }) {
    return (
        <div className="mb-14 last:mb-0 relative pl-10 md:pl-14 group">
            {/* Timeline node */}
            <TimelineNode />

            <div className="flex flex-col gap-4">
                {/* Company header */}
                <div className="flex items-center gap-3">
                    <CompanyLogo src={exp.logo} alt={exp.company} />
                    <div>
                        <p className="text-[13px] text-[#666666] font-medium">{exp.company}</p>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#333333]">{exp.badge}</span>
                    </div>
                </div>

                <RoleEntry
                    role={exp.role}
                    company_label={exp.company}
                    badge={exp.badge}
                    duration={exp.duration}
                    location={exp.location}
                    description={exp.description}
                    skills={exp.skills}
                    isPromotion={false}
                    isLast={true}
                />
            </div>
        </div>
    );
}

// Card for a progression (multiple roles at same org)
function ProgressionCard({ exp }) {
    return (
        <div className="mb-14 last:mb-0 relative pl-10 md:pl-14 group">
            {/* Timeline node */}
            <TimelineNode />

            <div className="flex flex-col gap-5">
                {/* Company header — shared across all roles */}
                <div className="flex items-center gap-3">
                    <CompanyLogo src={exp.logo} alt={exp.company} />
                    <div>
                        <p className="text-[13px] text-[#666666] font-medium">{exp.company}</p>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400/60">
                            Career Progression
                        </span>
                    </div>
                </div>

                {/* Progression container */}
                <div className="border border-white/[0.05] rounded-2xl p-5 bg-white/[0.01]
                    group-hover:border-white/[0.09] transition-all duration-500 flex flex-col gap-6">
                    {exp.roles.map((role, i) => (
                        <RoleEntry
                            key={role.role}
                            {...role}
                            isLast={i === exp.roles.length - 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function TimelineNode() {
    return (
        <div className="absolute -left-[9px] top-1.5">
            <div className="relative flex items-center justify-center">
                <LuCircle className="text-[#222222] fill-[#0a0a0a] group-hover:text-blue-400 transition-colors duration-500" size={18} />
                <div className="absolute w-2 h-2 bg-blue-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500
                    shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
            </div>
        </div>
    );
}

function CompanyLogo({ src, alt }) {
    return (
        <img
            src={src}
            alt={alt}
            className="w-10 h-10 rounded-xl object-contain bg-white p-1 border border-white/[0.08]
                grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0"
        />
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Experience() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white p-6 lg:p-16 max-lg:pt-28">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="mb-16">
                    <p className="text-blue-400 font-mono tracking-[0.2em] uppercase text-[11px] mb-3">
                        History
                    </p>
                    <h1 className="text-[36px] md:text-[52px] font-bold tracking-tight leading-none">
                        Experience.
                    </h1>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-white/[0.05] ml-2">
                    {EXPERIENCES.map((exp) =>
                        exp.type === "progression"
                            ? <ProgressionCard key={exp.company} exp={exp} />
                            : <SingleCard key={exp.company} exp={exp} />
                    )}
                </div>

            </div>

            <Footer />
        </div>
    );
}