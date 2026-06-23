//$(selector).action(); //basic syntax ,$ is jquery

$("h1").hide() //select h1
$("#heading").hide() //select id
$(".heading").hide() //select class

//run the code after the page is loaded
$(document).ready(function() {
    console.log("Page Loaded");
});

$(document).ready(function() {
    

    $("#btn").click(function() {
        alert("Welcome Jay!");
    });
    $("#seejs").hide() //select h1

    $("#btn").mouseenter(function() {
    console.log("Mouse Enter");
    });

    $("#hideBtn").click(function() {
    $("p").hide();
    });

    $("#showBtn").click(function() {
    $("p").show();
    });

    // $("#btn").click(function() {
    //     $("#heading").text("Welcome Jay!");
    // });

});