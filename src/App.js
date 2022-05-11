import './App.css';
import OutputScreen from './components/OutputScreen';
import Title from './components/Title'
import Button from './components/Button'

import { useState } from 'react'

//constant variables
const title = 'Matias Perichon Calculator'

function Calculator() {
  const [outputScreenState,setOutputScreen] = useState({
    question: '',
    answer: '',
  })
  
  //on click events
  const handleOnClickEvents = (event) => {
    const value = event.target.innerHTML
    switch(value){
        case '=': {
            if( outputScreenState.question !== '' ) 
            {
              var ans = ""
              try {
                ans = eval(outputScreenState.question)
                setOutputScreen({answer:ans,question:outputScreenState.question})
              }
              catch {
                setOutputScreen({answer:'Math Error',question:outputScreenState.question})
              }

              if (ans===undefined)
                  setOutputScreen({answer: "Math Error",question:outputScreenState.question})
 
          
            }

            break
        }
        case 'Clear': {
            setOutputScreen({question:'',answer:''})
            break
        }
        case 'Delete': {
          var str = outputScreenState.question
          str = str.slice(0,str.length-1)
          setOutputScreen({question: str})
          break
        }
        default: {
            setOutputScreen({question: outputScreenState.question=String(outputScreenState.question) + value})
            break
        }

    }
  }

  return (
    <div className="App">
      <Title title={title}/>
      <OutputScreen state={outputScreenState}/>
      <div>
        <Button text='Clear' handler={handleOnClickEvents} />
        <Button text='Delete' handler={handleOnClickEvents} />
        <Button text='.' handler={handleOnClickEvents} />
        <Button text='/' handler={handleOnClickEvents} />
      </div>
      <div>
        <Button text='7' handler={handleOnClickEvents}/>
        <Button text='8' handler={handleOnClickEvents}/>
        <Button text='9' handler={handleOnClickEvents}/>
        <Button text='*' handler={handleOnClickEvents}/>
      </div>
      <div>
        <Button text='4' handler={handleOnClickEvents}/>
        <Button text='5' handler={handleOnClickEvents}/>
        <Button text='6' handler={handleOnClickEvents}/>
        <Button text='-' handler={handleOnClickEvents}/>
      </div>
      <div>
        <Button text='1' handler={handleOnClickEvents}/>
        <Button text='2' handler={handleOnClickEvents}/>
        <Button text='3' handler={handleOnClickEvents}/>
        <Button text='+' handler={handleOnClickEvents}/>
      </div>
      <div>
        <Button text='0' handler={handleOnClickEvents}/>
        <Button text='=' handler={handleOnClickEvents}/>
      </div> 
    </div>
  );
}



export default Calculator;
