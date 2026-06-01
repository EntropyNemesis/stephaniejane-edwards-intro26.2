const newItem = document.createElement('footer');
document.body.appendChild(newItem);
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `\u00A9 Stephanie Jane Edwards ${thisYear}`;
footer.appendChild(copyright);
//document.body.appendChild(footer);


const skills = ["geospatial analysis", "database administration", "data mining", "grant writing", "project management", "Javascript", "painting", "cooking"];
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');
skills.forEach(element => {
    const skill = document.createElement('li');
    skill.innerText = element;
    skillsList.appendChild(skill);
});