const currentYear = new Date().getFullYear();


const theranos = {
  firstName: "Elizabeth",
  lastName: "Holmes",
  age: 40,
  education: [
    "St. John’s School",
    "Stanford University"
  ],
  wiki: "https://en.wikipedia.org/wiki/Elizabeth_Holmes"
};


const elon = {
  firstName: "Elon",
  middleName: "Reeve",
  lastName: "Musk",
  age: 48,
  education: [
    "Queen’s University",
    "Stanford University",
    "Wharton School of the University of Pennsylvania"
  ],
  wiki: "https://en.wikipedia.org/wiki/Elon_Musk"
};


const hero = {
  firstName: "Trisha",
  middleName: "Key",
  lastName: "Paytas",
  age: 37,
  education: [
    "Six High School",
    "Seven University"
  ],
  wiki: "https://en.wikipedia.org/wiki/Trisha_Paytas",


  occupation: "Content creator",
  hometown: "Riverside, California","
};


const profiles = [theranos, elon, hero];


const cards = document.querySelectorAll("#staff-container article");

profiles.forEach((person, index) => {
  const card = cards[index];

  const name = card.querySelector(".card-title");
  const age = card.querySelector(".card-text");
  const education = card.querySelector(".small");
  const button = card.querySelector("a");

  // Name: Last, First
  name.textContent = `${person.lastName}, ${person.firstName}`;

  // Age
  age.textContent = `Age: ${person.age}`;

  // Education
  education.innerHTML = "- Education -<br>";
  person.education.forEach((school) => {
    education.innerHTML += `${school}<br>`;
  });

  // Wiki link
  button.href = person.wiki;
});
