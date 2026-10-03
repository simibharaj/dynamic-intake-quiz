const quiz = createQuiz(SCREENS);
const stage = document.getElementById("quizStage");
const progress = document.getElementById("quizProgress");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const msg = document.getElementById("quizMessage");

function el(tag, props = {}, text) {
  const e = document.createElement(tag);
  Object.assign(e, props);
  if (text !== undefined) e.textContent = text;   // textContent, never innerHTML
  return e;
}

function render() {
  msg.textContent = "";
  const s = quiz.current;
  progress.style.width = quiz.progressPct + "%";
  progress.parentElement.setAttribute("aria-valuenow", String(quiz.progressPct));
  prevBtn.disabled = quiz.isFirst;
  nextBtn.textContent = quiz.isLast ? "Finish" : "Continue";

  const wrap = el("div", { className: "screen-fade" });
  wrap.append(el("span", { className: "step" }, `STEP ${s.id} OF ${quiz.total}`));
  wrap.append(el("h2", {}, s.question));
  const group = el("div", { role: "group" });
  group.setAttribute("aria-label", s.question);
  s.options.forEach(opt => {
    const selected = quiz.answers[s.id] === opt;
    const b = el("button", { className: "option-pill" + (selected ? " active" : ""), type: "button" }, opt);
    b.setAttribute("aria-pressed", String(selected));
    b.addEventListener("click", () => { quiz.select(opt); render(); });
    group.append(b);
  });
  wrap.append(group);
  stage.replaceChildren(wrap);
}

nextBtn.addEventListener("click", () => {
  if (!quiz.canContinue()) { msg.textContent = "Please choose an option to continue."; return; }
  if (!quiz.isLast) { quiz.next(); render(); return; }
  const wrap = el("div", { className: "screen-fade" });
  wrap.append(el("h2", {}, "All done"));
  wrap.append(el("p", { className: "muted" }, "Your answers stayed in this page. Nothing was sent anywhere:"));
  wrap.append(el("pre", {}, JSON.stringify(quiz.answers, null, 2)));
  stage.replaceChildren(wrap);
  nextBtn.hidden = true; prevBtn.hidden = true;
});
prevBtn.addEventListener("click", () => { quiz.back(); render(); });
render();
