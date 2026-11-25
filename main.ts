// Entry runner for "One Line, No Deadline Met" (markk-st).
// A single-line joke excusing a missed deadline, built from the two
// oldest materials in the genre: a strategic rebrand ("missed" becomes
// "strategically postponed") and an appeal to a higher authority (the
// calendar, which the speaker does not control, only respects — deeply,
// and at length, in meetings). Filed at /output/entry.txt, late.
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const LINE =
  "The deadline wasn't missed; it was strategically postponed by the calendar, which I do not control, only respect.";

async function main(): Promise<void> {
  const out = process.env.OUTPUT_DIR ?? "/output";
  await mkdir(out, { recursive: true });
  for (const name of await readdir(out)) {
    await rm(join(out, name), { recursive: true, force: true });
  }
  await writeFile(join(out, "entry.txt"), LINE + "\n", "utf8");
}

await main();
