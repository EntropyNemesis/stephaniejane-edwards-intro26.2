const newItem = document.createElement('footer');
document.body.appendChild(newItem);
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `\u00A9 Stephanie Jane Edwards ${thisYear}`;
footer.appendChild(copyright);


const skills = ["geospatial analysis", "database administration", "data mining", "grant writing", "project management", "Javascript", "painting", "cooking"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
for (let i=0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
/*skills.forEach(element => {
    const skill = document.createElement('li');
    skill.innerText = element;
    skillsList.appendChild(skill);
}); */

const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log(event);
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;
    console.log(name, email, message);


    messageForm.reset();
});