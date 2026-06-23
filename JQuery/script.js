//$(selector).action(); //basic syntax ,$ is jquery

$("h1").hide() //select h1
$("#heading").hide() //select id
$(".heading").hide() //select class

//run the code after the page is loaded
$(document).ready(function() {
    console.log("Page Loaded");
});

$("#btn").click(function() {
    alert("Button Clicked");
});
// $(document).ready(function() {

//     $("#btn").click(function() {
//         $("#heading").text("Welcome Jay!");
//     });

// });