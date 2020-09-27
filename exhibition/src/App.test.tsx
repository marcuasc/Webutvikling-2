import React from 'react';
import ArtDisplay from "./components/ArtDisplay/ArtDisplay";
import PoetryDisplay from "./components/PoetryDisplay/PoetryDisplay";
import AudioDisplay from "./components/AudioDisplay/AudioDisplay";
import renderer from 'react-test-renderer';

describe('Testing ArtDisplay', ()=>{
    it('Matches ArtDisplay', () =>{
        const tree = renderer.create(<ArtDisplay/>).toJSON();
        expect(tree).toMatchSnapshot();
    })


})

describe('Testing PoetryDisplay', ()=>{
    it('Matches PoetryDisplay', () =>{
        const tree = renderer.create(<PoetryDisplay/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('Testing AudioDisplay', ()=>{
    it('Matches AudioDisplay', () =>{
        const tree = renderer.create(<AudioDisplay/>).toJSON();
        expect(tree).toMatchSnapshot();
    })


})



