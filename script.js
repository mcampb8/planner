var todayDate = dayjs().format("dddd, MMMM DD");
document.getElementById("currentDay").textContent = todayDate;
//function to save text input to local storage in corresponding time-block
$(function () {
  $(".saveBtn").on("click", function(){
    var thisHour = $(this).parent().attr("id");
     var hour = thisHour.split("-")[1];
     var textArea = $(this).siblings(".description");
     var userInput = textArea.val();
     localStorage.setItem(thisHour, userInput);
  });
// function to change the time-block class to past, present, or future, depending on current time
  $(".time-block").each(function(){
    var hourID = $(this).attr("id");
    var parsedHour = parseInt(hourID.split("-")[1]);
    var hourNow = parseInt(dayjs().format("H"));
    if(parsedHour > hourNow){
      $(this).addClass("future");
    } else if (parsedHour < hourNow){
      $(this).addClass("past");
    } else {
      $(this).addClass("present");
    }
  })
// getting the value of whatever data is in local storage for each hour
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
})