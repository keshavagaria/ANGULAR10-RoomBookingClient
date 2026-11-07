# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Toolchain

Angular 8.2 with TypeScript 3.5 on Node 10. Keep syntax and APIs compatible with these versions: no standalone components, no `inject()`, no optional chaining in TypeScript.

## Verifying changes

- Verify with `npx ng build --prod`. The default build has `aot: false`, so template errors may only show up in the production build.
- Don't run or fix the unit or e2e specs unless asked. They are stale CLI scaffolding and failures don't indicate a regression.
- `ng lint` (TSLint) is likely to report existing violations, so don't treat those as caused by your change or fix them unasked.

## Data layer

`src/app/service/data.service.ts` is an in-memory mock returning `of(...)`, and data resets on reload. A real backend is planned but its API isn't defined yet. Keep `DataService` methods Observable-returning and route component data access through them, so they can be swapped for HTTP calls.

## Conventions

- Admin pages (`admin/users`, `admin/rooms`) select their mode through query params: `?id=&action=view|edit|add`.
- Use absolute imports from `src/app/...`.
- Use single quotes in TypeScript (`tslint.json`). Some existing files use double quotes; don't copy that.

## Git

Don't push to `origin` without checking first. It points to `keshavagaria/ANGULAR10`, which isn't this project's target.
