//HeaderTestsList.js------------------

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import  "./HeaderTestsList.css";

//import  { ShowCurrentTest } from "../showCurrentTest/ShowCurrentTest.js";


export function HeaderTestsList() {


    console.log('HeaderTestsList -------------');

    let dispatch = useDispatch();  
/*
    const count_questions_test = useSelector((store) => store.count_questions_test);
    let X_setInterval = useSelector((store) => store.X_setInterval);
    let countDownDate_qst = useSelector((store) => store.countDownDate_qst);
    let count_time_test = useSelector((store) => store.count_time_test);
    let countDownDate = useSelector((store) => store.countDownDate);
    let current_question = useSelector((store) => store.current_question);
    let selected_answer = useSelector((store) => store.selected_answer);
    let correct_answer = useSelector((store) => store.correct_answer);
    let currentTest = useSelector((store) => store.currentTest);
    let content_test = useSelector((store) => store.content_test);
    let count_correct_answer = useSelector((store) => store.count_correct_answer);
    let count_time_question = useSelector((store) => store.count_time_question);
*/
    let tests = useSelector((store) => store.tests);
//    console.log('HeaderTestsList count_questions_test=',count_questions_test);
    
    let work2 = [];
    let work3 = '';


//    dispatch({type: 'SET_TESTS', 
//                count_time_question: count_time_question, count_time_test: count_time_test,
//                current_question: current_question, count_correct_answer: count_correct_answer,
//                showHideTest: true
//    });

//    const passNumberTest = e => dispatch({type: 'SET_TESTS', currentTest: e.currentTarget.value});

console.log('HeaderTestsList:------------- tests.length=',tests.length);


    for(let kk = 1; kk <= tests.length; kk++){
            work3 = 'TEST' + kk;
            work2[kk-1] =  (<div id={work3} class="menu_test" 
                                               fontSize="11px" 
                                               value = {kk}
                                               onClick = {() => dispatch({type: 'SET_TESTS', 
                                                            currentTest: kk, showHideTest: true})}
                            >
                                {work3}
                            </div>)
    }
    return work2;

}// end of HeaderTestsList------------

/*                                                
                                                ShowCurrentTest(
                                                kk,
                                                count_questions_test,
                                                X_setInterval,
                                                countDownDate_qst,
                                                count_time_test,
                                                countDownDate,
                                                current_question,
                                                selected_answer,
                                                correct_answer,
                                                tests                                                                      
                                                )}//
*/                                                


/*
                                               onClick={ShowCurrentTest(kk)}>

    for(let kk = 1; kk <= tests.length; kk++){
           work3 = 'TEST' + kk;
//           work4 = "ShowTest(" + kk + "," + count_questions_test + ")";
                work2[kk-1] =  (<div id={work3} class="menu_test" 
                                               fontSize="11px" 
                                               value = {kk}
                                               onClick={(ShowCurrentTest(), passNumberTest)}
                                                >{work3}
                                </div>)
    }






                work2[kk-1] =  <div id={work3} class="menu_test" font-size="11px" onClick="ShowTest(1)">{work3}</div>

import { useSelector } from 'react-redux';

import { useDispatch } from "react-redux";

import { insertAfter } from "insertAfter.js";

import { ShowTest } from "./ShowTest.js";

import { CheckBrowser } from "CheckBrowser.js";


export function ListTestsWrapper() {
console.log('ListTestsWrapper------------------------')  



    const dispatch = useDispatch();   

   
    

    console.log('ListTestsWrapper:  count_questions_test=',count_questions_test);


    let  arr_state_test = Array(count_questions_test);

    for(let i=0; i<count_questions_test; i++) 
    {arr_state_test[i] = true;}

    arr_state_test[0] = false;

    
    let tests = useSelector((store) => store.tests);


        return  (
        <div id="list_tests_wrapper" style="visibility: visible;"> 
            {work2}
        </div>
    )
                work2[kk-1] =  <div id="TEST1" class="menu_test" font-size="11px" onclick="ShowTest(1)">{work3}</div>
*/