# Project instructions

## Project overview
- This project is a small static website made of `index.html`, `calculadora.html`, `sobre.html`, and the shared `styles.css`.
- Keep changes minimal and focused. Prefer plain HTML, CSS, and vanilla JavaScript over frameworks, build tooling, or dependency installs.
- The interface is written in Brazilian Portuguese and should remain user-friendly for a non-technical audience.
- Keep shared navigation, colors, typography, and footer consistent across all three pages; put shared presentation rules in `styles.css`.

## Coding conventions
- Preserve the existing dark Bitcoin-inspired theme, centered card layout, simple form controls, compact result area, and readable spacing.
- Keep DOM operations simple and explicit. Use `document.getElementById(...)` and direct property updates when editing the page.
- Prefer native browser APIs and straightforward date math. Avoid external libraries unless the task explicitly requires them.
- Maintain accessible labels and clear text for the user. Inputs should be easy to understand and results should be easy to read.
- If a change affects the user-facing copy, keep it in Portuguese (`pt-BR`) unless the task explicitly asks for another language.

## Business logic
- The calculator is based on a halving date and computes date offsets relative to that date.
- Keep the `-500 dias` and `+500 dias` logic consistent with the existing formula and naming.
- When adjusting calculations, make sure the date arithmetic remains intuitive for users and the displayed output still matches the intended investment timeline.
- If the date input is empty or invalid, handle it gracefully without crashing or writing broken output.

## Validation
- This project does not currently have a test suite or package scripts. Validate changes by opening all three HTML pages in a browser, checking navigation and responsive layout, and checking the calculator's date calculations and empty/invalid input behavior.
- Do not add build tooling or new dependencies for minor UI or logic tweaks unless the task specifically requires it.
- Prefer surgical edits over refactors. Avoid unrelated cleanup or broad rewrites.
