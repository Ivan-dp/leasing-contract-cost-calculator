import "../../blocks/button/button.js";

const resume = `Приветствую тебя, путник!\nЯ Иван Литовченко\nШарю во Frontend-разработке и вёрстке\nМой ТГ: https://t.me/Ivan_Litovchenko`;
console.log(resume);

function spacesNumbers(str) {
    var m = str.match(/^(.*?)((?:[,.]\d+)?|)$/);
    return m[1].replace(/\B(?=(?:\d{3})*$)/g, " ") + m[2];
}

import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

// Компоненты .cost-of-car

const costOfCar = document.querySelector("#cost-of-car");
const costOfCarValue = document.querySelector("#cost-of-car__value");
const costOfCarDesc = document.querySelector("#cost-of-car__description");

// Компоненты .initial-payment

const initPayment = document.querySelector("#initial-payment");
const initPaymentValue = document.querySelector("#initial-payment__value");
const initPaymentDesc = document.querySelector("#initial-payment__description");

// Компоненты .lease-term

const leaseTerm = document.querySelector("#lease-term");
const leaseTermValue = document.querySelector("#lease-term__value");
const leaseTermDesc = document.querySelector("#lease-term__description");

// Добавление кастомных классов плагину noUiSlider

noUiSlider.cssClasses.connect += " custom-range";
noUiSlider.cssClasses.handle += " custom-handle";
noUiSlider.cssClasses.touchArea += " custom-handle";

// Инициализация и настройка noUiSlider

noUiSlider.create(costOfCar, {
    behaviour: "tap",
    connect: [true, false],
    start: 3300000,
    range: {
        min: 1500000,
        max: 10000000,
    },
    step: 1000,
});

noUiSlider.create(initPayment, {
    behaviour: "tap",
    connect: [true, false],
    start: Number(costOfCar.noUiSlider.get()) * 0.13,
    range: {
        min: Number(costOfCar.noUiSlider.get()) * 0.1,
        max: Number(costOfCar.noUiSlider.get()) * 0.6,
    },
    step: 10,
});

noUiSlider.create(leaseTerm, {
    behaviour: "tap",
    connect: [true, false],
    start: 60,
    range: {
        min: 6,
        max: 120,
    },
    step: 1,
});

// установление значений при изменении положения ползунков слайдеров

costOfCar.noUiSlider.on("update", function (values, handle) {
    costOfCarValue.value = spacesNumbers(Math.floor(values[handle]).toString());
    initPayment.noUiSlider.updateOptions({
        start: Math.floor(values[handle] * 0.13),
        range: {
            min: Math.floor(values[handle] * 0.1),
            max: Math.floor(values[handle] * 0.6),
        },
    });
    initPaymentValue.value = spacesNumbers(Math.floor(values[handle] * 0.13).toString()) + " \u20bd";
});
costOfCarValue.addEventListener("change", function () {
    costOfCar.noUiSlider.set([this.value]);
});

initPayment.noUiSlider.on("update", function (values, handle) {
    initPaymentValue.value = spacesNumbers(Math.floor(values[handle]).toString()) + " \u20bd";
    initPaymentDesc.value = Math.floor((initPayment.noUiSlider.get() / costOfCar.noUiSlider.get()) * 100) + "%";
});
initPaymentValue.addEventListener("change", function () {
    initPayment.noUiSlider.set([this.value]);
});

leaseTerm.noUiSlider.on("update", function (values, handle) {
    leaseTermValue.value = Math.floor(leaseTerm.noUiSlider.get());
    leaseTermValue.value = Math.floor(values[handle]);
});
leaseTermValue.addEventListener("change", function () {
    leaseTerm.noUiSlider.set([this.value]);
});

// Установка значений пояснительных полей

costOfCarDesc.value = `\u20bd`;
initPaymentDesc.value = Math.floor((initPayment.noUiSlider.get() / costOfCar.noUiSlider.get()) * 100) + "%";
leaseTermDesc.value = "мес.";

// Присвоение переменным вычислительных полей

const leaseAmount = document.querySelector("#lease-amount");
const monthlyPayment = document.querySelector("#monthly-payment");

// Переменная коэффициента

const factor = 1.15;

// Ежемесячный платёж

const monthlyPaymentValue = Math.floor(((Number(costOfCar.noUiSlider.get()) - Number(initPayment.noUiSlider.get())) / Number(leaseTerm.noUiSlider.get())) * factor);

monthlyPayment.value = spacesNumbers(monthlyPaymentValue.toString()) + " \u20bd";

// Сумма договора лизинга

const leaseAmountValue = monthlyPaymentValue * Number(leaseTerm.noUiSlider.get()) + Number(initPayment.noUiSlider.get());

leaseAmount.value = spacesNumbers(leaseAmountValue.toString()) + " \u20bd";

// Слайдер "Стоимость автомобиля"

costOfCar.noUiSlider.on("update", function (values, handle) {
    monthlyPayment.value = spacesNumbers(Math.floor(((Number(values[handle]) - Number(initPayment.noUiSlider.get())) / Number(leaseTerm.noUiSlider.get())) * factor).toString()) + " \u20bd";
    leaseAmount.value =
        spacesNumbers(
            (
                Math.floor(((Number(values[handle]) - Number(initPayment.noUiSlider.get())) / Number(leaseTerm.noUiSlider.get())) * factor) * Number(leaseTerm.noUiSlider.get()) +
                Number(initPayment.noUiSlider.get())
            ).toString()
        ) + " \u20bd";
});

// Слайдер "Первоначальный взнос"

initPayment.noUiSlider.on("update", function (values, handle) {
    monthlyPayment.value = spacesNumbers(Math.floor(((Number(costOfCar.noUiSlider.get()) - Number(values[handle])) / Number(leaseTerm.noUiSlider.get())) * factor).toString()) + " \u20bd";

    leaseAmount.value =
        spacesNumbers(
            (
                Math.floor(((Number(costOfCar.noUiSlider.get()) - Number(values[handle])) / Number(leaseTerm.noUiSlider.get())) * factor) * Number(leaseTerm.noUiSlider.get()) +
                Number(values[handle])
            ).toString()
        ) + " \u20bd";
});

// Слайдер "Срок лизинга"

leaseTerm.noUiSlider.on("update", function (values, handle) {
    monthlyPayment.value = spacesNumbers(Math.floor(((Number(costOfCar.noUiSlider.get()) - Number(initPayment.noUiSlider.get())) / Number(values[handle])) * factor).toString()) + " \u20bd";

    leaseAmount.value =
        spacesNumbers(
            (
                Math.floor(((Number(costOfCar.noUiSlider.get()) - Number(initPayment.noUiSlider.get())) / Number(values[handle])) * factor) * Number(values[handle]) +
                Number(initPayment.noUiSlider.get())
            ).toString()
        ) + " \u20bd";
});

// Действие кнопки "Оставить заявку"

const reqButton = document.querySelector("#request-button");

reqButton.addEventListener("click", function () {
    const reqObject = {
        "Cost of the car": costOfCarValue.value + " \u20bd",
        "Initial payment": initPaymentValue.value,
        "Lease term": leaseTermValue.value + " months",
        "Lease amount": leaseAmount.value,
        "Monthly payment": monthlyPayment.value,
    };
    reqButton.setAttribute("disabled", true);
    alert(JSON.stringify(reqObject, null, 2));
});

// НОВАЯ ФОРМУЛА
// monthlyPayment = ((costOfCar - initPayment) / leaseAmount) * 1.15)
// leaseAmount = (monthlyPayment * leaseTerm) + initPayment
