// import React, { useState } from 'react'
// import { QuizData } from '../Data/QuizData'
// import QuizResult from './QuizResult';
// function Quiz() {
//     const [currentQuestion,setCurrentQuestion]=useState(0);
//     const [score,setScore] = useState(0);
//     const [clickedOption,setClickedOption]=useState(0);
//     const [showResult,setShowResult]=useState(false);
    
//     const changeQuestion = ()=>{
//         updateScore();
//         if(currentQuestion< QuizData.length-1){
//             setCurrentQuestion(currentQuestion+1);
//             setClickedOption(0);
//         }else{
//             setShowResult(true)
//         }
//     }
//     const updateScore=()=>{
//         if(clickedOption===QuizData[currentQuestion].answer){
//             setScore(score+1);
//         }
//     }
//     const resetAll=()=>{
//         setShowResult(false);
//         setCurrentQuestion(0);
//         setClickedOption(0);
//         setScore(0);
//     }
//   return (
//     <div>
//         <p className="heading-txt">Quiz APP</p>
//         <div className="container">
//             {showResult ? (
//                 <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
//             ):(
//             <>
//             <div className="question">
//                 <span id="question-number">{currentQuestion+1}. </span>
//                 <span id="question-txt">{QuizData[currentQuestion].question}</span>
//             </div>
//             <div className="option-container">
//                 {QuizData[currentQuestion].options.map((option,i)=>{
//                     return(
//                         <button 
//                         // className="option-btn"
//                         className={`option-btn ${
//                             clickedOption == i+1?"checked":null
//                         }`}
//                         key={i}
//                         onClick={()=>setClickedOption(i+1)}
//                         >
//                         {option}
//                         </button>
//                     )
//                 })}                
//             </div>
//             <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
//             </>)}
//         </div>
//     </div>
//   )
// }

// export default Quiz


// 

import React, { useState } from 'react';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [optionSelected, setOptionSelected] = useState(false); // Add state to track if an option is selected

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
            setOptionSelected(false); // Reset option selected state
        } else {
            setShowResult(true);
        }
    }

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setClickedOption(0);
            setOptionSelected(false); // Reset option selected state
        }
    }

    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }

    const handleOptionClick = (optionIndex) => {
        setClickedOption(optionIndex + 1);
        setOptionSelected(true); // Set option selected state to true
    }

    return (
        <div>
            <p className="heading-txt">Quiz APP</p>
            <div className="container">
                {showResult ? (
                    <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        className={`option-btn ${
                                            clickedOption === i + 1 ? "checked" : null
                                        }`}
                                        key={i}
                                        onClick={() => handleOptionClick(i)} // Call handleOptionClick function
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                        <div>
                            {currentQuestion > 0 && (
                                <input type="button" value="Previous" id="prev-button" onClick={prevQuestion} />
                            )}
                            {/* <div style={{ padding: "0 10px" }} /> */}
                            <input type="button" value="Next" id="next-button" onClick={changeQuestion} disabled={!optionSelected} /> 
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Quiz;
