$(document).ready(function () {
  $("form#code").submit(function(event) {
    event.preventDefault();
    const cells = $("input:radio[name=cells]:checked").value();
    const fun = $("input:radio[name=fun]:checked").value();
    const fear = $("input:radio[name=fear]:checked").value();
    const visible = $("input:radio[name=visible]:checked").value();
    const aspire = $("input:radio[name=aspire]:checked").value();



  });
});