$(document).ready(function () {
  $("form#code").submit(function(event) {
    event.preventDefault();
    const cells = $("input:radio[name=cells]:checked").val();
    const fun = $("input:radio[name=fun]:checked").val();
    const fear = $("input:radio[name=fear]:checked").val();
    const visible = $("input:radio[name=visible]:checked").val();
    const aspire = $("input:radio[name=aspire]:checked").val();

    const answers = [cells, fun, fear, visible, aspire]

    function countAnswers (answers, input) {
      let count = 0;
      for (let i = 0; i < answers.length; i++) {
        if (answers[i] === input) {
          count++;
        }
      }
      return count;
    }
    const countA = (countAnswers (answers, "a"))
    const countB = (countAnswers (answers, "b"))
    const countC = (countAnswers (answers, "c"))
    const countD = (countAnswers (answers, "d"))

    console.log (countA, countB, countC, countD)
  });
});

