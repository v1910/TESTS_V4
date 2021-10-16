//ShowCurrentTestCont.js--------------------------

import React from "react";

import {QuestionTest} from "../questionTest/QuestionTest.js";

import {AnswerTest} from "../answerTest/AnswerTest.js";

import {FooterQuestion} from "../footerQuestion/FooterQuestion.js";

//import { useSelector, useDispatch } from 'react-redux';


export function ShowCurrentTestCont(props){   //show a test question   
//console.log('AnswerTest:  props.func=',props.choosAnswer);     
    return (    
        <div key={props.key} id={props.id} className="question_cont" style={props.style}>
            <QuestionTest numberQuestion={props.nQst} />
            <AnswerTest numberQuestion={props.nQst} arr_state_green_red_props={props.arr_state_green_red_props} 
                        func={props.chooseAnswer} />
            <FooterQuestion numberQuestion={props.nQst} />
        </div>
    )
  
} //--- end of ShowCurrentTest
