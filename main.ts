// Fridge Roast: One Line, Biggest Laugh
// Writes a single roast line (<= 200 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge updated its firmware at 3 a.m. and now it texts me that the milk is 'disappointed in me.' The milk. Not my life choices — the milk.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
