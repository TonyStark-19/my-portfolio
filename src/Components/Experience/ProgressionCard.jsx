// import components
import TimelineNode from "./TimelineNode";
import RoleEntry from "./RoleEntry";
import CompanyLogo from "./CompanyLogo";

// Card for a progression (multiple roles at same org)
export default function ProgressionCard({ exp }) {
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
                <div className="border border-white/5 rounded-2xl p-5 bg-white/1 group-hover:border-white/9 transition-all duration-500 flex flex-col gap-6">
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