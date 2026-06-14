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

    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    
    newMessage.innerHTML = `
        <a href="mailto:${email}"><span class="message-name">${name}</span></a>
        <span>${message}</span>
    `
    const removeButton = document.createElement('button');
    removeButton.innerHTML = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function(event) {
        const entry = event.target.parentNode;
        entry.remove();
    }) 

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});

fetch('https://api.github.com/users/EntropyNemesis/repos')
    .then(response => {
        return response.json();
    })
    .then(repositories => {
        const projectSection = document.querySelector('#Projects');
        const projectList = projectSection.querySelector('ul');
        for (let i=0; i < repositories.length; i++) {
            const project = document.createElement('li');
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
    }
        console.log(repositories);
    })
    /*.catch(error => {
        if (repositories.length === 0) {
            console.error("No GitHub repositories are viewable at this time, please check back later.", error);
        }   
    })  */  ;

