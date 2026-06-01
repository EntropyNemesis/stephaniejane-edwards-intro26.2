const newItem = document.createElement('footer');
newItem.appendChild(footer);
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('newItem');
const copyright = document.createElement('p');
copyright.innerHTML = `\u00A9 Stephanie Jane Edwards ${thisYear}`;
footer.appendChild(copyright);


const skills = ["geospatial analysis", "database administration", "Javascript", "painting", "cooking"];
const skillsSection = document.querySelector('#skills');
const skillsList = document.querySelector('skillsSection.ul');
skills.forEach(element => {
    const skill = document.createElement('li');
    skill.innerHTML = [skills];
    skillsList.appendChild('skill');
});)