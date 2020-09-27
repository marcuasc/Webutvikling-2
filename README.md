# Project 2

## Table of contents
* [Motivation](#motivation)
* [Installation](#installation)
* [SVG and animations](#SVG)
* [Poems and AJAX](#Poems and AJAX)
* [Audio](#Audio)
* [Controller](#controller)
* [Layout](#layout)
* [Web storage](#webstorage)
* [Testing](#testing)



## Motivation

We were given the task to make an interactive art gallery consiting of pictures, text and audio. 
We chose to use [Keith Harings](https://www.haring.com/!/about-haring/bio) artworks as inspiration for our project.
The arworks are animated and displayed with new color palettes, but the genious and simplicity of Harings artworks were kept intact.

## Installation
**To run the project**

* Install [Node.js](https://nodejs.org)
* Open your terminal and navigate into a fitting folder for the project
* Clone into the project by writing `git clone https://gitlab.stud.idi.ntnu.no/it2810-h20/team-59/project-2.git`
* Navigate into the `exhibition` folder of the project and write `npm install` to install all necessary components
* Write `npm start` in your terminal to run the project


## SVG and animations




## Poems and AJAX

We use AJAX to dynamically fetch poems from poetryDB. By dynamically fetching the poems, we can update the poem without re-rendering the whole newsite.

The component PoetryDisplay uses the fetches the chosen poem in its lifecycle-method to ensure that the poem is retrieved after the component gets rendered.

The fetch method returns a JSON-object with separation between all the lines of the poem. The method `getText()` appends the lines into an empty string on at a time, thus creating a single string with containing the whole poem. 
The string then gets returned and rendered as a single `<p>` element.

The adresses for the different poems used in this project are stored locally in a list called `input`. 
PoetryDisplay picks a poem from the list to display by using the variable returned from on of the sliders in ControlDisplay as an index in the `input`list.

## Audio
The component AudioDisplay uses the HTML audio-tag to render audio and controlls. We have three audio-files, one for each of the themes selected by the controller component.
All the audio-files are stored in the projects `Public` folder, and the different paths are stored locally in a list in AudioDisplay. The component picks the index of the list corresponding to the chosen sound theme of the user.

All the files are from [SoundBible](http://soundbible.com/tags-mp3.html) and are royalty free.

## Controller

This component is used to control and manipulate the rendering of the other components. 
ControlDisplay consists of three sliders that are used to change the parameters of the exhibition. We have one slider for changing the artworks color-palette, 
one for the mood of the music and one for the theme of the poetry.

The controls are used as a provider in the Context API, which is used by the other compoents to determine its rendering.
The use of states within each component makes the components re-render every time the sliders are moved, without re-rendering the whole site.

## Layout

## Webstorage

We have used both localstorage and sessionstorage in this project. 

Localstorage is used to store the users favourite combinations of artwork, color-palette, audio and poem. We have a button that is used to save the chosen configuration, and a button that renders the components with the previously chosen configuration.

Sessionstorage is used to store the poem, audio and color-palette of each artwork. When the user returns to a previously seen artwork, the artwork will have the same configuration the user left it in. 

## Testing

We have added a snapshot test for `PoetryDisplay`, `AudioDisplay` and `ArtworkDisplay`. A snapshot of what the components renders have been stored in the project, and the tests compares the rendered components to that of the snapshot. Any changes will give a failed test.

The project is responsive, and works well on all devices and screen-sizes. We have manually tested on a computer with various window-sizes, and on an iPhone. All components renders correctly and has the wanted layout.



