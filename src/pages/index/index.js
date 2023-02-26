import "../../blocks/button/button.js";

console.log("IT WORKS!!!");

$(function () {
    // Стоимость автомобиля

    $("#cost-of-car").slider({
        animate: "slow",
        range: "min",
        value: 3300000,
        min: 1500000,
        max: 10000000,
        step: 100000,
        slide: function (event, ui) {
            $("#cost-of-car__value").val(ui.value);
        },
        classes: {
            "ui-slider-handle": "custom-handle",
            "ui-slider-range": "custom-range",
            main__slider: "custom-slider",
        },
        change: function (event, ui) {
            $("#initial-payment").slider("option", "min", Number(ui.value * 0.1));
            $("#initial-payment").slider("option", "max", Number(ui.value * 0.6));
            $("#initial-payment").slider("option", "value", Number(ui.value * 0.13));
            $("#initial-payment__value").val(ui.value * 0.13);
        },
    });
    $("#cost-of-car__value").val($("#cost-of-car").slider("value"));
    $("#cost-of-car__description").val(`\u20bd`);

    // Первоначальный взнос

    $("#initial-payment").slider({
        animate: "slow",
        range: "min",
        value: function (event, ui) {
            $("#initial-payment").slider("option", "value", Number(ui.min * 0.13));
        },
        step: 1000,
        slide: function (event, ui) {
            $("#initial-payment__value").val(ui.value);
            $("#initial-payment__description").val(Math.floor((ui.value / $("#cost-of-car").slider("value")) * 100) + `%`);
        },
        classes: {
            "ui-slider-handle": "custom-handle",
            "ui-slider-range": "custom-range",
            main__slider: "custom-slider",
        },
    });
    $("#initial-payment__value").val($("#cost-of-car").slider("value") * 0.13);
    $("#initial-payment").slider("option", "min", Number($("#cost-of-car").slider("value") * 0.1));
    $("#initial-payment").slider("option", "value", Number($("#cost-of-car").slider("value") * 0.13));
    $("#initial-payment").slider("option", "max", Number($("#cost-of-car").slider("value") * 0.6));
    $("#initial-payment__description").val(Math.floor(($("#initial-payment").slider("value") / $("#cost-of-car").slider("value")) * 100) + `%`);

    // Срок лизинга

    $("#lease-term").slider({
        animate: "slow",
        range: "min",
        value: 60,
        min: 6,
        max: 120,
        step: 1,
        slide: function (event, ui) {
            $("#lease-term__value").val(ui.value);
        },
        classes: {
            "ui-slider-handle": "custom-handle",
            "ui-slider-range": "custom-range",
            main__slider: "custom-slider",
        },
    });
    $("#lease-term__value").val($("#lease-term").slider("value"));
    $("#lease-term__description").val("мес.");
});
