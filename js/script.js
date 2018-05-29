// $('#myTabs a').click(function (e) {
//     e.preventDefault()
//     $(this).tab('show')
// })



$(function() {

    var GammaSettings = {
        // order is important!
        viewport : [ {
            width : 1200,
            columns : 4
        }, {
            width : 900,
            columns : 4
        }, {
            width : 500,
            columns : 3
        }, {
            width : 320,
            columns : 2
        }, {
            width : 0,
            columns : 2
        } ]
    };

    Gamma.init(GammaSettings);

});

// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     navText: ['sadgfsdhgkusdhgk', 'next'],
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 1
//         },
//         1000: {
//             items: 1
//         }
//     }
// });