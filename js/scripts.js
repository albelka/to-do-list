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



    $("#taskList").append("<li><span class='task'>" + title + "</span><span class='btn btn-xs done'>Done</span></li>");

    $(".task").last().click(function(){
      $(".taskTitle").text(title);
      $(".description").text(description);
      $(".date").text(date);
      $(".time").text(time);
      $(".place").text(place);
      $("#taskDisplay").show();
    });

    $(".done").click(function(){
      $(this).parent().remove();
      $("#taskDisplay").hide();
    });

  });
  function goLeft() {
    $('#bat').animate({'left': '65%'}, 5000, goRight);
  }
  function goRight(){
    $('#bat').animate({'left': '0%'}, 5000, goLeft);
  }
  goLeft();
  // $("#fly").click(function(){
  //   $("#bat").animate({left: "+=100px"});
  // });
});
