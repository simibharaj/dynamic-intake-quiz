// Sample questions only. This is a generic planning-readiness demo, not advice.
const SCREENS = [
  { id: 1, question: "What matters most to you right now?", options: ["Keeping what I have", "Steady income", "Passing something on", "Lowering taxes"] },
  { id: 2, question: "When do you expect to need this money?", options: ["Under 2 years", "2 to 5 years", "5 to 10 years", "More than 10 years"] },
  { id: 3, question: "How do you feel about ups and downs in value?", options: ["I want no surprises", "A little is fine", "Balanced", "I can ride it out"] },
  { id: 4, question: "Where is most of your savings held?", options: ["Workplace plan or IRA", "Roth account", "Regular brokerage", "Cash or property"] },
  { id: 5, question: "Have you planned for a bad market early on?", options: ["Yes, fully", "Partly", "Never looked at it", "Not sure"] },
  { id: 6, question: "How are you covering health costs later in life?", options: ["Dedicated coverage", "Saving for it", "Need to look into it"] },
  { id: 7, question: "How would you like to see results?", options: ["Interactive view", "Short summary", "Talk to a person"] },
];
if (typeof module !== "undefined") module.exports = { SCREENS };
