import React from 'react';
import axios from 'axios';
import { useParams ,Link } from 'react-router-dom';
import { useState ,useEffect } from 'react';
function StudentTest(props) {
    let { id} = useParams();
    const [allQuestions , setAllQuestions] = useState([]);

    useEffect(() => {
        async function getAllQuestions(){
            let value = await axios.get(`http://localhost:8080/api/quizz/${id}/questions`);
            setAllQuestions(value.data);
            //console.log(value.data);
        }
        getAllQuestions();
    },[id]);

/////////////////////answer
const [answer,setAnswer] = useState([])
let responses = [];
let  correctAnswer  = [] ;
function onRadioButtonChange(e,index){
    let val = e.target.value;
    responses = answer;
    responses[index]=val;
    setAnswer([...responses]);
}


////////////////submitQuizz
let count = 0;
async function submitTest()
{
    for(let i=0; i<allQuestions.length ;i++)
    {
         correctAnswer.push( allQuestions[i].answer);
    }
     console.log(correctAnswer);
     console.log(responses);
    console.log(count);
     console.log(answer);

    

    let score = 0;
    let total = 0;
    let status = "";

    for(let i=0;i<count;i++){
        if(answer[i] ===correctAnswer[i]){
            console.log(true)
            if (allQuestions[i].levelOfDifficulty === "EASY") {
                score = score + 1;
                total = total + 1;
              }
              if (allQuestions[i].levelOfDifficulty === "MEDIUM") {
                score = score + 2;
                total = total + 2;
              }
              if (allQuestions[i].levelOfDifficulty === "HARD") {
                score = score + 3;
                total = total + 3;
              }
            } else {
              if (allQuestions[i].levelOfDifficulty === "   EASY") {
                total = total + 1;
              }
              if (allQuestions[i].levelOfDifficulty === "MEDIUM") {
                total = total + 2;
              }
              if (allQuestions[i].levelOfDifficulty === "HARD") {
                total = total + 3;
              }
            }
           
    }
 
    if (score >= 0.65 * total) status = "Pass";
    else status = "Fail";
    alert(score);
    alert(status);

}
   
    return (
        <div>
             <div>
        <nav className="navbar navbar-dark bg-info">
        <h3 className="title">Online Assesment Portal</h3>
                        
        </nav></div>
        <div   className='container'>
        <div>
            <br></br>
            <h1 align="center">Answer all the questions</h1>
        </div><br></br>
        {console.log(useParams())}
        {
            allQuestions.map((data , index) => {
                   count++;

                return (
                    <div  className='card m-2' key={index} >
                    <div > <p className="font-weight-bold">{data.question}?</p> </div>
                    <div>
                        <input onChange={(e) => onRadioButtonChange(e,index)} value={data.optionOne}
                          name={index}   type="radio" />
                        <label htmlFor="option1">{data.optionOne}</label>
                    </div>
                    <div>
                        <input onChange={(e) => onRadioButtonChange(e,index)} value={data.optionTwo}
                         name={index} type="radio" />
                        <label htmlFor="option2">{data.optionTwo}</label>
                    </div>
                    <div>
                        <input onChange={(e) => onRadioButtonChange(e,index)} value={data.optionThree}
                         name={index}  type="radio" />
                        <label htmlFor="option3">{data.optionThree}</label>
                    </div>
                    <div>
                        <input onChange={(e) => onRadioButtonChange(e,index)} value={data.optionFour}
                         name={index}  type="radio" />
                        <label htmlFor="option4">{data.optionFour}</label>
                    </div>
                </div>
                );
            })
        }
        <div><button className='btn btn-primary mx-2' onClick={submitTest}>Submit Exam</button>
        <Link to="/StudentQuizz" className="btn btn-danger mx-2">
                Cancel
              </Link></div>
    </div>
    </div>
    );
   
}
export default StudentTest;


