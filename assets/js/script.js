
$(document).ready(function () {
    for (let i = 0; i < 20; i++) {
        console.log(`.Card${i}`)
        $(`.card${i}`).hover(() => {
            console.log("lhggchfdg")
            $(`.idcard${i}`).addClass("CardfadeIn")
        }, () => {
            $(`.idcard${i}`).removeClass("CardfadeIn")
        })
    }

    // if ($(window).width() < 768) {
    //     for (let i = 0; i < 20; i++) {
    //         $(`.card${i}`).click(() => {
    //             $(`.idcard${i}`).addClass("CardfadeIn")
    //             alert("Dddd")
    //         });
    //         $(`.card${i}`).click(() => {
    //             $(`.idcard${i}`).removeClass("CardfadeIn")
    //         });
    //     }
    // }
});


// $(`.card1`).hover(() => {
//     console.log("lhggchfdg")
//     $(`.idcard1`).addClass("animate__fadeIn")
// }, () => {
//     $(`.idcard1`).removeClass("animate__fadeIn")
// })