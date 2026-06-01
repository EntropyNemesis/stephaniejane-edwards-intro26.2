const newItem = document.createElement('footer');
document.appendChild('newItem');
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('newItem');
const copyright = document.createElement('p');
copyright.innerHTML = `\u00A9 Stephanie Jane Edwards ${thisYear}`;
footer.appendChild(copyright);


const skills = ["geospatial analysis", "database administration", "Javascript", "painting", "cooking"];
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');
skills.forEach(element => {
    const skill = document.createElement('li');
    skill.innerHTML = [skill];
    skillsList.appendChild('element');
});