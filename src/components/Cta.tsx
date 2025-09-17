import React from "react";

const Cta = () => {
  return (
    <div className="flex gap-4 mt-3">
      <a
        href="/my-portfolio/src/assets/CVJose_Martinez.pdf"
        download
        className="
          relative
          inline-block
          px-6 py-3
          text-[var(--color-text)]
          font-semibold
          rounded-2xl
          overflow-hidden
          shadow-md
          transition-all duration-300 ease-out
          bg-[linear-gradient(135deg,var(--color-primary)_0%,var(--theme-links-hover)_100%)]
          bg-[length:200%_200%]
          hover:bg-[position:100%_0]
          hover:shadow-xl
          hover:-translate-y-1
          active:scale-95
        "
      >
        <span className="relative z-10">Descargar CV</span>

        <span
          className="
            absolute inset-0 
            bg-white/20 
            opacity-0
            transition-opacity duration-300
            hover:opacity-100
            rounded-2xl
          "
        />
      </a>
    </div>
  );
};

export default Cta;
