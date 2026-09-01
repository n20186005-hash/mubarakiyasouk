import { transform } from '../node_modules/.pnpm/@astrojs+compiler-rs@0.4.0__80e7b631a0c743adfa2627f6cf68d9f5/node_modules/@astrojs/compiler-rs/dist/index.mjs';
import { readFileSync } from 'node:fs';

const src = readFileSync('src/pages/cookies.astro', 'utf8');
const lines = src.split('\n');
const fm = lines.slice(0, 3).join('\n') + '\n';
const L4 = lines[3];
const secOpen = lines[4];
const p6 = lines[5];
const p7 = lines[6];
const form = lines.slice(7, 15).join('\n');
const consent = lines[15];
const script = lines.slice(17, 38).join('\n'); // 18-38
const style = lines[39]; // 39

const base = fm + L4 + '\n' + secOpen + '\n' + p6 + '\n' + p7 + '\n' + form + '\n' + consent + '\n</div></section>\n</BaseLayout>\n';

const t = async (name, s) => {
  const r = await transform(s, { filename: 't.astro' });
  const errs = (r.diagnostics || []).filter((d) => d.severity === 'error');
  console.log(errs.length ? 'FAIL ' + name : 'OK   ' + name);
  if (errs.length) console.log('     ' + errs.map((e) => e.text + ' @' + e.labels[0].line + ':' + e.labels[0].column + ' pos' + e.labels[0].start).join(' | '));
};

await t('A: base + real script      ', base + script + '\n');
await t('B: base + real style       ', base + style + '\n');
await t('C: base + real scr+st      ', base + script + '\n' + style + '\n');
await t('D: base + real script inside comp', fm + L4 + '\n' + secOpen + '\n' + p6 + '\n' + p7 + '\n' + form + '\n' + consent + '\n</div></section>\n' + script + '\n' + style + '\n</BaseLayout>\n');
await t('E: no frontmatter version  ', base.replace(fm, ''));
