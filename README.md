# Project 2

https://gitpod.idi.ntnu.no/https://gitlab.stud.idi.ntnu.no/it2810-h20/team-59/project-2.git

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

The artworks were originally created by Keith Haring and redrawn by us in Affinity Designer and exported to SVG. That completed a lot of the necessary work, but some manual conversion was still needed.
All artworks are class components to make it easier to animate and change color. 

The animations have been implemented with the [just-animate](https://just-animate.github.io/) JavaScript library. The animation loops infinitely and starts automatically when the component mounts.

The artworks take the color value from the context as a prop from ArtDisplay.tsx such that it automatically updates when the context updates.
ColorThemes are specific to the artwork.


## Poems and AJAX

The component PoetryDisplay is responsible for handling the poems. It is a functional arrow component.

We use AJAX to dynamically fetch poems from poetryDB. By dynamically fetching the poems, we can update the poem without re-rendering the whole website.

The component PoetryDisplay fetches the chosen poem with `useEffect` to ensure that the poem is retrieved after the component gets rendered and when the poetry or index value in the context is updated.

The fetch method returns a JSON-object with a lot of information about the poem. The necessary information is set in the data state.
In the return function, the necessary information is put in a `<p>` element.

The adresses for the different poems used in this project are stored locally in a list called `poems`. 
PoetryDisplay picks a poem from the list to display by using the context variable poetry and index. This is controlled by two of the sliders in ControlDisplay.

## Audio

The component AudioDisplay uses the HTML audio-tag to render audio and controls. We have three audio-files per artwork, one for each of the themes selected by the controller component.

All the audio-files are stored in the projects `Public` folder, and the different paths are stored locally in a list in AudioDisplay. The component picks the index of the list corresponding to the chosen sound theme of the user and current index of artwork.

All the files are from [SoundBible](http://soundbible.com/tags-mp3.html) and are royalty free.

## Controller

This component is used to control and manipulate the rendering of the other components. 
ControlDisplay consists of three sliders that are used to change the parameters of the exhibition. We have one slider for changing the artworks color-palette, 
one for the mood of the music and one for the theme of the poetry.

The controls are used as a provider in the Context API, which is used by the other compoents to determine its rendering.
The use of states within each component makes the components re-render every time the sliders are moved, without re-rendering the whole site.

## Layout

To ensure a responsive design, we have used percentages as much as we can on our components.

To ensure that the spacing between components looks nice, we have used flexbox. Flexbox is used in the App component to make sure the main components fit correctly, in ControlDisplay to ensure the controls are spaced evenly in a column and on several buttons to space them evenly. It's also used on the FrontPage component for an even distribution of elements. 

In addition, the flexbox in the App component has `flex-wrap: wrap;` and `min-width: 250px;` on the main components so that it will wrap in a column-like manner if the window gets too narrow. The FrontPage component uses this aswell.

The controls have `flex: 2;` to give them extra space.

To ensure that the artworks scale and take up the space that they need, but doesn't get to small, it has the values `width: 100%; max-width: 40%; min-width: 250px;`.

## Webstorage

We have used both localstorage and sessionstorage in this project. 

Localstorage is used to store the users favourite combinations of artwork, color-palette, audio and poem. We have a button that is used to save the chosen configuration, and a button that renders the components with the previously chosen configuration.

Sessionstorage is used to store the poem, audio and color-palette of each artwork. When the user returns to a previously seen artwork, the artwork will have the same configuration the user left it in. 

## Testing

We have added a snapshot test for `PoetryDisplay`, `AudioDisplay` and `ArtworkDisplay`. A snapshot of what the components renders have been stored in the project, and the tests compares the rendered components to that of the snapshot. Any changes will give a failed test.

The project is responsive, and works well on all devices and screen-sizes. We have manually tested on a windows machine with various window-sizes (chrome), a macbook with various window-sizes (chrome) and on an iPhone (safari). All components renders correctly and has the wanted layout.