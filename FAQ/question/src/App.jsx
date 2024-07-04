import { useState } from 'react'
import './App.css'

const FaqItem = ({question,answer}) => {
  const [show, setShow] = useState(false);

  const toggeleShow = () => {
    setShow(!show);
  }

  return (
    <div className={`faq-item ${show ? "active" : " "}`}>
      <div className="faq-item-header" onClick={toggeleShow}>
        {question}
      </div>
      <div className="faq-item-body">
        <div className='bodyContent'>
          {answer}
          </div>
      </div>
    </div>
  );
};



const FaqAccordion = ({data}) => {
  return (
    <div className='container'>
      <h2>FAQs</h2>
     {data .map((item)=>(
      <FaqItem key={item.id} question={item.question} answer={item.answer} />
     ))}

    </div>
  );
};


const data=[
  { id: 1, question: "What is React?", answer: "React is a front-end JavaScript Library for building user interfaces or UI componentes." },
  { id: 2, question: "What are the benefits of React?", answer: "Some of the benefits of React are: it is fast, scalable, modular, easy to debug, and supports server-side rendering." },
  { id: 3, question: "What are the main concepts of React?", answer: "Some of the main concepts of React are: components, props, state, hooks, Lifecycle methods, and JSX." },
  ];

function App() {


  return (
    <>
      <FaqAccordion  data={data}/>
    </>
  )
}

export default App
