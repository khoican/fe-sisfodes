# Plan Orchestrator

## Project: SISFODES (Sistem Informasi Desa)

This orchestrator is the main entry point for managing and executing modular development plans. It tracks completed and pending plans and directs the AI agent on what task to execute next.

---

## 💡 AI Agent Execution Instructions

When a user requests to **"run plans"** or **"execute the orchestrator"**, follow these steps:

1. **Read this Orchestrator File**: Look at the **Plan Registry** section below.
2. **Find the Next Pending Plan**: Identify the first modular plan marked with `[ ]` (uncompleted).
3. **Scan the Directory**: Check if there are other `.md` plan files in `docs/plans/` that are not yet listed in the registry, and add them dynamically with a `[ ]` status.
4. **Load the Plan**: Open the plan file (e.g. `docs/plans/001_centralize_query_keys.md`), read its specifications, requirements, and step-by-step goals.
5. **Execute the Plan**:
    - Perform the code changes (creation, modification, deletion) as specified in the plan.
    - Run tests to verify the changes.
6. **Mark as Complete**:
    - Update the status of the plan inside the modular plan file itself to `Completed`.
    - Update the status in this orchestrator registry to `[x]` (completed).
    - Report the status of the execution to the user.

---

## 🗂️ Plan Registry

| Status | Plan ID & Filename                                                                                                          | Target Area                       | Description                                                                                    | Priority |
| :----: | :-------------------------------------------------------------------------------------------------------------------------- | :-------------------------------- | :--------------------------------------------------------------------------------------------- | :------: |
|  [ ]   | [001_standardization_type_or_interface.md](file:///E:/PROJECT/sisfodes/docs/plans/001_standardization_type_or_interface.md) | `src/types/`                      | Standardisasi nama interface dan type menjadi PascalCase dengan prefix `I`. (On Hold / Draft)  |   High   |
|  [x]   | [002_centralize_query_keys.md](file:///E:/PROJECT/sisfodes/docs/plans/002_centralize_query_keys.md)                         | `src/constant/` & `src/services/` | Centralize function-based query keys into `src/constant/queryKeys.ts` as required by GEMINI.md |   High   |
|  [ ]   | [003_enhance_test_coverage.md](file:///E:/PROJECT/sisfodes/docs/plans/003_enhance_test_coverage.md)                         | `src/test/`                       | Write comprehensive integration tests for public services (layanan) and complaints             |  Medium  |

---

## 📋 Creating a New Plan

To add a new task for the AI agent:

1. Create a new markdown file in `docs/plans/` using the naming format `[ID]_[snake_case_description].md` (e.g., `003_add_wisata_page.md`).
2. Use the structure provided in [template.md](file:///E:/PROJECT/sisfodes/docs/plans/template.md).
3. Add the plan entry to the **Plan Registry** table above with `[ ]` status.
