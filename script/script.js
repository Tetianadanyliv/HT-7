const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки
// податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
// викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
    myTaxes = (salary * this.tax).toFixed(0);
    return myTaxes
};
console.log (getMyTaxes.call(ukraine, 10000));
console.log (getMyTaxes.call(latvia, 20000));
console.log (getMyTaxes.call(litva, 30000));

// Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у
// середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).
// Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes(country) {
  const middleTaxes = (this.middleSalary * this.tax).toFixed(0);
  return middleTaxes;
}
console.log(getMiddleTaxes.call(ukraine, 1789));
console.log(getMiddleTaxes.call(latvia, 1568));
console.log(getMiddleTaxes.call(litva, 1509));

// Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього
// податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
// Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes(country) {
  const totalTaxes = (getMiddleTaxes.call(ukraine)*this.vacancies).toFixed(0);
  return totalTaxes;
}
console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));

// Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: {
//   salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary –
//   генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в
//   залежності від вибраної країни та значення salary

function getMySalary(country) {
  const rendomSalary = Number(Math.random() * (2000 - 1500) + 1500).toFixed(0);
  const taxes = rendomSalary * this.tax;
  const profit = (rendomSalary - taxes);
  const mySalary = {rendomSalary, taxes, profit};
  return mySalary;
}
setInterval(() => {
  console.log(getMySalary.call(ukraine));
}, 10000);
