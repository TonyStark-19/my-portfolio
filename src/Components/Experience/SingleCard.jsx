//import components
import TimelineNode from "./TimelineNode";
import RoleEntry from "./RoleEntry";
import CompanyLogo from "./CompanyLogo";

// Card for a single experience (no progression)
export default function SingleCard({ exp }) {
    return (
        <div className="mb-14 last:mb-0 relative pl-10 md:pl-14 group">
            {/* Timeline node */}
            <TimelineNode />

            <div className="flex flex-col gap-4">
                {/* Company header */}
                <div className="flex items-center gap-3">
                    <CompanyLogo
                        src={exp.logo}
                        alt={exp.company}
                    />

                    <div>
                        <p className="text-[13px] text-[#666666] font-medium">{exp.company}</p>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#333333]">{exp.badge}</span>
                    </div>
                </div>

                {/* Role Entry */}
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