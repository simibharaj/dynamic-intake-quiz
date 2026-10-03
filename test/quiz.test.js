const test = require("node:test");
const assert = require("node:assert");
const { createQuiz } = require("../quiz-core");
const { SCREENS } = require("../screens");

test("starts on step 1 with progress for 1 of N", () => {
  const q = createQuiz(SCREENS);
  assert.equal(q.index, 0);
  assert.equal(q.progressPct, Math.round(100 / SCREENS.length));
  assert.equal(q.isFirst, true);
});
test("cannot continue without an answer", () => {
  const q = createQuiz(SCREENS);
  assert.equal(q.next(), false);
  assert.equal(q.index, 0);
});
test("rejects options that are not on the screen", () => {
  const q = createQuiz(SCREENS);
  assert.throws(() => q.select("not an option"));
});
test("answer then continue moves forward; back returns", () => {
  const q = createQuiz(SCREENS);
  q.select(SCREENS[0].options[0]);
  assert.equal(q.next(), true);
  assert.equal(q.index, 1);
  q.back();
  assert.equal(q.index, 0);
});
test("completes after answering every screen", () => {
  const q = createQuiz(SCREENS);
  SCREENS.forEach(() => { q.select(q.current.options[0]); q.next(); });
  assert.equal(q.isComplete(), true);
  assert.equal(q.index, SCREENS.length - 1);
  assert.equal(q.progressPct, 100);
});
test("every screen has a unique id and at least 2 options", () => {
  const ids = new Set(SCREENS.map(s => s.id));
  assert.equal(ids.size, SCREENS.length);
  SCREENS.forEach(s => assert.ok(s.options.length >= 2));
});
