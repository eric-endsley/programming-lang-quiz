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

    if (countA + countB + countC + countD !== 5) {
      $(".error").show();
      $(".javascript, .cSharp, .ruby, .nope").hide();
    } else if (countA >= countB && countA >= countC && countA >= countD) {
      $(".javascript").show();
      $(".error, .cSharp, .ruby, .nope").hide();
    } else if (countB >= countA && countB >= countC && countB >= countD) {
      $(".cSharp").show();
      $(".error, .javascript, .ruby, .nope").hide();
    } else if (countC >= countA && countC >= countB && countC >= countD) {
      $(".ruby").show();
      $(".error, .javascript, .cSharp, .nope").hide();
    } else if (countD >= countA && countD >= countB && countD >= countC) {
      $(".nope").show();
      $(".error, .javascript, .cSharp, .ruby").hide();
    }

    $(".result").show();

    $("html, body").animate( {
      scrollTop: $(".result").offset().top
    }, 800);
  });
});

