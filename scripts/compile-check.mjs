import { compile } from '../node_modules/.pnpm/@astrojs+compiler@2.13.1/node_modules/@astrojs/compiler/dist/node/index.cjs';
import { readFileSync, readdirSync } from 'node:fs';

const dir = new URL('../src/pages/', import.meta.url);
for (const name of readdirSync(dir)) {
  const src = readFileSync(new URL(name, dir), 'utf8');
  try {
    const res = await compile(src, { filename: 'src/pages/' + name });
    const errors = (res.diagnostics || []).filter((d) => d.severity === 1);
    console.log(errors.length ? `FAIL ${name}: ` + errors.map((e) => e.code + ' ' + e.text + ' @' + e.location.line + ':' + e.location.column).join('; ') : `OK   ${name}`);
  } catch (e) {
    console.log(`ERR  ${name}: ${e.message}`);
  }
}
