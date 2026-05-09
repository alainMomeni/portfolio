import Tag from "./atoms/Tag";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#07101f] border border-[#1a2540] rounded-xl p-5 sm:p-6
                    hover:border-blue-800/60 transition-all duration-300
                    flex flex-col gap-4 cursor-pointer h-full">
      {/* Icon */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-900/30 border border-blue-800/40
                      rounded-xl flex items-center justify-center shrink-0">
        {project.icon}
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-white font-bold text-base sm:text-lg mb-2">{project.name}</h3>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{project.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag.label} label={tag.label} color={tag.color} />
        ))}
      </div>

      {/* Link */}
      <div className="pt-1">
        <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300
                           text-sm font-semibold transition-colors duration-200 group cursor-pointer">
          View Project
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}