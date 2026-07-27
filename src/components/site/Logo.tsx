export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className={dark ? "size-9 text-primary" : "size-9 text-teal-soft"}
      >
        <path
          d="M34 9c-5-3-14-3-18 2s-1 11 5 13 12 3 12 8-6 8-12 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M14 39c5 3 14 3 18-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="leading-none">
        <span
          className={`block text-xl font-extrabold tracking-[0.22em] ${
            dark ? "text-foreground" : "text-petrol-foreground"
          }`}
        >
          SIMPLES
        </span>
        <span
          className={`mt-1 block text-[9px] font-semibold tracking-[0.14em] ${
            dark ? "text-muted-foreground" : "text-petrol-foreground/60"
          }`}
        >
          CORRETORA DE SEGUROS E CONSÓRCIO
        </span>
      </span>
    </div>
  );
}