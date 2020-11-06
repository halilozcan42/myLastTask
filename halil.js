class Person {
  constructor(name, surname, phoneNumber, email, address) {
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address;
  }
}

const halilOzcan = new Person(
  "Halil",
  "Özcan",
  "0762125151",
  "halilozcan4242@gmail.com",
  "Håkan Lundbergs gata 22, 252 33 Helsingborg"
);

var info = "";

info = `
              <div class="row">
                <div class="col-md-4">
                  <p>Name :${halilOzcan.name}</p>
                  <p>Surname :${halilOzcan.surname}</p>
                </div>
                <div class="col-md-4">
                  <p>Phone :${halilOzcan.phoneNumber}</p>
                  <p>Email :${halilOzcan.email}</p>
                </div>
              <div class="col-md-4">
                <p>Address :${halilOzcan.address}</p>
              </div>
            </div>
`;

document.querySelector("#info").innerHTML = info;

const Certificates = {
  html: "img/html.jpeg",
  css: "img/css.jpeg",
  addButton: "img/js.jpeg",
};

const MyLanguages = [
  { language: "Html", level: "80" },
  { language: "Css", level: "70" },
  { language: "Javascript", level: "50" },
  { language: "React", level: "20" },
  { language: "Angular", level: "20" },
  { language: "Java", level: "20" },
  { language: "Bootstrap", level: "70" },
  { language: "Php", level: "40" },
  { language: "Jquery", level: "40" },
  { language: "Mysql", level: "50" },
];

var html = "";

MyLanguages.forEach((lang) => {
  html = `
    <div class="progress my-2">
        <div class="progress-bar" role="progressbar" style="width: ${lang.level}%;" aria-valuenow="${lang.level}" aria-valuemin="0" aria-valuemax="100">${lang.language} %${lang.level}</div>
    </div>
    `;
  document.querySelector("#lang").innerHTML += html;
});

const MyLanguages2 = [
  { language: "Turkish", level: "Native", degree: 100 },
  { language: "English", level: "B2", degree: 60 },
  { language: "Swedish", level: "B1", degree: 50 },
];

var language = "";

MyLanguages2.forEach((lang) => {
  language = `
    <div class="progress my-2">
        <div class="progress-bar" role="progressbar" style="width: ${lang.degree}%;" aria-valuenow="${lang.degree}" aria-valuemin="0" aria-valuemax="100">${lang.language} => ${lang.level}</div>
    </div>
    `;
  document.querySelector("#lang2").innerHTML += language;
});
