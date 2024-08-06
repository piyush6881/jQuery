$(document).ready(function () {

    $(".btn").click(function () {
        $(".gal1").animate({
            top: "0",
            left: "0",
        },
            2000
        );

        $(".gal2").animate({
            top: "160px",
            left: "160px",
        },
        2000
    );

        $(".gal3").animate({
            top: "0",
            left: "320px",
        }
        ,
        2000);

        $(".gal4").animate({
            top: "160px",
            left: "480px",
        },
        2000);

        $(".gal5").animate({
            top: "0",
            left: "640px",
        },
        2000);



    });

})