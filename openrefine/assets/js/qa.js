// Make all tables striped by default.
$("table").addClass("table table-striped");


// Handle foldable challenges and solutions (on click and at start).
$(".challenge,.discussion,.solution").click(function(event) {
    var trigger = $(event.target).has(".fold-unfold").size() > 0
               || $(event.target).filter(".fold-unfold").size() > 0;
    if (trigger) {
        $(">*:not(li)", this).toggle(400);
        $(">li>span.fold-unfold", this).toggleClass("glyphicon-collapse-down glyphicon-collapse-up");
        event.stopPropagation();
    }
});
$(".challenge,.discussion,.solution").each(function() {
    $(">*:not(li)", this).toggle();
    var li = $("li:first", this);
    li.append("<span class='fold-unfold glyphicon glyphicon-collapse-down'></span>");
});


// Handle searches.
/** / Relies on document having 'meta' element with name 'search-domain'.
function google_search() {
  var query = document.getElementById("google-search").value;
  var domain = $("meta[name=search-domain]").attr("value");
  window.open("https://www.google.com/search?q=" + query + "+site:" + domain);
}

**/
