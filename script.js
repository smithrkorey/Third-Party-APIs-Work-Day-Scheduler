$( document ).ready(function() {
    var current = moment().format('MMMM Do YYYY');
   $('#currentDay').append(current);


  var currentHour = moment().hour(); //gets current hour
  console.log(currentHour);

  /*var day = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  
  for (let index = 0; index < day.length; index++) {
      if (currentHour == day[index]) {
        $(‘#${index} input’).addClass( 'present' );
      };
  } else {
    (currentHour < day[index]) {
        $(‘#${index} input’).addClass( 'past' );
  } else {
    (currentHour > day[index]) {
        $(‘#${index} input’).addClass( 'future' );
    };*/

   //saving the input from each block into local storage and saving even after refresh
   $("#9 input").val(localStorage.getItem("nineInput"))
   $("#10 input").val(localStorage.getItem("tenInput"))
   $("#11 input").val(localStorage.getItem("elevenInput"))
   $("#12 input").val(localStorage.getItem("twelveInput"))
   $("#13 input").val(localStorage.getItem("thirteenInput"))
   $("#14 input").val(localStorage.getItem("fourteenInput"))
   $("#15 input").val(localStorage.getItem("fifteenInput"))
   $("#16 input").val(localStorage.getItem("sixteenInput"))
   $("#17 input").val(localStorage.getItem("seventeenInput"))
   

   //using jQuery to select the button from id nine and creating an event handler that runs the function on "click"
    $("#9 button").on("click", function() {
        var nineText = $("#9 input").val();
        console.log(nineText); 
        localStorage.setItem("nineInput", nineText);
    });

    $("#10 button").on("click", function() {
        var tenText = $("#10 input").val();
        console.log(tenText);
        localStorage.setItem("tenInput", tenText);
    });

    $("#11 button").on("click", function() {
        var elevenText = $("#11 input").val();
        console.log(elevenText);
        localStorage.setItem("elevenInput", elevenText);
    });

    $("#12 button").on("click", function() {
        var twelveText = $("#12 input").val();
        console.log(twelveText);
        localStorage.setItem("twelveInput", twelveText);
    });

    $("#13 button").on("click", function() {
        var thirteenText = $("#13 input").val();
        console.log(thirteenText);
        localStorage.setItem("thirteenInput", thirteenText);
    });

    $("#14 button").on("click", function() {
        var fourteenText = $("#14 input").val();
        console.log(fourteenText);
        localStorage.setItem("fourteenInput", fourteenText);
    });

    $("#15 button").on("click", function() {
        var fifteenText = $("#15 input").val();
        console.log(fifteenText);
        localStorage.setItem("fifteenInput", fifteenText);
    });

    $("#16 button").on("click", function() {
        var sixteenText = $("#16 input").val();
        console.log(sixteenText);
        localStorage.setItem("sixteenInput", sixteenText);
    });

    $("#17 button").on("click", function() {
        var seventeenText = $("#17 input").val();
        console.log(seventtenText);
        localStorage.setItem("seventeenInput", seventeenText);
    });

    
});