import "../../blocks/button/button.js";

console.log("IT WORKS!!!");

$(function () {
    function spacesNumbers(str) {
        var m = str.match(/^(.*?)((?:[,.]\d+)?|)$/);
        return m[1].replace(/\B(?=(?:\d{3})*$)/g, " ") + m[2];
    }

    // Стоимость автомобиля

    // $("#cost-of-car").slider({
    //     animate: "slow",
    //     range: "min",
    //     value: 3300000,
    //     min: 1500000,
    //     max: 10000000,
    //     step: 100000,
    //     slide: function (event, ui) {
    //         $("#cost-of-car__value").val(spacesNumbers(ui.value.toString()));
    //         $("#initial-payment").slider("option", "min", Number(ui.value * 0.1));
    //         $("#initial-payment").slider("option", "max", Number(ui.value * 0.6));
    //         $("#initial-payment").slider("option", "value", Number(ui.value * 0.13));
    //         $("#initial-payment__value").val(spacesNumbers((ui.value * 0.13).toString()) + " \u20bd");
    //         $("#initial-payment__description").val(Math.floor(($("#initial-payment").slider("value") / $("#cost-of-car").slider("value")) * 100) + `%`);
    //         $("#lease-amount").val(
    //             spacesNumbers(
    //                 (
    //                     Number($("#lease-term").slider("value")) *
    //                         Number(
    //                             Math.floor(
    //                                 (Number($("#cost-of-car").slider("value")) - Number($("#initial-payment").slider("value"))) *
    //                                     ((0.05 * Math.pow(1 + 0.05, Number(LEASE_TERM))) / (Math.pow(1 + 0.05, Number($("#lease-term").slider("value"))) - 1))
    //                             )
    //                         ) +
    //                     Number($("#initial-payment").slider("value"))
    //                 ).toString()
    //             ) + " \u20bd"
    //         );
    //         $("#monthly-payment").val(
    //             spacesNumbers(
    //                 Math.floor(
    //                     (Number($("#cost-of-car").slider("value")) - Number($("#initial-payment").slider("value"))) *
    //                         ((0.05 * Math.pow(1 + 0.05, Number(LEASE_TERM))) / (Math.pow(1 + 0.05, Number($("#lease-term").slider("value"))) - 1))
    //                 ).toString()
    //             ) + " \u20bd"
    //         );
    //     },
    //     classes: {
    //         "ui-slider-handle": "custom-handle",
    //         "ui-slider-range": "custom-range",
    //         main__slider: "custom-slider",
    //     },
    // });

    // Первоначальный взнос

    // $("#initial-payment").slider({
    //     animate: "slow",
    //     range: "min",
    //     value: function (event, ui) {
    //         $("#initial-payment").slider("option", "value", Number(ui.min * 0.13));
    //     },
    //     step: 1000,
    //     slide: function (event, ui) {
    //         $("#initial-payment__value").val(spacesNumbers(ui.value.toString()) + " \u20bd");
    //         $("#initial-payment__description").val(Math.floor((ui.value / $("#cost-of-car").slider("value")) * 100) + `%`);
    //         $("#initial-payment__description").val(Math.floor(($("#initial-payment").slider("value") / $("#cost-of-car").slider("value")) * 100) + `%`);
    //         $("#lease-amount").val(
    //             spacesNumbers(
    //                 (
    //                     Number($("#lease-term").slider("value")) *
    //                         Number(
    //                             Math.floor(
    //                                 (Number($("#cost-of-car").slider("value")) - Number($("#initial-payment").slider("value"))) *
    //                                     ((0.05 * Math.pow(1 + 0.05, Number(LEASE_TERM))) / (Math.pow(1 + 0.05, Number($("#lease-term").slider("value"))) - 1))
    //                             )
    //                         ) +
    //                     Number($("#initial-payment").slider("value"))
    //                 ).toString()
    //             ) + " \u20bd"
    //         );
    //         $("#monthly-payment").val(
    //             spacesNumbers(
    //                 Math.floor(
    //                     (Number($("#cost-of-car").slider("value")) - Number($("#initial-payment").slider("value"))) *
    //                         ((0.05 * Math.pow(1 + 0.05, Number(LEASE_TERM))) / (Math.pow(1 + 0.05, Number($("#lease-term").slider("value"))) - 1))
    //                 ).toString()
    //             ) + " \u20bd"
    //         );
    //     },
    //     classes: {
    //         "ui-slider-handle": "custom-handle",
    //         "ui-slider-range": "custom-range",
    //         main__slider: "custom-slider",
    //     },
    // });

    // Срок лизинга

    // $("#lease-term").slider({
    //     animate: "slow",
    //     range: "min",
    //     value: 60,
    //     min: 6,
    //     max: 120,
    //     step: 1,
    //     slide: function (event, ui) {
    //         $("#lease-term__value").val(ui.value);
    //         $("#lease-amount").val(
    //             spacesNumbers(
    //                 (
    //                     Number($("#lease-term").slider("value")) *
    //                         Number(
    //                             Math.floor(
    //                                 (Number($("#cost-of-car").slider("value")) - Number($("#initial-payment").slider("value"))) *
    //                                     ((0.05 * Math.pow(1 + 0.05, Number(LEASE_TERM))) / (Math.pow(1 + 0.05, Number($("#lease-term").slider("value"))) - 1))
    //                             )
    //                         ) +
    //                     Number($("#initial-payment").slider("value"))
    //                 ).toString()
    //             ) + " \u20bd"
    //         );
    //         $("#monthly-payment").val(
    //             spacesNumbers(
    //                 Math.floor(
    //                     (Number($("#cost-of-car").slider("value")) - Number($("#initial-payment").slider("value"))) *
    //                         ((0.05 * Math.pow(1 + 0.05, Number(LEASE_TERM))) / (Math.pow(1 + 0.05, Number($("#lease-term").slider("value"))) - 1))
    //                 ).toString()
    //             ) + " \u20bd"
    //         );
    //     },
    //     classes: {
    //         "ui-slider-handle": "custom-handle",
    //         "ui-slider-range": "custom-range",
    //         main__slider: "custom-slider",
    //     },
    // });

    $("#cost-of-car__value").val($("#cost-of-car").slider("value"));
    $("#cost-of-car__description").val(`\u20bd`);
    $("#initial-payment__value").val(spacesNumbers(($("#cost-of-car").slider("value") * 0.13).toString()) + " \u20bd");
    $("#initial-payment").slider("option", "min", Number($("#cost-of-car").slider("value") * 0.1));
    $("#initial-payment").slider("option", "value", Number($("#cost-of-car").slider("value") * 0.13));
    $("#initial-payment").slider("option", "max", Number($("#cost-of-car").slider("value") * 0.6));
    $("#initial-payment__description").val(Math.floor(($("#initial-payment").slider("value") / $("#cost-of-car").slider("value")) * 100) + `%`);
    $("#lease-term__value").val($("#lease-term").slider("value"));
    $("#lease-term__description").val("мес.");

    var LEASE_TERM = $("#lease-term__value").val();
    var MONTHLY_PAYMENT = Math.floor(
        (Number($("#cost-of-car").slider("value")) - Number($("#initial-payment").slider("value"))) *
            ((0.05 * Math.pow(1 + 0.05, Number(LEASE_TERM))) / (Math.pow(1 + 0.05, Number($("#lease-term").slider("value"))) - 1))
    );

    $("#lease-amount").val(spacesNumbers((Number($("#lease-term").slider("value")) * Number(MONTHLY_PAYMENT) + Number($("#initial-payment").slider("value"))).toString()) + " \u20bd");

    var COST_CAR = $("#cost-of-car__value").val();
    var INITIAL_PAYMENT = $("#initial-payment__value").val();
    var LEASE_AMOUNT__VALUE = Number($("#lease-term").slider("value")) * Number(MONTHLY_PAYMENT) + Number($("#initial-payment").slider("value"));

    COST_CAR = spacesNumbers(COST_CAR.toString());
    INITIAL_PAYMENT = spacesNumbers(INITIAL_PAYMENT.toString());
    LEASE_AMOUNT__VALUE = spacesNumbers(LEASE_AMOUNT__VALUE.toString());
    MONTHLY_PAYMENT = spacesNumbers(MONTHLY_PAYMENT.toString());

    $("#monthly-payment").val(MONTHLY_PAYMENT + " \u20bd");
    $("#lease-amount").val(LEASE_AMOUNT__VALUE + " \u20bd");
    $("#cost-of-car__value").val(COST_CAR);
    $("#initial-payment__value").val(INITIAL_PAYMENT);
});

