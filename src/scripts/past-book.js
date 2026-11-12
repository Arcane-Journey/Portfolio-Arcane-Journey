const projects = 
[
    {
        tag: "A game that transcended the virtual world",
        title: "The SmombieRun: a running competition about smartphone distractions",
        desc: "On 2 Juli 2026, me and Fontys held an official event with the goal of creating awareness for dangerous phone usage in public. We did this with the SmombieRun.\r\n\r\nA SmombieRun is a 400m race to the finish, but you must complete minigames and tasks on your phone to stay in the race. Making a mistake in the minigames earns you a strike. Fail too many times, gain too many strikes, and your race is over.\r\n\r\nNot only was this a lot of fun to make, it was also featured in news articles from Omroep Brabant and Eindhovens Dagblad.",
        img: "/assets/img/past-creations/icon-SmombieRun.png",
        link: "/past-projects/past-smombierun.html"
    },
    {
        tag: "The first game design project for school",
        title: "VennData: A stealthy platformer/shooter game",
        desc: "A game set in a modernized distant future, you're part of a anti-cyberterrorist squad tasked with protecting the city from malicious hacker groups.\r\n\r\nYou and your team are sent out to deal with an physical attack on the HQ housing the central servers, and prevent them from shutting down the grid, before being framed for the attack and designated as outlaws.\r\n\r\nThis was the first project I did for my studies in Semester 4 Game Design. It was such a success, that it was featured at the Fontys Open Day 2024. ",
        img: "/assets/img/past-creations/icon-VennData.png",
        link: "/past-projects/past-venndata.html"
    },
    {
        tag: "A dive into learning VR and serious games",
        title: "Tomb Quest VR: an immersive exercising game",
        desc: "The first game project I did in a project team, and the first VR game I've worked on. This is a VR exercising game, aptly named \"Excergaming\", designed to make working up a sweat a bit more fun.\r\n\r\nOur submission was a roguelike / dungeon crawler game where the player has to navigate through rooms varying between high intensity exercises, and complex puzzles to catch your breath.",
        img: "/assets/img/past-creations/icon-TombQuestVR.png",
        link: "/past-projects/past-tombquest.html"
    },
    {
        tag: "My start in learning how to code",
        title: "Mod Creation for Keep Talking and Nobody Explodes",
        desc: "I got my start in programming since 2018 making mods for a puzzle game called Keep Talking and Nobody Explodes made by Steel Crate Games.\r\n\r\nI used this opportunity to learn about how to make stuff in C# Unity, creating new experiences that people have played and enjoyed (and sometimes not so much).",
        img: "/assets/img/past-creations/icon-KTaNE.png",
        link: "/past-projects/past-ktane.html"
    },
    
];

let currentIndex = 0;

var tagEl;
var titleEl;
var descEl;
var imgEl;
var pageNumEl;

function updatePage() {
    const currentProject = projects[currentIndex];

    tagEl.textContent = currentProject.tag;
    titleEl.textContent = currentProject.title;
    titleEl.href = currentProject.link
    descEl.textContent = currentProject.desc;
    imgEl.src = currentProject.img;
    
    pageNumEl.textContent = `Page ${currentIndex + 1} of ${projects.length}`;
}

document.addEventListener('DOMContentLoaded', ()=>
{
    tagEl = document.getElementById('projectTag');
    titleEl = document.getElementById('projectTitle');
    descEl = document.getElementById('projectDesc');
    imgEl = document.getElementById('projectImage');
    pageNumEl = document.getElementById('pageNumber');
    
    document.getElementById('nextBtn').addEventListener('click', () => 
    {
        currentIndex++;
        if (currentIndex >= projects.length) {
            currentIndex = 0;
        }
        updatePage();
    });

    document.getElementById('prevBtn').addEventListener('click', () =>
    {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = projects.length - 1;
        }
        updatePage();
    });

    updatePage();
})