// Pure quiz state logic (no DOM) so it can be tested.
function createQuiz(screens) {
  let index = 0;
  const answers = {};
  return {
    get index() { return index; },
    get total() { return screens.length; },
    get current() { return screens[index]; },
    get progressPct() { return Math.round(((index + 1) / screens.length) * 100); },
    get isFirst() { return index === 0; },
    get isLast() { return index === screens.length - 1; },
    answers,
    select(option) {
      if (!screens[index].options.includes(option)) throw new Error("invalid option");
      answers[screens[index].id] = option;
    },
    canContinue() { return answers[screens[index].id] !== undefined; },
    next() {
      if (!this.canContinue()) return false;
      if (index < screens.length - 1) index++;
      return true;
    },
    back() { if (index > 0) index--; },
    isComplete() { return screens.every(s => answers[s.id] !== undefined); },
  };
}
if (typeof module !== "undefined") module.exports = { createQuiz };
