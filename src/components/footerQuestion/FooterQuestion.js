//footerQuestion.js: Form footer for one question with answer variants 

import React from "react";

import { useSelector, useDispatch } from 'react-redux';

import './FooterQuestion.css';

//import ReactDOM from 'react-dom';


export function FooterQuestion(props)  {

  let count_questions_test = useSelector((store) => store.count_questions_test);
  let currentTest = useSelector((store) => store.currentTest);
  let state_reply; // = useSelector((store) => store.state_reply);
  let state_button_close = useSelector((store) => store.state_button_close);
  let cAnswers = useSelector((store) => store.cAnswers);
  let count_correct_answer = useSelector((store) => store.count_correct_answer);  
  let tests = useSelector((store) => store.tests);  
  let count_time_question = useSelector((store) => store.count_time_question); // array of question time
  let count_time_test = useSelector((store) => store.count_time_test);   // array of all test_time
  
  
  state_reply = Array(count_questions_test).fill('');
  state_button_close = Array(count_questions_test).fill('0');
  
  const dispatch = useDispatch();   

  // why - show grammer rules (n_reply - key in correct_answers_tests.js) for correct answer 
  //      ID - last div in this question = #ID0200_space_question (for first question)
  //      ID_cont - ID container
  function why(n_reply, ID, ID_cont, e) {
    let arr_state_button_close_new=[];
    let arr_state_reply_new=[];
//    console.log('n_reply=',  n_reply, 'ID=', ID, 'ID_cont=',ID_cont);  
//console.log(' state.state_reply=', state.state_reply)
//console.log(' state_button_close=', state.state_button_close)
    for(let i = 0; i < count_questions_test; i++){
      arr_state_reply_new[i] = state_reply[i];
      arr_state_button_close_new[i] = state_button_close[i];
    }
//    let arr_state_button_close_new =  state_button_close.slice(props.count_questions_test);
    arr_state_reply_new[props.numberQuestion] = cAnswers[n_reply];
    arr_state_button_close_new[props.numberQuestion] = '1'; //show button
    //console.log('cAnswers[n_reply]=',  cAnswers[n_reply]);
//     setState({state_reply: arr_state_reply_new,
//                   state_button_close: arr_state_button_close_new
//    });
    dispatch({type: 'SET_TESTS', state_reply: arr_state_reply_new,
                    state_button_close: arr_state_button_close_new
                  });
  }//---end of why
    
  function answer_close(e){  // delete the answer for WHY
    let  arr_state_reply_new = [];
    let arr_state_button_close_new = [];
    
    for(let i = 0; i < count_questions_test; i++){
      arr_state_reply_new[i] = '';
      arr_state_button_close_new[i] = '0';
    }
//console.log('FooterQuestion: arr_state_reply_new=',arr_state_reply_new);
//console.log('FooterQuestion: arr_state_button_close_new=',arr_state_button_close_new);

//     setState({state_reply: arr_state_reply_new,
//                   state_button_close: arr_state_button_close_new
//    });

    dispatch({type: 'SET_TESTS', state_reply: arr_state_reply_new,
                    state_button_close: arr_state_button_close_new,
                    showHideTest: true, list_tests_wrapper: false,
                  });

  } //---end of answer_close

//console.log('FooterQuestion:  props.numberQuestion=', props.numberQuestion);
    const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    // button WHY
    let ID_work = 'ID'+  props.numberQuestion + currentTest*100 +  '_footer_question';
    let ID_work2 = 'ID'+  props.numberQuestion + currentTest*100 +  '_button_test';
    let ID_cont = 'ID'+  props.numberQuestion + currentTest*100 +  '_question_cont';
    let n_reply = tests[currentTest][props.numberQuestion].R;
    let ID_work3 = 'ID'+  props.numberQuestion + currentTest*100 + '_space_question';
    let reply_button = '';
    let ID_work4 = 'ID'+  props.numberQuestion + currentTest*100 + '_button_answer_close';
    
    // add <div class="number_question">
    let ID_work5 = 'ID'+  props.numberQuestion + currentTest*100 +  '_number_question';
    let innerHTML_work5 =  ( props.numberQuestion + 1) + '/' + count_questions_test;
    let style_width_work5; 
    if( props.numberQuestion < 9)  style_width_work5 = {width: '26px'}
    else style_width_work5 = {width: '35px'};
//console.log('props.count_correct_answer=',props.count_correct_answer);
    // add <div class="correct_answers">
    let ID_work6 = 'ID'+  props.numberQuestion + currentTest*100 +  '_correct_answers';
    let innerHTML_work6;
//console.log('props.count_questions_test=',props.count_questions_test)
//console.log('i=',i)
//console.log(' state.state_count_correct_answer[i]=', state.state_count_correct_answer[i])      
//console.log('props.count_correct_answer=',props.count_correct_answer[ props.numberQuestion],'   props.numberQuestion=', props.numberQuestion)    
    let sum_count_correct_answer = 0;
    for(let i = 0; i <=  props.numberQuestion; i++){
      sum_count_correct_answer = sum_count_correct_answer + count_correct_answer[i];
    }
    let si =  props.numberQuestion.toString();
		if(count_correct_answer[ props.numberQuestion] >= 0) {
			switch (si.length) {
				case 1:
					innerHTML_work6  =  '/' + sum_count_correct_answer; 		
					break;
				case 2:
					innerHTML_work6  = '/\u00A0' + sum_count_correct_answer; 		
					break;
				case 3:
					innerHTML_work6  = '/\u00A0' + sum_count_correct_answer; 		
					break;				
				default:
					innerHTML_work6  = '/\u00A0' + sum_count_correct_answer; 		
			}
		}
    else 	innerHTML_work6  = '\u00A0';

    // add <div class="time_question">
    let ID_time_qst = 'ID'+  props.numberQuestion + currentTest*100 +  '_time_question';

    let innerHTML_work7  = count_time_question[props.numberQuestion];

//console.log('props.numberQuestion=',props.numberQuestion)
//console.log('innerHTML_work7=',innerHTML_work7)
    // add <div class="time_test">
    let ID_time_work8 = 'ID'+  props.numberQuestion + currentTest*100 + '_time_test';
  
    let innerHTML_work8  = count_time_test[ props.numberQuestion];
    
    if( state_button_close[ props.numberQuestion] === '1'){ //show button Close
      reply_button = (<div className="button_answer_close" id={ID_work4} onClick={(e) =>  answer_close(e)}>{"Close"}</div>);
    }
  
//console.log('n_reply=',n_reply,'   count_time_question=', count_time_question,'  count_time_test=',count_time_test);

    return (
      <>
        <div className="footer_question" id={ID_work}>
          <div className="button_test"  id={ID_work2} onClick={(e) =>  why(n_reply, ID_work2, ID_cont, e)}>{"WHY"}</div>
          <div className="number_question" id={ID_work5} style={style_width_work5}>{innerHTML_work5}</div>
          <div className="correct_answers" id={ID_work6}>{innerHTML_work6}</div>
          <div className="time_question" id={ID_time_qst}>{count_time_question[props.numberQuestion]}</div>  
          <div className="time_test" id={ID_time_work8}>{count_time_test[currentTest]}</div>
        </div>
        <div className="space_question" id={ID_work3}>
          {renderHTML( state_reply[ props.numberQuestion])}
          {reply_button}
        </div>
      </>
    )

} //---end of FooterQuestion
