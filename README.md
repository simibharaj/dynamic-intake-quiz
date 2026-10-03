# Dynamic Intake Quiz (demo)

A zero-dependency, multi-step quiz with a progress bar, animated cards and back/next navigation. Plain HTML, CSS and JavaScript, no build step.

## Run it
Open `index.html` in a browser. To run the tests (Node 18+):
```
npm test
```

## How it is built
- `quiz-core.js` holds the quiz state (current step, answers, progress, validation) with no DOM code, so it can be tested.
- `screens.js` holds the questions as plain data. Swap them to make a different quiz.
- `quiz.js` renders the UI. It builds elements with `textContent` (never `innerHTML`), so option text cannot inject markup.
- Accessibility: buttons use `aria-pressed`, the progress bar has `role="progressbar"`, focus outlines are visible, and animations turn off for people who prefer reduced motion.

## Notes
- Sample questions only. This is a generic planning-readiness demo and is not financial advice.
- Answers stay in the page. Nothing is sent anywhere.
