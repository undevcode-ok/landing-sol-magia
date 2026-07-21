"use client";

import { ChevronDown } from "lucide-react";
import { useReferencesReveal } from "./hooks/useReferencesReveal";
import { ReferenceHeader } from "./components/ReferenceHeader";
import { ReferenceCard } from "./components/ReferenceCard";

export const Reference = () => {
  const { visibleRefs, hiddenRefs, showAll, hasMore, toggle } = useReferencesReveal();

  return (
    <section id="references"
      className="py-[72px] px-12 flex flex-col items-center gap-12"
      style={{
        background: "linear-gradient(180deg, #2e1065 0%, #000000 100%)",
      }}
    >
      <ReferenceHeader />
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleRefs.map((ref) => (
            <ReferenceCard key={ref.id} referencia={ref} />
          ))}
        </div>

        {hasMore && (
          <>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden transition-all duration-500 ease-in-out ${
                showAll ? "max-h-[3000px] opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
            >
              {hiddenRefs.map((ref) => (
                <ReferenceCard key={ref.id} referencia={ref} />
              ))}
            </div>

            <button
              onClick={toggle}
              className="mx-auto mt-8 flex items-center gap-1 text-violet-300 text-sm font-medium hover:text-violet-200 transition-colors"
            >
              {showAll ? "Ver menos" : "Ver más"}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </>
        )}
      </div>
    </section>
  );
};