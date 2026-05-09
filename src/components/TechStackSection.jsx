import SectionTitle from "./atoms/SectionTitle";
import { TECH_STACK } from "../data/Tech_stack";

export default function TechStackSection() {
  const items   = [...TECH_STACK, ...TECH_STACK];
  const count   = items.length;
  const visible = 3;

  return (
    <section id="skills" className="bg-[#07101f] py-16 sm:py-20 border-[#0f1e3a]">

      {/* Titre */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle>Tech Stack</SectionTitle>
      </div>

      {/* Bandeau */}
      <div className="overflow-hidden border-[#1a2540] mx-4 sm:mx-6 md:mx-10">
        <div
          className="flex animate-marquee"
          style={{ width: `${(count / visible) * 100}%` }}
        >
          {items.map((tech, i) => (
            <div
              key={`${tech.id}-${i}`}
              className="flex-none bg-[#07101f] border-r border-[#1a2540] transition-colors duration-200
                         flex flex-col items-center justify-center sm:items-start
                         py-6 px-3 sm:p-8"
              style={{ width: `${100 / count}%` }}
            >
              {/* Icône — plus grande et centrée sur mobile */}
              <div className="mb-0 sm:mb-5 [&>img]:w-14 [&>img]:h-14 [&>svg]:w-14 [&>svg]:h-14
                              sm:[&>img]:w-12 sm:[&>img]:h-12 sm:[&>svg]:w-12 sm:[&>svg]:h-12">
                {tech.icon}
              </div>

              {/* Nom — masqué sur mobile */}
              <h3 className="hidden sm:block text-white font-bold text-sm sm:text-base mb-1 sm:mb-2">
                {tech.name}
              </h3>

              {/* Description — masquée sur mobile */}
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed hidden sm:block">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}