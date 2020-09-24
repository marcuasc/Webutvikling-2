# Project 2

Welcome to this readme.md for project 2 in the subject IT2810 - Web development

This project is an interactive art exhibition, displaying various artworks of Keith Haring, combined with fitting poetry and music.





## Innhold
* [Motivation](#motivation)
* [Installation](#installation)
* [How to use the product](#hvordan-anvende-produktet)
* [Functionality](#egenskaper)
* [Components](#screenshots)
* [Layout](#teknologi-og-rammeverk)
* [Examplecode](#eksempelkode)
* [Testing](#testing)
* [Contributing](#bidra)
* [Team](#team)
* [Lisens](#lisens)
* 


## Motivation

We were given the task to make an interactive art gallery consiting of pictures, text and audio. 
We chose to use [Keith Harings](https://www.haring.com/!/about-haring/bio) artworks as inspiration for our project.
The arworks are animated and displayed with new color palettes, but the genious and simplicity of Harings artworks were keåt intact.

## Installation
**To run the project**

* Install [Node.js](https://nodejs.org)
* Open your terminal and navigate into a fitting folder for the project
* Clone into the project by writing `git clone https://gitlab.stud.idi.ntnu.no/it2810-h20/team-59/project-2.git`
* Navigate into the `exhibition` folder of the project and write `npm install` to install all necessary components
* Write `npm start` in your terminal to run the project


## How to use the project

Trenger screenshots av ferdig frontend for å kunne forklare her


## Functionality

Hvilke funksjonaliteter har nettsiden

## Components

This project consists of four main components.

#### ControlDisplay

This component is used to control and manipulate the rendering of the other components. 
ControlDisplay consists of three sliders that are used to change the parameters of the exhibition. We have one slider for changing the arworks color-palette, 
one for the mood of the music and one for the theme of the poetry.

The context API returns the selected value of the sliders as variables, which then is used by the other components. 
The use of states within each component makes the components re-render every time the sliders are moved.

#### ArtDisplay

#### PoetryDisplay

 PoetryDisplay uses AJAX to fetch poems from PoetryDB. The poems gets returned as a JSON-object, where every line of text is formatted as a line-attribute.
 The function `getText()` takes in all the lines from the poem, and adds them to a single string that later gets rendered as a `<p>`element.
 
 The adress for the different poems used in this project, are stored in a list called `input`. 
 PoetryDisplay picks a poem from the list to display by using the variable returned from ControlDisplay as an index in the `input`list.
 

####  AudioDisplay







Skrive litt om audio, artwork, control og poetry display. Hvordan er be bygget opp og hva gjør de? Lurk med litt eksempelkode her tror jeg

## Layout

Hvordan endte vi opp med utseendet på nettsiden. Grid vs flexbox, plassering av elementer, utseende på knapper osv osv.

## Testing

Hva og hvordan har vi testet. Hvorfor valgte vi å teste det vi gjorde? Vise dekningsgrad av testene?










