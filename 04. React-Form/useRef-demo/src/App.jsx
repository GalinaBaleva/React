import {  useRef } from 'react'
import './App.css'
import FormComponent from './components/FormComponent';

function App() {
  const formRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    console.log(Object.fromEntries(formData.entries()));
  }

  const handleButtonClick = () => {
    if(formRef.current){
      formRef.current.requestSubmit(); // This method triggers the form's submit event
    }
  }


  return (
    <div>
      <FormComponent ref={formRef} onSubmit={submitHandler}/>
      <button type='button' onClick={handleButtonClick}>
        Submit
      </button>
    </div>
  )
}

export default App
