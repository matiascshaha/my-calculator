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

  return (
    <div className="App">
      <Title title={title}/>
      <OutputScreen state={outputScreenState}/>
      <div>
        <Button text='Clear' state={outputScreenState} setState={setOutputScreen}></Button>
        <Button text='Delete' state={outputScreenState} setState={setOutputScreen}></Button>
        <Button text='' state={outputScreenState} setState={setOutputScreen}></Button>
        <Button text='/' state={outputScreenState} setState={setOutputScreen}></Button>
      </div>
      <div>
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
      </div> 
    </div>
  );
}



export default Calculator;
