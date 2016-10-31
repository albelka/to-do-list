// business logic


// user interface logic
$(document).ready(function() {
  $("form#taskInput").submit(function(event) {
    event.preventDefault();

    var title = $("#taskTitle").val();
    var description = $("#description").val();
    var date = $("#date").val();
    var time = $("#time").val();
    var place = $("#place").val();
    // var newTask =

    $("#taskList").append("<li>" + title + "</li>");
  });
});
