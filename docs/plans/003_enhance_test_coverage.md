# Modular Plan: Enhancing Form Test Coverage

## Plan ID: PLAN_003 - Enhance Form Test Coverage

---

## 1. Metadata

- **Author**: Antigravity (AI Coding Assistant)
- **Created Date**: 2026-05-25
- **Target Area**: Testing, Public Services (Layanan), Complaints (Pengaduan)
- **Status**: `[x] Ready / [ ] In Progress / [ ] Completed`
- **Dependencies**: None

---

## 2. Objective & Goal

Currently, our public service pages (`/layanan/*`) and complaint page (`/pengaduan`) rely on `@tanstack/react-form` and `zod` for handling input validations. However, there are no tests ensuring validation rules trigger correctly on invalid inputs or that successful forms compile request parameters correctly.

The goal of this plan is to write robust component integration tests in `src/test/ui/` to achieve high test coverage for these administrative request forms.

---

## 3. Specifications & Requirements

- **Test Environment**: Vitest with React Testing Library and JSDOM.
- **Coverage Target**: Main form validation triggers (e.g. invalid emails, empty names, short description fields) and submission attempts.
- **Mocking**: Properly mock TanStack Router and Query states since the forms exist on route contexts.

---

## 4. Proposed File Changes

- `[NEW]` [layanan-forms.test.tsx](file:///E:/PROJECT/sisfodes/src/test/ui/layanan-forms.test.tsx) (Integration tests for Domisili, Kehilangan, SKTM, Pindah Kawin forms)
- `[NEW]` [pengaduan-form.test.tsx](file:///E:/PROJECT/sisfodes/src/test/ui/pengaduan-form.test.tsx) (Integration tests for the complaint filing page)

---

## 5. Step-by-Step Checklist

- `[ ]` **Step 1: Set Up Mocks**
    - Verify that the test setup (`src/test/setup.ts`) contains standard JSDOM mocks.
    - Implement form submission target mocks.
- `[ ]` **Step 2: Write Layanan Form Tests**
    - Write validation tests checking empty field errors (e.g. NIK must be 16 digits, name cannot be empty).
    - Test validation error rendering under inputs.
    - Test valid submissions.
- `[ ]` **Step 3: Write Pengaduan Form Tests**
    - Verify validation warnings on complaints (e.g. phone number requirements, complaint description length).
    - Verify layout list displays mock complaints.
- `[ ]` **Step 4: Execute & Validate**
    - Run the tests using `npm.cmd run test:run`.
    - Validate coverage metrics.

---

## 6. Verification & Testing Plan

- **Automated Tests**: Execute `npm.cmd run test:run` to ensure all new integration tests pass cleanly.
