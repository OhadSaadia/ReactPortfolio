import self from "../img/self.jpeg"
import musicAppPic from "../img/musicAppPic.jpeg"
import expressPic from "../img/expressPic.jpeg"
import ASPMVCPic from "../img/ASPMVCPic.jpeg"
import carServicesAppPic from "../img/carServicesAppPic.jpg"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Ohad",
    lastName: "Saadia",
    initials: "os",
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Israel'
        },
        {
            emoji: "💼",
            text: "working as a Full Stack developer at Matrix"
        },
        {
            emoji: "📧",
            text: "ohad24333@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },   
        {
            link: "https://github.com/OhadSaadia",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ohad-saadia-a115361a3/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],
    bio: "Hello! I'm Ohad. I'm looking for a job that will give me the option to prove, and improve to become a master in programing. I studied web development at HackerU, open to work as a .Net FullStack | Frontend | Backend develeper. I'm fast learner and vary motivated. You should hire me!",
    skills:
        {
            proficientWith: ['C#','javascript', 'SqlServer' , 'ASP.API & MVC', 'nodejs' ,'Angular', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3'],
            exposedTo: ['MongoDB', 'Redis' ,'python', 'express']
        }
    ,
    hobbies: [
        {
            label: 'music',
            emoji: '🎶'
        },
        {
            label: 'traveling',
            emoji: '🚐'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [
        {
            title: "Music App – Full Stack Project",
            source: "https://github.com/OhadSaadia/MusicAppFull", 
            image: musicAppPic
        },
        {
            title: "Car Services App – Full Stack Project (on progress)",
            source: "https://github.com/OhadSaadia/React-and-ASP-Car-Services-App-on-progress",
            image: carServicesAppPic
        },
        {
            title: "NodeJS – Express simple CRUD app",
            source: "https://github.com/OhadSaadia/Express-Crud-MongoDB",
            image: expressPic
        },
        {
            title: "ASP MVC",
            source: "https://github.com/OhadSaadia/ASPNET-CORE-MVC-Recipes",
            image: ASPMVCPic
        }
    ]
}