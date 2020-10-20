$( document ).ready(function() {
    var current = moment().format('MMMM Do YYYY, h:mm:ss a');
   $('#currentDay').append(current);
   
   

   //OLD CODE - LEFT FOR REFERNCE
   
   /*
   //Creating array to display time blocks
   var timeBlock = [];

   //For loop to generate list of hours
                        //24 hours in a day
   for (let i = 0; i < 8; i++) {
                //Pulling from moment.js to add hour increments
    timeBlock.push(moment().add(i,'hour').calendar());     
   }
   console.log(timeBlock)
   */



   //using jQuery to select the button from id nine and creating an event handler that runs the function on "click"
    $("#nine button").on("click", function() {
        var nineText = $("#nine input").val();
        window.alert(nineText);               //need to create a way to write input within div
    });

    $("#ten button").on("click", function() {
        var tenText = $("#ten input").val();
        console.log(tenText);
    });

    $("#eleven button").on("click", function() {
        var elevenText = $("#eleven input").val();
        console.log(elevenText);
    });

    $("#twelve button").on("click", function() {
        var twelveText = $("#twelve input").val();
        console.log(twelveText);
    });

    $("#one button").on("click", function() {
        var oneText = $("#one input").val();
        console.log(oneText);
    });

    $("#two button").on("click", function() {
        var twoText = $("#two input").val();
        console.log(twoText);
    });

    $("#three button").on("click", function() {
        var threeText = $("#three input").val();
        console.log(threeText);
    });

    $("#four button").on("click", function() {
        var fourText = $("#four input").val();
        console.log(fourText);
    });

    $("#five button").on("click", function() {
        var fiveText = $("#five input").val();
        console.log(fiveText);
    });

    
});



/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```*/