// Copyright (c) Meta Platforms, Inc. and affiliates.

'use client';

import type {ReactNode} from 'react';
import {usePathname} from 'next/navigation';
import {Banner} from '@astryxdesign/core/Banner';
import {Button} from '@astryxdesign/core/Button';
import {CURRENT_TARGET, DOCS_VERSIONS, urlForTarget} from '../lib/docsVersions';

/**
 * Full-width notice shown ONLY on canary (main) builds, warning readers that
 * they are viewing unreleased, work-in-progress documentation whose components
 * may not exist in the published package yet. Offers a jump to the same page on
 * the stable build when that deploy is configured.
 *
 * Renders nothing on the stable (latest) build — that's the canonical site and
 * needs no disclaimer.
 */
export function CanaryBanner() {
  const pathname = usePathname();

  if (CURRENT_TARGET !== 'canary') {
    return null;
  }

  const stableHref = urlForTarget('latest', pathname);
  const stableLabel = DOCS_VERSIONS.latest.label;

  return (
    <Banner
      container="section"
      status="warning"
      title="You're viewing unreleased docs (main)"
      description="This documents work in progress. Some components and props shown here may not exist in the latest published package yet."
      endContent={
        stableHref ? (
          <Button
            label={`View ${stableLabel}`}
            variant="secondary"
            href={stableHref}
          />
        ) : undefined
      }
    />
  );
}

/**
 * Slot value for AppShell's `banner` prop. Returns the banner element on canary
 * builds and `null` otherwise, so latest builds render no banner wrapper at all
 * (AppShell keys its banner region off `isRenderable`, and a bare `<CanaryBanner />`
 * element always counts as renderable even when it returns `null`).
 */
export function canaryBannerSlot(): ReactNode {
  return CURRENT_TARGET === 'canary' ? <CanaryBanner /> : null;
}
