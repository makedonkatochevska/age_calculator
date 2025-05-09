const birthDateInput = document.querySelector("#birthdate");
const result = document.querySelector("#result");
const calculateBtn = document.querySelector("#calculateAge");

class AgeCalculator {
  constructor(birthDate) {
    this.birthDate = new Date(birthDate);
  }

  calculateAge() {
    const currentDate = new Date();

    let ageInYears = currentDate.getFullYear() - this.birthDate.getFullYear();

    let ageInMonths = currentDate.getMonth() - this.birthDate.getMonth(); // 3 - 9

    //Adjust age if current month is before birth month
    if (
      ageInMonths < 0 ||
      (ageInMonths === 0 && currentDate.getDate() < this.birthDate.getDate()) // and if today is before from birth day
    ) {
      ageInYears--;
      ageInMonths += 12;
    }

    const convertedToWeeks = Math.floor(
      (ageInYears * 365 + ageInMonths * 30) / 7
    );

    //Objects shorthand when property name and value have the same name
    return {
      ageInYears, // ageInYears: ageInYears
      ageInMonths,
      convertedToWeeks,
    };
  }
}

function displayAge() {
  const birthdate = birthDateInput.value;

  if (birthdate) {
    const ageCalculator = new AgeCalculator(birthdate);

    //Destructuring
    const { ageInYears, ageInMonths, convertedToWeeks } =
      ageCalculator.calculateAge();

    result.textContent = `Your age is ${ageInYears} years, ${ageInMonths} months, OR ${convertedToWeeks} weeks.`;
  }
}

calculateBtn.addEventListener("click", displayAge);
