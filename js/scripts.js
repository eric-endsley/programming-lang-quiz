$(document).ready(function () {
  $("form#code").submit(function(event) {
    event.preventDefault();
    const cells = $("input:radio[name=cells]:checked").val();
    const fun = $("input:radio[name=fun]:checked").val();
    const fear = $("input:radio[name=fear]:checked").val();
    const visible = $("input:radio[name=visible]:checked").val();
    const aspire = $("input:radio[name=aspire]:checked").val();

    const answers = [cells, fun, fear, visible, aspire]

    console.log(answers)

  });
});