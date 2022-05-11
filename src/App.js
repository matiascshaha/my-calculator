import './App.css';
import OutputScreen from './components/OutputScreen';
import Title from './components/Title'
import Button from './components/Button'

import { useState } from 'react'

//constant variables
const title = 'Matias Perichon Calculator'

function Calculator() {
  const [outputScreenState,setOutputScreen] = useState({
    question: 'default',
    answer: 'default2'
  })
  
  //on click events
  const handleOnClickEvents = (event) => {
    const value = event.target.innerHTML
    switch(value){
        case '=': {
            setOutputScreen({answer: 'math error'})
            setOutputScreen({question: 'math error'})
            break
        }
        case 'Clear': {
            setOutputScreen({question: ''})
            setOutputScreen({answer: ''})
            break
        }
        case 'Delete': {
            var ques = outputScreenState.question
            ques = ques.slice(0, -1)
            setOutputScreen({question: {ques}})
            break
        }
        default: {
            var ques2 = outputScreenState.question
            ques2 += value
            setOutputScreen({question: ques2})
            break
        }

    }
  }

  return (
    <div className="App">
      <Title title={title}/>
      <OutputScreen state={outputScreenState}/>
      <div>
        <Button text='Clear' hadnler={handleOnClickEvents}></Button>
        <Button text='Delete' handler={handleOnClickEvents}></Button>
        <Button text='' handler={handleOnClickEvents}></Button>
        <Button text='/' handler={handleOnClickEvents}></Button>
      </div>
      {/* <div>
        <Button text='7' state={outputScreenState} setState={setOutputScreen}></Button>
        <Button text='8' state={outputScreenState} setState={setOutputScreen}></Button>
        <Button text='9' state={outputScreenState} setState={setOutputScreen}></Button>
        <Button text='*' state={outputScreenState} setState={setOutputScreen}></Button>
      </div>
      <div>
        <Button text='4' state={outputScreenState} setState={setOutputScreen}></Button>
        <Button text='5' state={outputScreenState} setState={setOutputScreen}></Button>
        <Button text='6' state={outputScreenState} setState={setOutputScreen}></Button>
        <Button text='-' state={outputScreenState} setState={setOutputScreen}></Button>
      </div>
      <div>
        <Button text='1' state={outputScreenState} setState={setOutputScreen}></Button>
        <Button text='2' state={outputScreenState} setState={setOutputScreen}></Button>
        <Button text='3' state={outputScreenState} setState={setOutputScreen}></Button>
        <Button text='+' state={outputScreenState} setState={setOutputScreen}></Button>
      </div>
      <div>
        <Button text='0' state={outputScreenState} setState={setOutputScreen}></Button>
        <Button text='=' state={outputScreenState} setState={setOutputScreen}></Button>
      </div>  */}
    </div>
  );
}



export default Calculator;
