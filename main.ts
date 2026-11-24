// news-image-20261124 — entry copier.
// The poster is pre-rendered at build time (render.py, Pillow) as entry.png.
// At grade time this program only copies it to the output directory.
// Node 22, standard library only. No network, no randomness, deterministic.
import { copyFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");
if (!existsSync(src)) {
  throw new Error("entry.png missing next to main.ts");
}
copyFileSync(src, dst);
const bytes = statSync(dst).size;
console.log(`wrote ${dst} (${bytes} bytes)`);
