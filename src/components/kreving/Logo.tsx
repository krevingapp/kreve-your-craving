import logoAsset from "@/assets/kreving-logo.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * Brand mark. Swap `src/assets/kreving-logo.png.asset.json` to replace the logo.
 */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <img
        src={logoAsset.url}
        alt="Kreving logo"
        width={40}
        height={40}
        className="h-9 w-9 shrink-0 object-contain"
      />
      {!compact && (
        <span className="font-display text-xl font-extrabold tracking-tight text-ink">
          <span className="text-brand">K</span>reving
        </span>
      )}
    </span>
  );
}