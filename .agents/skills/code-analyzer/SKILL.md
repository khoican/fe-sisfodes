---
name: code-analyzer
description: Analyzes code for potential errors, architectural deviations, and best-practice violations within the SISFODES project (TanStack Start, Axios, hooks/utils).
---

# code-analyzer Skill

This skill provides static and architectural analysis of code changes to ensure adherence to SISFODES standards and to detect potential runtime or integration issues.

## Procedural Guidance

1. **Trigger**: Activate this skill before finalizing any code modification (especially in `routes/`, `services/`, `hooks/`, or `utils/`).
2. **Analysis Scope**:
    - **TanStack Start (SSR)**: Check for client-only code leakage into server-side routes (e.g., direct `window`/`document` access).
    - **Axios Integration**: Ensure API calls utilize the configured Axios instance and handle errors via standardized response utils.
    - **Hooks/Utils Usage**: Verify that logic is appropriately extracted; flag repeated patterns that should be moved to `#hooks/` or `#utils/`.
    - **Strictness**: Verify use of strict equality (`===`, `!==`) and proper TypeScript typing.
3. **Execution**:
    - Parse the code for common "gotchas" in the project stack.
    - Check against `GEMINI.md` architectural rules.
    - If an error is detected, propose the specific correction.
4. **Validation**:
    - Never consider a change "complete" unless it satisfies the architectural consistency check of this skill.
