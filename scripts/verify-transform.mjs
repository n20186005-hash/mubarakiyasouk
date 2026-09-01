import { transform } from '../node_modules/.pnpm/@astrojs+compiler-rs@0.4.0__80e7b631a0c743adfa2627f6cf68d9f5/node_modules/@astrojs/compiler-rs/dist/index.mjs';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const walk = (dir) => readdirSync(dir).flatMap((n) => {
  const p = join(dir, n);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

let fail = 0;
for (const file of walk('src/pages')) {
  if (!file.endsWith('.astro')) continue;
  const src = readFileSync(file, 'utf8');
  const r = await transform(src, { filename: file });
  const errs = (r.diagnostics || []).filter((d) => d.severity === 'error');
  if (errs.length) { fail++; console.log(`FAIL ${file}: ` + errs.map((e) => e.text + ' @' + e.labels[0].line + ':' + e.labels[0].column).join(' | ')); }
  else console.log(`OK   ${file}`);
}
console.log(fail ? `\n${fail} file(s) FAILED` : '\nAll pages compile OK');
process.exit(fail ? 1 : 0);
