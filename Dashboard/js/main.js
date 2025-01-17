(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JUL","AUG","SEP","NOV","DEC"],
            datasets: [{
                    label: "Level2",
                    data: [15, 30, 55, 65, 60, 80, 95, 56, 67, 91, 88, 76],
                    backgroundColor: "rgba(0, 156, 255, .7)"
                },
                {
                    label: "Level3",
                    data: [8, 35, 40, 60, 70, 55, 75, 45, 74, 82, 90, 62],
                    backgroundColor: "rgba(153, 52, 52, 0.8)"
                },
                {
                    label: "Level4",
                    data: [12, 25, 45, 55, 65, 70, 60, 57 , 90, 56, 78, 88],
                    backgroundColor: "rgba(52, 153, 52, 0.8)"
                },{
                    label: "Level5",
                    data: [10, 35, 95, 55, 85, 80, 70, 45, 89, 56, 72, 67],
                    backgroundColor: "rgba(153, 153, 52, 0.8)"
                }
            ]
            },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JUL","AUG","SEP","NOV","DEC"],
            datasets: [{
                    label: "Total Refferals",
                    data: [15, 30, 55, 45, 70, 65, 85, 72, 78, 65, 87, 54,],
                    borderColor: "rgba(52,152,219,1)",
                    backgroundColor: "rgba(0, 156, 255, .5)",
                    fill: true
                },
                {
                    label: "Completed Refferals",
                    data: [99, 135, 170, 130, 190, 180, 270, 250, 170 , 220, 135, 187],
                    borderColor: 'rgba(46, 204, 113, 1)',
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    fill: true
                }
            ]
            },
        options: {
            responsive: true
        }
    });
    


    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            datasets: [{
                label: "Salse",
                fill: false,
                backgroundColor: "rgba(0, 156, 255, .3)",
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(0, 156, 255, .5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(0, 156, 255, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Level2", "Level3A", "Level3B", "Level4", "Level5"],
            datasets: [{
                backgroundColor: [
                    "rgba(0, 156, 255, .7)",
                    "rgba(69, 235, 13, 0.6)",
                    "rgba(130, 16, 106, 0.5)",
                    "rgba(0, 156, 255, .4)",
                    "rgba(210, 227, 15, 0.3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Level2", "Level3", "Level4", "Level5", "Level6"],
            datasets: [{
                backgroundColor: [
                    "rgba(80, 180, 110, 0.7)",
                    "rgba(0, 156, 255, .6)",
                    "rgba(193, 193, 36, 0.5)",
                    "rgba(232, 107, 49, 0.4)",
                    "rgba(226, 28, 164, 0.3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });

    
})(jQuery);


