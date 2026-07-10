// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file Getting-started reference documentation
 * @input ReferenceDoc schema and Astryx CSS foundation contracts
 * @output Exports the getting-started guide for CLI and docsite rendering
 * @position Canonical onboarding topic for package, CSS, and component setup
 */

/** @type {import('../../core/src/docs-types').ReferenceDoc} */

export const docs = {
  name: 'getting-started',
  title: 'Getting Started',
  category: 'guide',
  description:
    'Add the design system to your project and start building.',

  sections: [
    {
      title: 'Quick Start with AI',
      content: [
        {
          type: 'prose',
          text: 'Paste this into your AI coding tool and let it handle the setup:',
        },
        {
          type: 'code',
          lang: 'text',
          label: 'Paste this into your AI',
          code: 'Install @astryxdesign/core, @astryxdesign/theme-neutral, and @astryxdesign/cli in this project. Run `npx astryx init` to set up agent docs. Read the generated files to learn the conventions.',
        },
      ],
    },
    {
      title: 'Install',
      content: [
        {
          type: 'prose',
          text: 'Add the core package, a theme, and the CLI to your existing project.',
        },
        {
          type: 'code',
          lang: 'bash',
          label: 'Terminal',
          code: `npm install @astryxdesign/core @astryxdesign/theme-neutral @astryxdesign/cli`,
        },
        {
          type: 'prose',
          text: 'Then run the init wizard to set up AI agent docs, pick a starter template, and learn about theming.',
        },
        {
          type: 'code',
          lang: 'bash',
          label: 'Terminal',
          code: `npx astryx init`,
        },
      ],
    },
    {
      title: 'Foundation setup',
      content: [
        {
          type: 'prose',
          text: 'Declare the cascade order once, before every stylesheet import in your global CSS entrypoint. Choose the block that matches your stack. The optional app-reset import is commented out so the snippets work as-is; uncomment it and update the path when adopting an app that already has a reset or normalize stylesheet.',
        },
        {
          type: 'prose',
          text: 'Without Tailwind, load the Astryx reset, component styles, and selected theme:',
        },
        {
          type: 'code',
          lang: 'css',
          code: `@layer reset, theme, base, astryx-base, astryx-theme, components, utilities;

/* @import './app-reset.css' layer(reset); */
@import '@astryxdesign/core/reset.css';
@import '@astryxdesign/core/astryx.css';
@import '@astryxdesign/theme-neutral/theme.css';`,
        },
        {
          type: 'prose',
          text: 'With Tailwind v4, keep its theme, Preflight, and utilities in their declared layers and load the Astryx token bridge before utilities:',
        },
        {
          type: 'code',
          lang: 'css',
          code: `@layer reset, theme, base, astryx-base, astryx-theme, components, utilities;

/* @import './app-reset.css' layer(reset); */
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);
@import '@astryxdesign/core/reset.css';
@import '@astryxdesign/core/astryx.css';
@import '@astryxdesign/theme-neutral/theme.css';
@import '@astryxdesign/core/tailwind-theme.css';
@import 'tailwindcss/utilities.css' layer(utilities);`,
        },
        {
          type: 'list',
          style: 'unordered',
          items: [
            'Put every app reset or normalize stylesheet in `layer(reset)`, the lowest-priority layer. An unlayered reset overrides all named layers, while a reset in a later consumer layer can erase Astryx component padding.',
            'With Tailwind, keep Preflight in `base` as required by [#3374](https://github.com/facebook/astryx/issues/3374): use `layer(base)` on the v4 import, or wrap `@tailwind base` in `@layer base { ... }` with v3. Never load it unlayered.',
            'Keep consumer component styles and utilities in the `components` and `utilities` layers. Utilities win because their layer is declared last, not because their stylesheet is imported last.',
          ],
        },
        {
          type: 'prose',
          text: 'Themes provide all design tokens (colors, spacing, radius, typography) as CSS custom properties. Replace `@astryxdesign/theme-neutral` with another Astryx theme package if needed; see `npx astryx docs theme` for the full theming guide.',
        },
      ],
    },
    {
      title: 'Add your first component',
      content: [
        {
          type: 'prose',
          text: 'Components are imported from per-category subpath entrypoints. This keeps bundles small and makes intent clear.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'app/page.tsx',
          code: `import {Button} from '@astryxdesign/core/Button';
import {VStack} from '@astryxdesign/core/Layout';

export default function Page() {
  return (
    <VStack gap={2}>
      <Button label="Hello Astryx" onClick={() => alert('Hi!')} />
    </VStack>
  );
}`,
        },
      ],
    },
    {
      title: 'Customize with StyleX',
      content: [
        {
          type: 'prose',
          text: 'Astryx components support various styling solutions, from plain CSS and `className` to Tailwind and CSS-in-JS. See the [styling docs](/docs/styling) for the full guide. Astryx also has a deep integration with [StyleX](https://stylexjs.com/), an atomic CSS-in-JS library: create styles with `stylex.create()` and pass them to components with the `xstyle` prop.',
        },
        {
          type: 'code',
          lang: 'tsx',
          label: 'Style overrides',
          code: `import * as stylex from '@stylexjs/stylex';

const overrides = stylex.create({
  save: { alignSelf: 'flex-end', marginTop: 16 },
});

<Button label="Save" xstyle={overrides.save} />`,
        },
      ],
    },
    {
      title: 'Example Apps',
      content: [
        {
          type: 'prose',
          text: 'For a full working project, clone one of the example apps from the repo. These are complete setups with routing, theming, and components wired together.',
        },
        {
          type: 'table',
          headers: ['Example', 'Stack', 'Path'],
          rows: [
            ['Next.js', 'Next.js + theme CSS', '[apps/example-nextjs](https://github.com/facebook/astryx/tree/main/apps/example-nextjs)'],
            ['Next.js + StyleX', 'Next.js + StyleX for custom styles', '[apps/example-nextjs-stylex](https://github.com/facebook/astryx/tree/main/apps/example-nextjs-stylex)'],
            ['Next.js + Tailwind', 'Next.js + Tailwind bridge', '[apps/example-nextjs-tailwind](https://github.com/facebook/astryx/tree/main/apps/example-nextjs-tailwind)'],
            ['Next.js Source', 'Next.js importing from source', '[apps/example-nextjs-source](https://github.com/facebook/astryx/tree/main/apps/example-nextjs-source)'],
            ['Vite', 'Vite', '[apps/example-vite](https://github.com/facebook/astryx/tree/main/apps/example-vite)'],
          ],
        },
        {
          type: 'code',
          lang: 'bash',
          label: 'Clone and run an example',
          code: `git clone https://github.com/facebook/astryx.git
cd astryx/apps/example-nextjs
pnpm install
pnpm dev`,
        },
      ],
    },
    {
      title: 'Explore the CLI',
      content: [
        {
          type: 'prose',
          text: 'The CLI is your reference for components, tokens, templates, and docs. For reliable invocation (especially with AI assistants), add this script to your package.json:',
        },
        {
          type: 'code',
          lang: 'json',
          label: 'package.json',
          code: `"scripts": {
  "astryx": "node node_modules/@astryxdesign/cli/bin/astryx.mjs"
}`,
        },
        {
          type: 'prose',
          text: 'Then discover what\'s available:',
        },
        {
          type: 'code',
          lang: 'bash',
          label: 'Terminal',
          code: `npx astryx component          # list all components
npx astryx component Button   # props, usage, theming for Button
npx astryx docs               # list all doc topics
npx astryx template --list    # available page templates
npx astryx docs tokens        # spacing, color, radius reference`,
        },
      ],
    },
  ],
};
