//QuestionTest.js------Form one test question

import React from "react";
import { useSelector } from 'react-redux';

import './QuestionTest.css';

//import ReactDOM from 'react-dom';

//QuestionTest -  add <ui class="question_test"> 
export function QuestionTest(props) {
    let currentTest = useSelector((store) => store.currentTest); 
    let tests = useSelector((store) => store.tests);
    let numberQuest = props.numberQuestion;
//console.log('props.numberQuestion=',props.numberQuestion);
//console.log('numberQuest=',numberQuest);    
//console.log('global.currentTest=',global.currentTest);    
    let question = tests[currentTest][numberQuest].Q;
    let ID_work = 'ID'+ numberQuest + currentTest*100 +  '_question_test'; 
    return <div id={ID_work} className="question_test">{question}</div>
//  }
}