$(function () {
    $("#request-button").click(function () {
        var COST_CAR = $("#cost-of-car__value").val();
        var INITIAL_PAYMENT = $("#initial-payment__value").val();
        var LEASE_TERM = $("#lease-term__value").val();
        var LEASE_AMOUNT = $("#lease-amount").val();
        var MONTHLY_PAYMENT = $("#monthly-payment").val();
        var REQUEST_OBJECT = {
            "Cost of the car": COST_CAR + " \u20bd",
            "Initial payment": INITIAL_PAYMENT,
            "Lease term": LEASE_TERM + " m.",
            "Lease amount": LEASE_AMOUNT,
            "Monthly payment": MONTHLY_PAYMENT,
        };
        $("#request-button").attr("disabled", "true");
        alert(JSON.stringify(REQUEST_OBJECT, null, 2));
    });
});

import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

console.log("IT WORKS!!!");

const costOfCar = document.querySelector("#cost-of-car");
const initPayment = document.querySelector("#initial-payment");
const leaseTerm = document.querySelector("#lease-term");

noUiSlider.cssClasses.connect += " custom-range";
noUiSlider.cssClasses.handle += " custom-handle";
noUiSlider.cssClasses.touchArea += " custom-handle";

noUiSlider.create(costOfCar, {
    behaviour: "tap",
    connect: [true, false],
    start: 3300000,
    range: {
        min: 1500000,
        max: 10000000,
    },
});

noUiSlider.create(initPayment, {
    behaviour: "tap",
    connect: [true, false],
    start: 3300000,
    range: {
        min: 1500000,
        max: 10000000,
    },
});

noUiSlider.create(leaseTerm, {
    behaviour: "tap",
    connect: [true, false],
    start: 3300000,
    range: {
        min: 1500000,
        max: 10000000,
    },
});
