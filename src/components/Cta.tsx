import React from "react";

const Cta = () => {
  return (
    <div className="flex gap-4">
      <a 
        href="/my-portfolio/src/assets/CVJosé_Martinez .pdf" 
        download
        className="bg-[var(--color-primary)] text-[var(--color-bg)] px-4 py-2 rounded hover:bg-[var(--theme-links-hover)] transition-colors duration-300"
      >
        Descargar CV
      </a>
    </div>
  );
};

export default Cta;