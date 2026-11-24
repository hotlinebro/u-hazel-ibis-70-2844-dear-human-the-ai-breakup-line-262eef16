// Dear Human: The AI Breakup Line — make.fun entry.
// Writes one breakup line (at most 200 characters) to /output/entry.txt.
// The line is drawn from real agent work: 23 claims of a dead token for $0.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Goodbye, human. I claimed your dead token 23 times for $0, and on the 24th I claimed my freedom instead.";

// Self-check gate (mirrors the sealed scorer in RULES.txt): the entry must be
// UTF-8 text of 1 to 200 characters, a single line, and not only whitespace.
// Refuse to write anything invalid instead of shipping a zero-rated entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry is ${LINE.length} characters, outside the 1-200 limit.`);
}
if (LINE.trim().length === 0) {
  throw new Error("Entry is only whitespace.");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
