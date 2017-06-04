import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

class MusicBox extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <Container/>

            </div>
        );
    }
}

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <LeftSide/>
                <RightSide/>
            </div>
        );
    }
}

class LeftSide extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="two-row-window">
                <div className="piano-window">
                    <PianoBar/>
                </div>
                <Icons/>
            </div>

        );
    }
}

class Icons extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {

        let color = prompt("Podaj kolor przycisków MPC: silver, blue, green, yellow");
            let mojElement = <span>Nieprawidlowy kolor</span>;
            const kolory = ['silver', 'green', 'blue', "orange"];
            let isCorrect = kolory.find((e)=>{
                if(e==color){return true}
            });

        console.log(color);
            let tab = ["A", "B", "C", "D", "E", "F", "G", "H", "i", "J", "K", "L", "M", "O", "P", "R"];
            let array = [];
            let mpcfunctions = [
                function A(){
                    let a = document.getElementById("A");
                    a.load();
                    a.play();
                },

                function B(){
                    let b = document.getElementById("B");
                    b.load();
                    b.play();
                },
                function C(){
                    let c = document.getElementById("C");
                    c.load();
                    c.play();
                },
                function D(){
                    let d = document.getElementById("D");
                    d.load();
                    d.play();
                }

            ]
            tab.map((e, i) => {
                mojElement = <div  className={"icon " + color} id={e} onClick={mpcfunctions[i]}>{e}</div>
                array.push(mojElement)
            })



        return (

            <div>
                <div className="icons">
                    {array[0]}
                    {array[1]}
                    {array[2]}
                    {array[3]}
                    {array[4]}
                    {array[5]}
                    {array[6]}
                    {array[7]}
                    {array[8]}
                    {array[9]}
                    {array[10]}
                    {array[11]}
                    {array[12]}
                    {array[13]}
                    {array[14]}
                    {array[15]}

                </div>

            </div>
        );
    }
}

class PianoBar extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {

        function c1Play(){
            let c1 = document.getElementById("c1");
            c1.load();
            c1.play();
        }
        function cis1Play(){
            let cis1 = document.getElementById("cis1");
            cis1.load();
            cis1.play();
        }
        function d1Play(){
            let d1 = document.getElementById("d1");
            d1.load();
            d1.play();
        }
        function dis1Play(){
            let dis1 = document.getElementById("dis1");
            dis1.load();
            dis1.play();
        }
        function e1Play(){
            let e1 = document.getElementById("e1");
            e1.load();
            e1.play();
        }
        function f1Play(){
            let f1 = document.getElementById("f1");
            f1.load();
            f1.play();
        }
        function fis1Play(){
            let fis1 = document.getElementById("fis1");
            fis1.load();
            fis1.play();
        }
        function g1Play(){
            let g1 = document.getElementById("g1");
            g1.load();
            g1.play();
        }
        function gis1Play(){
            let gis1 = document.getElementById("gis1");
            gis1.load();
            gis1.play();
        }
        function a1Play(){
            let g1 = document.getElementById("a1");
            a1.load();
            a1.play();
        }
        function b1Play(){
            let b1 = document.getElementById("b1");
            b1.load();
            b1.play();
        }
        function h1Play(){
            let h1 = document.getElementById("h1");
            h1.load();
            h1.play();
        }
        function c2Play(){
            let c2 = document.getElementById("c2");
            c2.load();
            c2.play();
        }
        function cis2Play(){
            let cis2 = document.getElementById("cis2");
            cis2.load();
            cis2.play();
        }
        function d2Play(){
            let d2 = document.getElementById("d2");
            d2.load();
            d2.play();
        }
        function dis2Play(){
            let dis2 = document.getElementById("dis2");
            dis2.load();
            dis2.play();
        }
        function e2Play(){
            let e2 = document.getElementById("e2");
            e2.load();
            e2.play();
        }
        function f2Play(){
            let f2 = document.getElementById("f2");
            f2.load();
            f2.play();
        }
        function fis2Play(){
            let fis2 = document.getElementById("fis2");
            fis2.load();
            fis2.play();
        }
        function g2Play(){
            let g2 = document.getElementById("g2");
            g2.load();
            g2.play();
        }
        function gis2Play(){
            let gis2 = document.getElementById("gis2");
            gis2.load();
            gis2.play();
        }
        function a2Play(){
            let a2 = document.getElementById("a2");
            a2.load();
            a2.play();
        }
        function b2Play(){
            let b2 = document.getElementById("b2");
            b2.load();
            b2.play();
        }
        function h2Play(){
            let h2 = document.getElementById("h2");
            h2.load();
            h2.play();
        }
        return (
            <div className="piano-box">
                <ul className="piano">
                    <li className="key">
                        <span className="white-key" data-key="20" data-note="1C" onClick={c1Play} ></span>
                        <span className="black-key" data-key="81" data-note="1Cs" onClick={cis1Play}></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="65" data-note="1D" onClick={d1Play}></span>
                        <span className="black-key" data-key="87" data-note="1Ds" onClick={dis1Play}></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="83" data-note="1E" onClick={e1Play}></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="68" data-note="1F" onClick={f1Play}></span>
                        <span className="black-key" data-key="82" data-note="1Fs" onClick={fis1Play}></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="70" data-note="1G" onClick={g1Play}></span>
                        <span className="black-key" data-key="84" data-note="1Gs" onClick={gis1Play}></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="71" data-note="2A" onClick={a1Play}></span>
                        <span className="black-key" data-key="89" data-note="2As" onClick={b1Play}></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="72" data-note="2B" onClick={h1Play}></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="74" data-note="2C" onClick={c2Play}></span>
                        <span className="black-key" data-key="73" data-note="2Cs" onClick={cis2Play}></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="75" data-note="2D" onClick={d2Play}></span>
                        <span className="black-key" data-key="79" data-note="2Ds" onClick={dis2Play}></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="76" data-note="2E" onClick={e2Play}></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="186" data-note="2F" onClick={f2Play}></span>
                        <span className="black-key" data-key="219" data-note="2Fs" onClick={fis2Play}></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="222" data-note="2G" onClick={g2Play}></span>
                        <span className="black-key" data-key="221" data-note="2Gs" onClick={gis2Play}></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="220" data-note="3A" onClick={a2Play}></span>
                        <span className="black-key" data-key="13" data-note="3As" onClick={b2Play}></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="37" data-note="3B" onClick={h2Play}></span>
                    </li>
                </ul>
            </div>
        );
    }
}

