//ShowCurrentTest.js--------------------------

import React from "react";

import './ShowCurrentTest.css';

import {ShowCurrentTestCont} from "../showCurrentTestCont/ShowCurrentTestCont.js";


import { useSelector, useDispatch } from 'react-redux';


export function ShowCurrentTest(){   //show curent test 

    const count_questions_test = useSelector((store) => store.count_questions_test);
    let X_setInterval = useSelector((store) => store.X_setInterval);
    let countDownDate_qst = useSelector((store) => store.countDownDate_qst);
    let countDownDate = useSelector((store) => store.countDownDate);
    let current_question = useSelector((store) => store.current_question);
    let selected_answer = useSelector((store) => store.selected_answer);
    let correct_answer = useSelector((store) => store.correct_answer);
    let tests = useSelector((store) => store.tests);
    let currentTest = useSelector((store) => store.currentTest);
    let content_test = useSelector((store) => store.content_test);
    let count_correct_answer = useSelector((store) => store.count_correct_answer);
    let count_time_question = useSelector((store) => store.count_time_question);
    let count_time_test = useSelector((store) => store.count_time_test);


  console.log('ShowCurrentTest:------------- count_questions_test=',count_questions_test);   
    
    const dispatch = useDispatch();   

//    console.log('ShowCurrentTest:------------- X_setInterval=',X_setInterval); 

    let  arr_state_test = Array(count_questions_test);
    let  arr_state_green_red = Array(count_questions_test);
    let  arr_state_count_time_test = Array(count_questions_test).fill('00:00');
    let  arr_state_count_time_question = Array(count_questions_test).fill('00:00');

    for(let i=0; i<count_questions_test; i++) {
      arr_state_test[i] = true;
      arr_state_green_red[i] = [-1,-1]
    }
    arr_state_test[0] = false; 

//    handleChange();

/*
    dispatch({type: 'SET_TESTS', state_tests: arr_state_test, state_edit: false, 
      state_green_red: arr_state_green_red, state_count_time_test: arr_state_count_time_test,
      state_count_time_question: arr_state_count_time_question, list_tests_wrapper: false
    });
*/    
//console.log('ShowCurrentTest:------------- after 1 dispatch'); 


  // handleChange - choosing an answer for the question  -------
  function handleChange(evt){  //evt.par1 - number of the current question; evt.par2 - selected answer.
    
console.log('ShowCurrentTest: handleChange:  evt=',evt);    

    if(arr_state_test[evt.par1] === false) {
      let arr_state_test_new = arr_state_test.slice();
      let arr_state_green_red_new = arr_state_green_red.slice();      
      let li_number = evt.par2 - 1; //selected answer
      
      current_question = evt.par1;    // number of the current question

      selected_answer = li_number;

      let id_input = "id" + String(current_question*10 + li_number);
      correct_answer = Number(tests[currentTest][current_question].C_A) - 1; 
      arr_state_green_red_new[current_question] = [li_number, correct_answer];

      let id_correct =  "id" + String(current_question*10 + correct_answer);//(correct_answer - 1));

      if(id_input === id_correct){
        count_correct_answer[current_question] = count_correct_answer[current_question] + 1; 	
      }

      for(let i=0; i<count_questions_test; i++) {arr_state_test_new[i] = true;} 
      for(let i=0; i<count_questions_test; i++){
        if(i === current_question){
          if(i !== count_questions_test-1){
            arr_state_test_new[i+1] = false;  
          } 
        }

      }
      current_question++; 
      let ID_work = 'ID'+ current_question + currentTest*100 + '_time_test';
      let ID_next = ('ID'+ (current_question + 1)) + currentTest*100 +  '_time_question';


      // sum of all test time 


      startWatch4(ID_next, ID_work); // start time for 0-th question
           
    }// if
    
  } //--- end handleChange        


  // startWatch4 -  timer of common time for the choosing question; insert in ID_TIME element
  //    ID_time_test - ID for question time
  function startWatch4(ID_TIME, ID_time_test) {  //-----------------------
  // Update the count down every 1 second
    let work;
//    let count_time_question = [];

    clearInterval(X_setInterval);

    const time_work =  current_question - 1;
//console.log('ShowCurrentTest: startWatch4:  time_work=',time_work);  

    let time_work2 = time_work - 1;
    if(time_work === 0) count_time_test[time_work] =  '00:00'
    else   count_time_test[time_work] = count_time_test[time_work2];

    X_setInterval = setInterval(function() {

    // Get today's date and time
      let now = new Date().getTime();

    // Find the distance between now and the count down date
      let distance = now - countDownDate_qst;

    // Time calculations for days, hours, minutes and seconds
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
  //  document.getElementById(ID_TIME).innerHTML = days + "d " + hours + "h "
  //  + minutes + "m " + seconds + "s ";
  //console.log('1 ID_TIME ==== ', ID_TIME,  '   minutes = ' + minutes, '   seconds = ' + seconds);	

//      work = ID_TIME_content;  //work = document.getElementById(ID_TIME);

      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }  

      count_time_question[time_work] = minutes + ":" + seconds;
      let work_count_time_question = minutes + ":" + seconds;
  
//      if(work !== null) {
//        work = work_count_time_question;  //global.count_time_question[time_work]; 
//      }
  
    // If the count down is finished, write some text
      if(distance < 0) {
        clearInterval(X_setInterval);
      }
  
//      work = document.getElementById(ID_time_test);
    
      count_time_test[time_work] = sumMinSec(count_time_test[time_work],'00:01');
  
//      if(ID_time_test_content !== null) {
//        work = count_time_test[time_work];  //global.count_time_test[current_question];
//      }
console.log('ShowCurrentTest: count_time_question=',count_time_question, '  count_time_test=',count_time_test)

    dispatch({type: 'SET_TESTS', 
              count_time_question: count_time_question, 
              count_time_test: count_time_test
    });  
    
    }, 1000);
//  });   


    // sum minutes and seconds of all test; return -  minutes:seconds
    function sumMinSec(count_time_test_work, count_time_quest) {
      let pos=-1, minutes=0, seconds=0;
//console.log('1 count_time_test_work=',count_time_test_work,'  count_time_quest=',count_time_quest);

      pos = count_time_quest.indexOf(':');
      if (pos > 0) {
        minutes = Number(count_time_quest.slice(0, pos));
        seconds = Number(count_time_quest.slice(pos+1));
      } else {
        minutes = 0;
        seconds = 0;
      }
    //console.log('2 count_time_test_work=',count_time_test_work,'  count_time_quest=',count_time_quest) 
   
      pos = count_time_test_work.indexOf(':');
      if (pos > 0) {
        minutes += Number(count_time_test_work.slice(0, pos));
        seconds += Number(count_time_test_work.slice(pos+1));
      } 
    
      if (seconds >= 60) {
        minutes += Math.floor(seconds / 60);
        seconds = seconds - (Math.floor(seconds / 60) * 60);
      }

      if (minutes < 10) {
        minutes = '0' + minutes;
      }

      if (seconds < 10) {
        seconds = '0' + seconds;
      }
//console.log('minutes=',minutes,'  seconds=',seconds)
      return minutes + ':' + seconds;
      
    } //--- end of sumMinSec

  }//---end of startWatch4

    let j = 0;
    let si;
    let ID_time; // ID for time_test
    let ID_time_qst; // ID for time_tests_qst
    let ID_work;

    // show  TESTS
    countDownDate = new Date().getTime(); // start time for the chosing test
    countDownDate_qst = new Date().getTime(); // start time for the chosing question

    let element = [];

    for(let ii=0; ii < count_questions_test; ii++) { // show all questions for the test
      ID_work = 'ID'+ ii + currentTest*100 +  '_question_cont';  
      if (arr_state_test[ii]) {
        // hide all questions except 0
        element[ii] = (
          <ShowCurrentTestCont key={ID_work} id={ID_work} className="question_cont" style={{opacity: ".5"}} 
                              nQst={ii} arr_state_green_red_props={arr_state_green_red} chooseAnswer= {handleChange} />
        )
      } else  element[ii] = (
        <ShowCurrentTestCont key={ID_work} id={ID_work} className="question_cont" style={{opacity: "1"}} 
        nQst={ii} arr_state_green_red_props={arr_state_green_red} chooseAnswer= {handleChange} />
      )
    }  // for

 
    countDownDate_qst = new Date().getTime(); // start time for the chosing question

    ID_time = 'ID'+ current_question + currentTest*100 + '_time_question';
    ID_time_qst = 'ID'+ current_question + currentTest*100 + '_time_test';

    startWatch4(ID_time, ID_time_qst); // start time for 0-th question  
           

    return element;

} //--- end of ShowCurrentTest