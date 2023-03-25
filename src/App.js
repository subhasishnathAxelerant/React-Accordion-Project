import React, { useState } from 'react';
import data from './data.js';
import SingleQuestion from './Question';
function App() {
  // setting up states.
  const [questions, setQuestions] = useState(data);
  // The <main> tag specifies the main content of a document.
  return <main>
    <div className='container'>
      <h3>Questions and Answers</h3>
      <section className='info'>
        {
          // iterate over the list of questions.
          questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}/>;
          })
        }
      </section>
    </div>
  </main>;
}

export default App;
