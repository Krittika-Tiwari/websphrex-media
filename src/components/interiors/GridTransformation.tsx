import { useEffect, useState } from "react";
import { img } from "./shared";

type Tile = { image?: string; filter?: string; text?: string; style?: string };

// "Before": the feed most Indian studios will recognise — festival greetings, hiring posts, mismatched filters.
const beforeTiles: Tile[] = [
  { image: "living-plants", filter: "saturate(1.9) contrast(1.25) hue-rotate(-12deg)" },
  { text: "Happy Diwali! 🪔✨", style: "bg-gradient-to-br from-fuchsia-500 via-orange-400 to-yellow-300 text-white font-bold" },
  { image: "bedroom", filter: "brightness(1.35) saturate(1.6)" },
  { text: "WE'RE HIRING!! 📢 Site supervisor", style: "bg-blue-600 text-yellow-300 font-black" },
  { image: "green-dining", filter: "hue-rotate(25deg) saturate(1.7)" },
  { text: "Modular kitchen @ ₹1,499/sq ft 🔥", style: "bg-red-600 text-white font-black" },
  { text: "“Home is where the heart is” ❤️", style: "bg-rose-100 text-rose-700 font-semibold italic" },
  { image: "sage-living", filter: "sepia(0.6) saturate(2)" },
  { text: "Site visit today 🚧 Gurgaon", style: "bg-lime-300 text-black font-bold" },
];

const afterTiles: Tile[] = [
  { image: "open-plan" },
  { image: "rattan-pendants" },
  { text: "Bandra 3 BHK — the living room at 5 pm", style: "bg-bone-deep text-charcoal font-display" },
  { image: "neutral-mirrors" },
  { image: "hallway" },
  { image: "living-gallery" },
  { image: "fireplace-dining" },
  { text: "Handover · Juhu villa · 7 months, start to finish", style: "bg-charcoal text-bone font-body" },
  { image: "living-sunlit" },
];

const TileView = ({ tile }: { tile: Tile }) =>
  tile.image ? (
    <img
      src={img(tile.image, true)}
      alt=""
      className="h-full w-full object-cover"
      style={{ filter: tile.filter ?? "saturate(0.85) sepia(0.08)" }}
    />
  ) : (
    <div className={`flex h-full w-full items-center justify-center p-2 text-center text-[10px] leading-tight ${tile.style}`}>
      {tile.text}
    </div>
  );

const GridTransformation = () => {
  const [after, setAfter] = useState(false);
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    if (interacted || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setAfter((a) => !a), 3800);
    return () => window.clearInterval(id);
  }, [interacted]);

  const choose = (value: boolean) => {
    setInteracted(true);
    setAfter(value);
  };

  return (
    <figure className="mx-auto w-full max-w-[340px]">
      <div className="rounded-[2.6rem] bg-charcoal p-2.5 shadow-[0_40px_80px_-30px_rgba(26,26,26,0.45)]">
        <div className="overflow-hidden rounded-[2.1rem] bg-white">
          <div className="flex justify-center pt-2.5">
            <span className="h-[18px] w-24 rounded-full bg-charcoal" />
          </div>
          <div className="flex items-center gap-4 px-4 pb-3 pt-4">
            <div className="h-14 w-14 shrink-0 rounded-full bg-gradient-to-tr from-brass to-sage p-[2px]">
              <img src={img("neutral-mirrors", true)} alt="" className="h-full w-full rounded-full border-2 border-white object-cover" />
            </div>
            <div className="grid flex-1 grid-cols-3 text-center font-body text-[11px] leading-tight text-charcoal">
              <span><b className="block text-sm">214</b>posts</span>
              <span><b className="block text-sm">{after ? "18.4K" : "1,203"}</b>followers</span>
              <span><b className="block text-sm">312</b>following</span>
            </div>
          </div>
          <div className="px-4 pb-3 font-body text-[11px] leading-snug text-charcoal">
            <p className="font-semibold">Studio Aranya</p>
            <p className="text-charcoal/70">
              {after
                ? "Luxury residential interiors · Mumbai & Alibaug · Turnkey projects from ₹40L. Enquiries ↓"
                : "Interior designer 🏠✨ | All types of work | Best rates 💯 | DM for price"}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[2px]">
            {beforeTiles.map((b, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 transition-opacity duration-700" style={{ opacity: after ? 0 : 1, transitionDelay: `${i * 60}ms` }}>
                  <TileView tile={b} />
                </div>
                <div className="absolute inset-0 transition-opacity duration-700" style={{ opacity: after ? 1 : 0, transitionDelay: `${i * 60}ms` }}>
                  <TileView tile={afterTiles[i]} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <figcaption className="font-body text-xs leading-relaxed text-charcoal/60">
          A designer's Instagram, before and after. Sample work.
        </figcaption>
        <div role="radiogroup" aria-label="Show feed" className="flex shrink-0 border border-charcoal/80 font-body text-xs">
          {[
            { label: "Before", value: false },
            { label: "After", value: true },
          ].map((o) => (
            <button
              key={o.label}
              type="button"
              role="radio"
              aria-checked={after === o.value}
              onClick={() => choose(o.value)}
              className={`px-3 py-1.5 transition-colors ${after === o.value ? "bg-charcoal text-bone" : "text-charcoal hover:bg-charcoal/5"}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>
    </figure>
  );
};

export default GridTransformation;
