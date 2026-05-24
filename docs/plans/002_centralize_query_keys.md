# Modular Plan: Centralizing Query Keys

## Plan ID: PLAN_002 - Centralize Query Keys

---

## 1. Metadata

- **Author**: Antigravity (AI Coding Assistant)
- **Created Date**: 2026-05-25
- **Target Area**: Constants, Services, Query Keys
- **Status**: `[ ] Ready / [ ] In Progress / [x] Completed`
- **Dependencies**: None

---

## 2. Objective & Goal

Currently, Query Keys used in TanStack Query are declared locally within each service file inside `src/services/` (e.g. `export const newsQueryKey = 'news' as const` in `news.service.tsx`).
According to the rules defined in [GEMINI.md](file:///E:/PROJECT/sisfodes/GEMINI.md):

> _Query Keys: Use Function-based Query Keys centralized in `src/constant/queryKeys.ts`._

The goal of this plan is to:

1. Create a centralized query key catalog in `src/constant/queryKeys.ts` using function-based query keys.
2. Refactor all service files in `src/services/` to use this centralized catalog.
3. Ensure no compile-time or testing regressions.

---

## 3. Specifications & Requirements

- **Centralized File**: Query keys must be centralized in `src/constant/queryKeys.ts`.
- **Function-based Keys**: Keys must be defined using functions (or key factory functions) rather than static strings, to allow query-key parameterization (e.g. `queryKeys.news.detail(slug)` instead of `['news', slug]`).
- **Type Safety**: Maintain absolute type safety for query keys throughout the application.

---

## 4. Proposed File Changes

- `[NEW]` [queryKeys.ts](file:///E:/PROJECT/sisfodes/src/constant/queryKeys.ts) (Centralized query key factories)
- `[MODIFY]` [agenda.service.tsx](file:///E:/PROJECT/sisfodes/src/services/agenda.service.tsx)
- `[MODIFY]` [artikel.service.tsx](file:///E:/PROJECT/sisfodes/src/services/artikel.service.tsx)
- `[MODIFY]` [budget.service.tsx](file:///E:/PROJECT/sisfodes/src/services/budget.service.tsx)
- `[MODIFY]` [facility.service.tsx](file:///E:/PROJECT/sisfodes/src/services/facility.service.tsx)
- `[MODIFY]` [gallery.service.tsx](file:///E:/PROJECT/sisfodes/src/services/gallery.service.tsx)
- `[MODIFY]` [geography.service.tsx](file:///E:/PROJECT/sisfodes/src/services/geography.service.tsx)
- `[MODIFY]` [hero.service.tsx](file:///E:/PROJECT/sisfodes/src/services/hero.service.tsx)
- `[MODIFY]` [idm.service.tsx](file:///E:/PROJECT/sisfodes/src/services/idm.service.tsx)
- `[MODIFY]` [institution.service.tsx](file:///E:/PROJECT/sisfodes/src/services/institution.service.tsx)
- `[MODIFY]` [news.service.tsx](file:///E:/PROJECT/sisfodes/src/services/news.service.tsx)
- `[MODIFY]` [official.service.tsx](file:///E:/PROJECT/sisfodes/src/services/official.service.tsx)
- `[MODIFY]` [penghargaan.service.tsx](file:///E:/PROJECT/sisfodes/src/services/penghargaan.service.tsx)
- `[MODIFY]` [population.service.tsx](file:///E:/PROJECT/sisfodes/src/services/population.service.tsx)
- `[MODIFY]` [product.service.tsx](file:///E:/PROJECT/sisfodes/src/services/product.service.tsx)
- `[MODIFY]` [profile.service.tsx](file:///E:/PROJECT/sisfodes/src/services/profile.service.tsx)
- `[MODIFY]` [publication.service.tsx](file:///E:/PROJECT/sisfodes/src/services/publication.service.tsx)
- `[MODIFY]` [sdgs.service.tsx](file:///E:/PROJECT/sisfodes/src/services/sdgs.service.tsx)

---

## 5. Step-by-Step Checklist

- `[ ]` **Step 1: Create Centralized Key File**
    - Create the file `src/constant/queryKeys.ts`.
    - Define query factories for all models:
        ```typescript
        export const queryKeys = {
            profile: () => ['profile'] as const,
            hero: () => ['hero'] as const,
            official: () => ['official'] as const,
            population: () => ['population'] as const,
            budget: () => ['budget'] as const,
            agenda: () => ['agenda'] as const,
            news: {
                all: () => ['news'] as const,
                detail: (slug: string) => ['news', slug] as const,
            },
            product: {
                all: () => ['product'] as const,
                detail: (slug: string) => ['product', slug] as const,
            },
            // Other keys...
        }
        ```
- `[ ]` **Step 2: Refactor Services**
    - Replace local key declarations in `src/services/*.service.tsx` with imports from `#constant/queryKeys`.
    - Update query function configurations to use the new function-based key invocations (e.g. `queryKey: queryKeys.news.all()`).
- `[ ]` **Step 3: Verification & Test Execution**
    - Run `code-analyzer` on the modified files to ensure architectural compliance.
    - Run the test suite using `npm.cmd run test:run`.
    - Verify that everything compiles and builds successfully using `npm.cmd run build`.

---

## 6. Verification & Testing Plan

- **Automated Tests**: Run `npm.cmd run test:run` to ensure existing loaders are unaffected.
- **Compilation Check**: Run `npm.cmd run build` to verify there are no TypeScript or compilation errors.
