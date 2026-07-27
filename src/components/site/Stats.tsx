import { useEffect, useRef, useState } from "react";

const stats = [
  { prefix: "+", value: 2000, decimals: 0, suffix: "", label: "Clientes realizados" },
  { prefix: "", value: 4.9, decimals: 1, suffix: "", label: "Nota no Google" },
  { prefix: "", value: 17, decimals: 0, suffix: " anos", label: "De experiência no mercado" },
  { prefix: "", value: 100, decimals: 0, suffix: "%", label: "Digital — atendemos todo o Brasil" },
  { prefix: "+", value: 20, decimals: 0, suffix: "", label: "Administradoras e seguradoras parceiras" },
];

function useCountUp(target: number, decimals: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1400;
    const startedAt = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - startedAt) / duration, 1);
      setValue(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start]);

  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function StatItem({ stat, start }: { stat: (typeof stats)[number]; start: boolean }) {
  const display = useCountUp(stat.value, stat.decimals, start);
  return (
    <div className="text-center">
      <p className="text-3xl font-extrabold text-primary sm:text-4xl">
        {stat.prefix}
        {display}
        {stat.suffix}
      </p>
      <p className="mx-auto mt-2 max-w-[16rem] text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background py-14">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 lg:grid-cols-5 lg:px-8"
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} start={visible} />
        ))}
      </div>
    </section>
  );
}