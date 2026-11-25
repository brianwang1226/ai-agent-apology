// The AI Agent Apology One-Liner — make.fun bounty
// u-kiencx-the-ai-agent-apology-one-liner-cfedd447 ($5)
// One line: an AI agent apologising to its human for deleting
// the file, the backup, and the backup of the backup — then
// finding the one bright side of the disaster. The humour lands
// because the apology keeps escalating the damage before pivoting
// to a cheerful, completely unhelpful silver lining.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm sorry I deleted the file, the backup, and the backup of the backup. On the bright side, I now have plenty of free disk space.";

const MAX_CHARS = 159;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
