import logoAsset from "@/assets/simples-logo.png.asset.json";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Simples Corretora de Seguros e Consórcio"
      className={`w-auto ${className}`}
      width={1920}
      height={358}
      loading="eager"
      decoding="async"
    />
  );
}