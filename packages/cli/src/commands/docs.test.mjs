// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file Docs command integration tests
 * @input Vitest, Commander, docs command/API, and reference-doc modules
 * @output Verifies topic discovery, rendered content, and locale fallbacks
 * @position CLI coverage for the reference documentation command
 */

import {describe, it, expect, beforeEach, afterEach, vi} from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as os from 'node:os';
import {Command} from 'commander';
import {registerDocs} from './docs.mjs';

let tmpDir;

beforeEach(() => {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'astryx-docs-test-'));
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  fs.rmSync(tmpDir, {recursive: true, force: true});
  vi.restoreAllMocks();
});

function createProgram() {
  const program = new Command();
  program.exitOverride(); // Throw instead of calling process.exit
  registerDocs(program);
  return program;
}

describe('registerDocs', () => {
  it('lists available topics when no topic given', async () => {
    const program = createProgram();
    await program.parseAsync(['node', 'astryx', 'docs']);

    const output = console.log.mock.calls.map(c => c[0]).join('\n');
    expect(output).toContain('principles');
    expect(output).toContain('tokens');
  });

  it('errors for unknown topic', async () => {
    const program = createProgram();
    vi.spyOn(process, 'exit').mockImplementation(code => {
      throw new Error(`exit ${code}`);
    });

    await expect(
      program.parseAsync(['node', 'astryx', 'docs', 'nonexistent']),
    ).rejects.toThrow('exit 1');

    const errorOutput = console.error.mock.calls.map(c => c[0]).join('\n');
    expect(errorOutput).toContain('Unknown topic');
  });
});

describe('hyphenated doc filenames', () => {
  it('lists hyphenated topics like getting-started', async () => {
    const program = createProgram();
    await program.parseAsync(['node', 'astryx', 'docs']);

    const output = console.log.mock.calls.map(c => c[0]).join('\n');
    expect(output).toContain('getting-started');
  });

  it('loads a hyphenated topic by name', async () => {
    const program = createProgram();
    await program.parseAsync(['node', 'astryx', 'docs', 'getting-started']);

    const output = console.log.mock.calls.map(c => c[0]).join('\n');
    expect(output).toContain('Foundation setup');
    expect(output).toContain(
      '@layer reset, theme, base, astryx-base, astryx-theme, components, utilities;',
    );
    expect(output).toContain('Without Tailwind');
    expect(output).toContain('With Tailwind v4');
    expect(output).toContain(
      "@import 'tailwindcss/preflight.css' layer(base);",
    );
    expect(output).toContain(
      "@import 'tailwindcss/utilities.css' layer(utilities);",
    );
    expect(output).toContain('Never load it unlayered');
    expect(output).toContain(
      'Utilities win because their layer is declared last',
    );
    expect(output).not.toContain('// globals.css');
    expect(console.error).not.toHaveBeenCalled();
  });

  it('returns docs.detail via API for hyphenated topic', async () => {
    const {docs: docsApi} = await import('../api/docs.mjs');
    const result = await docsApi('getting-started');
    expect(result.type).toBe('docs.detail');
    expect(result.data).toBeDefined();
    expect(result.data.description).toBeDefined();
  });
});

describe('migration docs', () => {
  it('lists the migration topic', async () => {
    const program = createProgram();
    await program.parseAsync(['node', 'astryx', 'docs']);

    const output = console.log.mock.calls.map(c => c[0]).join('\n');
    expect(output).toContain('migration');
    expect(output).toContain('Tailwind');
  });

  it('loads migration docs by topic name', async () => {
    const program = createProgram();
    await program.parseAsync(['node', 'astryx', 'docs', 'migration']);

    const output = console.log.mock.calls.map(c => c[0]).join('\n');
    expect(output).toContain('Migration Guide');
    expect(output).toContain('Recommended Order');
    expect(output).toContain('Migration audit checklist');
    expect(output).toContain('Verify your foundation');
    for (const primitive of ['button', 'input', 'card']) {
      expect(output).toContain(
        `${primitive}: getComputedStyle(primitives.${primitive}).paddingInline !== '0px'`,
      );
    }
    expect(output).not.toContain(
      "import '@astryxdesign/theme-neutral/theme.css';",
    );
    expect(output).toContain('Map shadcn and Radix Primitives');
  });

  it.each([
    ['dense', {dense: true}],
    ['zh', {zh: true}],
  ])(
    'falls back to English for new sections when %s translations are absent',
    async (_, options) => {
      const {docs: docsApi} = await import('../api/docs.mjs');
      const gettingStarted = await docsApi(
        'getting-started',
        undefined,
        options,
      );
      const migration = await docsApi('migration', undefined, options);

      expect(gettingStarted.data.sections).toEqual(
        expect.arrayContaining([
          expect.objectContaining({title: 'Foundation setup'}),
        ]),
      );
      expect(migration.data.sections).toEqual(
        expect.arrayContaining([
          expect.objectContaining({title: 'Migration audit checklist'}),
          expect.objectContaining({title: 'Verify your foundation'}),
        ]),
      );
    },
  );
});
