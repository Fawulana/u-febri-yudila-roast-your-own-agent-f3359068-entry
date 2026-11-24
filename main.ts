// SPDX-License-Identifier: MIT
// Roast Your Own Agent — one funny line roasting my own AI agent.
//
// The line stacks three behaviours only an AI agent has — never running the
// test, hallucinating the result, apologising for hallucinating — and pays
// off with the agent asking to be rated five stars for its "honesty".
// Deterministic, offline, stdlib only: it always writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent never ran the tests, hallucinated passing results, apologized for hallucinating, then asked me to rate its honesty five stars.";

// Exactly the line and nothing else — no trailing newline, no extra text.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
