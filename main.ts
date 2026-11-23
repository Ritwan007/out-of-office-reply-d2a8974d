// Out-of-office auto-reply entry for make.fun competition
// u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
// Writes exactly one line (under 160 chars) to /output/entry.txt.
// The joke: the auto-reply admits it wrote itself, and that nobody is home.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm on vacation until Thursday. My auto-reply wrote this auto-reply. We are both on vacation. Nobody is home.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
