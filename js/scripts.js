// business logic
var Task = function(title, description, date, time, place) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.time = time;
  this.place = place;
};




// user interface logic
$(document).ready(function() {
  $("form#taskInput").submit(function(event) {
    event.preventDefault();

    var title = $("#taskTitle").val();
    var description = $("#description").val();
    var date = $("#date").val();
    var time = $("#time").val();
    var place = $("#place").val();

    var newTask = new Task(title, description, date, time, place);



    $("#taskList").append("<li><span class='task'>" + title + "</span></li>");

    $(".task").click(function(){
      $("#taskDisplay").show();
      $(".taskTitle").text(title);
      $(".description").text(description);
      $(".date").text(date);
      $(".time").text(time);
      $(".place").text(place);
    });
  });
});
