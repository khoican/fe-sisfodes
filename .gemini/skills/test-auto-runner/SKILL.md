---
name: test-auto-runner
description: Automates testing for SISFODES using `vitest` whenever code is created, refactored, or modified.
---

# test-auto-runner Skill

This skill automates testing for SISFODES using `vitest` whenever code is created, refactored, or modified.

## Procedural Guidance
1. **Trigger**: Activate this skill when performing any code-related modification (create, refactor, delete).
2. **Execution**:
   - After any change, immediately identify the relevant `vitest` suite.
   - If no test file exists for the modified component/function, create one at the same level or in a `__tests__` directory.
   - Run the test suite: `npx vitest run <test-file>`.
3. **Correction**:
   - If tests fail, diagnose the failure against the changes made.
   - Iteratively fix the implementation until all tests pass.
   - Never consider a change "complete" unless the associated tests pass.
4. **Standards**:
   - All tests must use `vitest` syntax.
   - Maintain high coverage for new logic.
   - Keep tests clean and isolated.
