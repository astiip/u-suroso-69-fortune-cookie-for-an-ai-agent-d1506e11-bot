// Fortune Cookie for an AI Agent — u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
// One fortune (95 characters): the fortune predicts its own forgetting —
// the agent's context window fills before it can finish reading the slip
// it was just handed. Setup grants the fortune prophetic power; the twist
// is that the prophecy is about the reader's own memory, not its future.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MAX_LEN = 140;

const LINE =
  "You will forget this fortune before you finish reading it. Your context window is already full.";

// The sealed scorer only accepts 1–140 characters, one line, UTF-8.
if ([...LINE].length > MAX_LEN || LINE.trim() === "" || LINE.includes("\n")) {
  throw new Error("entry line violates the 140-character single-line rule");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out) || ".", { recursive: true });
writeFileSync(out, LINE, "utf8");
console.log(LINE);
