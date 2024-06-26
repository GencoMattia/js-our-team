const ourTeam = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg",
    }
];

for(let i = 0; i < ourTeam.length; i++){
    const teamMember = ourTeam[i];
    const teamContainerEl = document.querySelector(".team-cards");
    const teamMemberEl = document.createElement("article");

    teamContainerEl.appendChild(teamMemberEl);

    const memberPictureEl = document.createElement("img");
    const memberNameEl = document.createElement("h3");
    const memberRoleEl = document.createElement("p");

    memberPictureEl.src = `./img/${teamMember.photo}`

    teamMemberEl.appendChild(memberPictureEl);
    teamMemberEl.appendChild(memberNameEl);
    teamMemberEl.appendChild(memberRoleEl);

    memberPictureEl.append(teamMember.photo);
    memberNameEl.append(teamMember.name);
    memberRoleEl.append(teamMember.role);

    for (let key in teamMember) {
        console.log(key, teamMember[key]);
    }
}

console.log(ourTeam)