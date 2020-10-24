$( document ).ready(function() {
    var current = moment().format('MMMM Do YYYY');
   $('#currentDay').append(current);

   //saving the input from each block into local storage and saving even after refresh
   $("#9 input").val(localStorage.getItem("nineInput"))
   $("#10 input").val(localStorage.getItem("tenInput"))
   $("#11 input").val(localStorage.getItem("elevenInput"))
   $("#12 input").val(localStorage.getItem("twelveInput"))
   $("#1 input").val(localStorage.getItem("oneInput"))
   $("#2 input").val(localStorage.getItem("twoInput"))
   $("#3 input").val(localStorage.getItem("threeInput"))
   $("#4 input").val(localStorage.getItem("fourInput"))
   $("#5 input").val(localStorage.getItem("fiveInput"))
   

   //using jQuery to select the button from id nine and creating an event handler that runs the function on "click"
    $("#9 saveBtn").on("click", function() {
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

    $("#1 button").on("click", function() {
        var oneText = $("#1 input").val();
        console.log(oneText);
        localStorage.setItem("oneInput", oneText);
    });

    $("#2 button").on("click", function() {
        var twoText = $("#2 input").val();
        console.log(twoText);
        localStorage.setItem("twoInput", twoText);
    });

    $("#3 button").on("click", function() {
        var threeText = $("#3 input").val();
        console.log(threeText);
        localStorage.setItem("threeInput", threeText);
    });

    $("#4 button").on("click", function() {
        var fourText = $("#4 input").val();
        console.log(fourText);
        localStorage.setItem("fourInput", fourText);
    });

    $("#5 button").on("click", function() {
        var fiveText = $("#5 input").val();
        console.log(fiveText);
        localStorage.setItem("fiveInput", fiveText);
    });

    
});



//THEN each time block is color-coded to indicate whether it is in the past, present, or future
