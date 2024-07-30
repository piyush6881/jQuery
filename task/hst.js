$(document).ready(function () {
// first row starts here right
    $("#hide1").click(function () {
        $("h2").hide();
    });

    $("#show1").click(function () {
        $("h2").show();
    })

    $("#tog1").click(function () {
        $("h2").toggle();
    })


    $("#hide").click(function () {
        $("h1").hide();
    });

    $("#show").click(function () {
        $("h1").show();
    })

    $("#tog").click(function () {
        $("h1").toggle();
    })

    // row 2

    $(".hide2").click(function () {
        $("h4").hide();
    });

    $(".show2").click(function () {
        $("h4").show();
    })

    $(".tog2").click(function () {
        $("h4").toggle();
    })


    $(".hidea").click(function () {
        $("h3").hide();
    });

    $(".showb").click(function () {
        $("h3").show();
    })

    $(".togc").click(function () {
        $("h3").toggle();
    })

})