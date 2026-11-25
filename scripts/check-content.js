// =====================================================================
// Checks the world files before the site is built.
// Runs automatically before every build (see "prebuild" in package.json)
// and can be run by hand with: npm run check
//
// The messages are in Swedish because they are meant for the person
// editing the world files. The code comments are in English.
// =====================================================================

import { readdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const worldsDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'worlds');
const problems = [];

function isText(value) {
  return typeof value === 'string';
}

function check(file, world) {
  const where = `src/worlds/${file}`;
  const add = (message) => problems.push(`${where}: ${message}`);

  if (!world || typeof world !== 'object') {
    add('Filen måste börja med "export default {" och sluta med "};".');
    return;
  }
  for (const key of ['id', 'name', 'tagline']) {
    if (!isText(world[key]) || world[key].trim() === '') add(`"${key}" saknas eller är tom. Skriv en text mellan citattecknen.`);
  }
  if (!world.host || !isText(world.host.name) || !isText(world.host.role)) {
    add('"host" behöver både "name" och "role".');
  }
  if (world.specialOfTheDay !== undefined && !isText(world.specialOfTheDay)) {
    add('"specialOfTheDay" ska vara en text inom citattecken, till exempel \'Soppa\'.');
  }
  if (world.openingHours !== undefined) {
    if (!Array.isArray(world.openingHours)) {
      add('"openingHours" ska vara en lista inom hakparenteser [ ].');
    } else {
      world.openingHours.forEach((row, i) => {
        if (!row || !isText(row.days) || !isText(row.time)) add(`Öppettid nummer ${i + 1} behöver både "days" och "time".`);
      });
    }
  }
  if (!Array.isArray(world.menu) || world.menu.length === 0) {
    add('"menu" ska vara en lista med minst en rätt.');
  } else {
    const names = new Set();
    world.menu.forEach((item, i) => {
      if (!item || !isText(item.name) || !isText(item.description) || !isText(item.price)) {
        add(`Rätt nummer ${i + 1} i menyn behöver "name", "description" och "price".`);
        return;
      }
      if (names.has(item.name)) add(`Två rätter heter "${item.name}". Ge dem olika namn.`);
      names.add(item.name);
    });
  }
  if (!world.lines || !isText(world.lines.missingHours) || !isText(world.lines.missingSpecial) || !isText(world.lines.allGood)) {
    add('"lines" behöver "missingHours", "missingSpecial" och "allGood".');
  }
}

const files = (await readdir(worldsDir)).filter((f) => f.endsWith('.js') && f !== 'index.js');
const ids = new Map();

for (const file of files) {
  try {
    const module = await import(pathToFileURL(path.join(worldsDir, file)).href);
    check(file, module.default);
    const id = module.default?.id;
    if (id && ids.has(id)) problems.push(`src/worlds/${file}: id "${id}" används redan i ${ids.get(id)}. Välj ett nytt id.`);
    if (id) ids.set(id, file);
  } catch (error) {
    // Node does not include the line number when an import fails,
    // so ask "node --check" where the syntax error is.
    const result = spawnSync(process.execPath, ['--check', path.join(worldsDir, file)], { encoding: 'utf8' });
    const line = (result.stderr || '').match(/:(\d+)\s*\n/);
    const where = line ? ` rad ${line[1]} (eller raden ovanför)` : '';
    problems.push(
      `src/worlds/${file}${where}: filen går inte att läsa (${error.message}). ` +
        'Vanliga orsaker: ett kommatecken saknas i slutet av en rad, ett citattecken saknas, eller en } eller ] har försvunnit.',
    );
  }
}

if (problems.length > 0) {
  console.error('\nInnehållskontrollen hittade något att rätta:\n');
  for (const p of problems) console.error(`  - ${p}`);
  console.error('\nRätta raden, spara och försök igen. Inget är förstört.\n');
  process.exit(1);
}

console.log(`Innehållskontrollen: allt ser bra ut (${files.length} världar).`);