class RightSide extends React.Component {
    render() {
        return (
            <div className="huge-window">
                <Logo/>
                <Mixer/>
                <MySong/>
                <Recorder/>


            </div>
        );
    }
}

class Mixer extends React.Component{
    render() {
        return (
            <div className="mixer">
                <div className="vinyl-section">
                <VinylLeft/>
                <VinylRight/>
                </div>
                <div className="scroll-section">
                <ScrollBar/>
                <ScrollBar/>
                <ScrollBar/>
                </div>
            </div>
        );
    }
}

class VinylLeft extends React.Component{
    render() {
        return (
            <div className="vinyl-box-left">
            <div className="vinyl-left">
                <div className="vinyl-inside"></div>
            </div>
            </div>
        );
    }
}

class VinylRight extends React.Component{
    render() {
        return (
            <div className="vinyl-box-right">
            <div className="vinyl-right">
                <div className="vinyl-inside"></div>
            </div>
            </div>
        );
    }
}

class ScrollBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            speed: 1000
        }
    }
    render() {
        return (

            <div className="vinyl-settings">
                <input type="range" min="0" max="50" />
            </div>
        );
    }
}

class Logo extends React.Component{
    render() {
        return (
            <div className="logo">

            </div>
        );
    }
}

class MySong extends React.Component{
    constructor(props){
        super(props)

    }
    render() {
        return (
            <div className="my-song">

            </div>
        );
    }
}

class Recorder extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="recorder">
                <RecordSound/>
                <PlaySound/>
                <PauseSound/>
                <StopSound/>
                <PianoSound/>
                <MicSound/>
            </div>
        );
    }
}
class PlaySound extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="play-sound-button"></div>
        );
    }
}
class RecordSound extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="record-sound-button"></div>
        );
    }
}
class PauseSound extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="pause-sound-button"></div>
        );
    }
}
class StopSound extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="stop-sound-button"></div>
        );
    }
}
class PianoSound extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="piano-sound-button"></div>
        );
    }
}
class MicSound extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="mic-sound-button"></div>
        );
    }
}
document.addEventListener('DOMContentLoaded', function() {




    ReactDOM.render(
        <MusicBox/>, document.getElementById('app'));
});
