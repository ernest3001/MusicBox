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
        return (
            <div>
                <div className="icons">
                    <div className="icon">A</div>
                    <div className="icon">B</div>
                    <div className="icon">C</div>
                    <div className="icon">D</div>
                    <div className="icon">A</div>
                    <div className="icon">B</div>
                    <div className="icon">C</div>
                    <div className="icon">D</div>
                    <div className="icon">A</div>
                    <div className="icon">B</div>
                    <div className="icon">C</div>
                    <div className="icon">D</div>
                    <div className="icon">A</div>
                    <div className="icon">B</div>
                    <div className="icon">C</div>
                    <div className="icon">D</div>
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
            let c1 = document.getElementById("bell");
            c1.load();
            c1.play();
        }
        function d1Play(){
            let d1 = document.getElementById("d");
            d1.load();
            d1.play();
        }









        function g1Play(){
            let g1 = document.getElementById("g1");
            g1.load();
            g1.play();
        }




        return (
            <div className="piano-box">
                <ul className="piano">
                    <li className="key">
                        <span className="white-key" data-key="20" data-note="1C" onClick={c1Play} ></span>
                        <span className="black-key" data-key="81" data-note="1Cs"></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="65" data-note="1D" onClick={d1Play}></span>
                        <span className="black-key" data-key="87" data-note="1Ds"></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="83" data-note="1E"></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="68" data-note="1F"></span>
                        <span className="black-key" data-key="82" data-note="1Fs"></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="70" data-note="1G" onClick={g1Play}></span>
                        <span className="black-key" data-key="84" data-note="1Gs"></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="71" data-note="2A"></span>
                        <span className="black-key" data-key="89" data-note="2As"></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="72" data-note="2B"></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="74" data-note="2C"></span>
                        <span className="black-key" data-key="73" data-note="2Cs"></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="75" data-note="2D"></span>
                        <span className="black-key" data-key="79" data-note="2Ds"></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="76" data-note="2E"></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="186" data-note="2F"></span>
                        <span className="black-key" data-key="219" data-note="2Fs"></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="222" data-note="2G"></span>
                        <span className="black-key" data-key="221" data-note="2Gs"></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="220" data-note="3A"></span>
                        <span className="black-key" data-key="13" data-note="3As"></span>
                    </li>
                    <li className="key">
                        <span className="white-key" data-key="37" data-note="3B"></span>
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
                Her other MuSIC stuff!!!!! :))
                <Mixer/>

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
    render() {
        return (

            <div className="vinyl-settings">
                <input type="range" min="0" max="50" />
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <MusicBox/>, document.getElementById('app'));
});
