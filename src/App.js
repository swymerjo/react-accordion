import './App.css';
import Data from "./Data";
import React, { useState } from "react";
import Questions from './Question';

function App() {
  const [questions, setQuestions] = useState(Data);

  return (
    <main>
<div className='container'>
  <h3>questions and answers about login</h3>
  <section className='info'>
    {questions.map((question)=>{
    return <Questions key={question.id} {...question}/> 
    })}
    </section>
</div>
    </main>
  );
}

export default App;
