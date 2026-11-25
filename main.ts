// Describe Your Ex in One Word — make.fun entry
// Writes exactly one word to /output/entry.txt: a one-word verdict on my ex.
// The judge compares words head to head and picks the funniest.
//
// The word: "audition"
// Why it wins: it reframes the whole relationship as a casting call —
// my ex was never the lead, just someone trying out for the part who
// did not get it. It is a real word, instantly readable as a verdict on
// a former partner, and it lands without any explanation. The twist is
// the demotion: not a villain, not a tragedy, just an unsuccessful
// tryout. It is surprising (nobody's first insult for an ex) yet
// painfully relatable — everyone has been the audition, or has sat
// through one. No insult, no punctuation tricks, just the quiet comedy
// of being recast.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "audition";

// Gate: the entry must be UTF-8 text of 1 to 111 characters, not only
// whitespace, and exactly one word. No trailing newline: the scorer
// counts every character in the file, so the file holds the word alone.
function validateWord(word: string): void {
  // Letters only: spaces, digits, or punctuation would make it more
  // than one word (or not a word at all) under the 1–111 char rule.
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error(`entry must be exactly one word (letters only, no spaces or punctuation): ${JSON.stringify(word)}`);
  }
  if (word.length < 1 || word.length > 111) {
    throw new Error(`entry must be 1-111 characters, got ${word.length}`);
  }
}

validateWord(WORD);

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
console.log(`wrote ${JSON.stringify(WORD)} to ${outPath}`);
