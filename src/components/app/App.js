//App.js------------------

import React from 'react';

import {Header} from '../header/Header.js';

import {Tests} from '../tests/Tests.js';

import {Words} from '../words/Words.js';

import {Listen} from '../listen/Listen.js';

import {Phrases} from '../phrases/Phrases.js';

import {Jokes} from '../jokes/Jokes.js';

import {Footer} from '../footer/Footer.js';

import './App.css';

import Image from "./London.jpg";

//import {HeaderMenuTestsCont2} from "HeaderMenuTestsCont2.js";

//import {ListTestsWrapper} from "ListTestsWrapper.js";

//import {ListWordsWrapper} from "ListWordsWrapper.js";

function App() {
console.log("App: -----------------");
    return (
    <>
      <div id="London_bgr" >         
        <Header />
      </div>
      <Tests />
    </>      
    )

}
export default App;

/*

const london_style = {
  pointerEvents: 'none',
  position: 'absolute',
  backgroundRepeat: 'no-repeat',
  minWidth: '100%',
  minHeight: '100%',
  backgroundImage: 'url(./London.jpg)'
}
      <div id="london2_bgr" style={london_style}> 

const london_style = {
  position: 'relative',
  backgroundImage: 'url(./London.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPositionX: '50%',
  color: 'white'
}

      <div id="london_bgr" style={london_style}> 
    return (

      <div id="london_bgr" style={{backgroundImage: 'url(${Image})'}}> 
                 
        <Header />
        <Tests />
        <Words />
        <Listen />
        <Phrases />
        <Jokes />
        <Footer />  

      </div>
    )

<>
      </>

div id="london_bgr" style={{backgroundImage: 'url("./London,jpg")'}}>       
<div id="london_bgr" style={STYLE.backgroundImage}> 

   return (

      <div id="london_bgr" style={{position: relative 
        background-image: url(&quot;./London.jpg&quot;); 
        background-repeat: no-repeat; background-size: cover; 
        background-position-x: 50%; color: white;}}>      

        <HeaderMenuTestsCont2 f2={ListTestsWrapper} />
        <HeaderMenuTestsCont2 f2={ListWordsWrapper} />
*/        