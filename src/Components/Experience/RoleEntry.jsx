// import components
import MetaInfo from "./MetaInfo";
import Badge from "./Badge";
import DescriptionCard from "./DescriptionCard";

// Single role entry (used inside both single and progression cards)
export default function RoleEntry({ role, company_label, badge, duration, location, description, skills, isPromotion, isLast }) {
    return (
        <div className={`relative ${!isLast ? "pb-0" : ""}`}>
            {/* Divider between roles */}
            {isPromotion && (
                <div className="w-full h-px bg-white/5 mb-5" />
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

                    {/* Meta Info */}
                    <MetaInfo duration={duration} location={location} />
                </div>

                {/* Description Card */}
                <DescriptionCard description={description} skills={skills} />
            </div>
        </div>
    );
}