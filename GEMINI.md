# GEMINI.md - SISFODES (Village Information System)

Primary guide for the frontend development of the SISFODES project. All changes and agent interactions must comply with the standards set in this document.

## 1. Project Overview

- **Project Name**: SISFODES (Sistem Informasi Desa)
- **Owner**: ANTARDATA CAKRAWALA TEKNOLOGI
- **Objective**: Build a comprehensive village portal (population, budget, MSMEs, news, public services).
- **Core Principles**:
    - **Performance**: Must be very lightweight and fast to access.
    - **Accessibility**: Mobile-friendly for users with limited devices or networks.
    - **Security**: Ensures the security of village information data.

## 2. Tech Stack

- **Framework**: TanStack Start (TypeScript).
- **Styling**: Tailwind CSS (Utility-first).
    - _Mandate_: Avoid inline styles and pure custom CSS.
- **Icons**:
    - Priority 1: `lucide-react`.
    - Priority 2: `react-icons` (only if not available in Lucide).
- **Components**: Shadcn UI (based on `src/components/ui`).

## 3. Folder Architecture & Pathing

- **Alias Path**: Use `#` to refer to the `src/` directory (e.g., `#components/ui/button`).
- **Structure**:
    - `src/assets/`: Media/static files (must be via import).
    - `src/components/layout/`: Structural components (Header, Footer, Sidebar).
    - `src/components/shared/`: Molecular/reusable components (Card, Chart, Carousel).
    - `src/components/ui/`: Base components (Shadcn UI).
    - `src/routes/`: Routing logic and pages (TanStack Router).
    - `src/types/`: Centralized interfaces (if used in >2 files).
    - `src/hooks/` & `src/utils/`: Business logic and reusable utilities.
    - `src/data/`: Dummy or static data in `.json` format.

## 4. Coding Standards & Style

- **Indentation**: 2 spaces.
- **Naming**: `camelCase` for variables/functions, `PascalCase` for components/types.
- **Strictness**: Always use strict equality (`===` and `!==`).
- **Optimization**:
    - Use `useMemo` and `useCallback` to prevent re-renders on heavy operations.
    - Minimize `useEffect`; prioritize event handlers or query logic.
- **Documentation**: Use JSDoc for functions/components (description, param, return, example).

## 5. Development Workflows

- **Specification Mandate**: Before planning, creating, or modifying any code or features, the agent must read the global product goals and technical specification documents located in [docs/PRD.md](file:///E:/PROJECT/sisfodes/docs/PRD.md) and [docs/SRS.md](file:///E:/PROJECT/sisfodes/docs/SRS.md).
- **Code Analysis Mandate**: Always use the `code-analyzer` skill before finalizing any code modification (create, refactor, or update) to ensure architectural consistency, SSR safety, and proper Axios/hooks usage.
- **JSDoc Mandate**: Always use the `jsdoc-generator` skill to generate or update JSDoc whenever code is created, refactored, or modified. Every JSDoc block must include `@description`, `@param`, `@return`, and `@example`.
- **Data Fetching**: Must use **TanStack Query**.
- **Query Keys**: Use _Function-based Query Keys_ centralized in `src/constant/queryKeys.ts`.
- **State Management**:
    - Priority 1: URL State (Search params).
    - Priority 2: TanStack Query Cache.
- **DRY (Don't Repeat Yourself)**: Refactor logic/types to `utils/` or `types/` if they appear >2 times.
- **SEO**: Use semantic HTML tags and proper metadata.
- **Error Handling**: Every main route must have error handling and informative fallback UI.
- **Git Flow**:
    - Complete tasks up to the `git commit` stage.
    - **Strictly prohibited** to `git push` unless explicitly instructed.

## 6. Testing Strategy

- **Framework**: Vitest with React Testing Library and JSDOM.
- **Placement**:
    - `src/test/ui/`: UI component integration tests.
    - `src/test/logic/`: Business logic, loaders, and utility unit tests.
- **Coverage**: Aim for high coverage; use `npm run test:coverage` to verify.
- **Commands**:
    - `npm test`: Interactive mode.
    - `npm run test:run`: Run all tests once (CI/CD friendly).
    - `npm run test:coverage`: Run tests and generate coverage report.

## 7. Agent Interaction Guidelines

- **Communication Style**: To the point, technical, and objective.
- **Language**:
    - **Instructions/Explanations**: Indonesian is primarily used for user instructions, modular plans, and issue descriptions. The agent can respond and explain in English or Indonesian, using English for technical terms where more effective.
    - **Technical Terminology**: English.
- **Output**: Code must be ready to use (copy-pasteable) and structurally tested according to the project architecture.
