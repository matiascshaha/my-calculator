import OutputScreenRow from "./OutputScreenRow"


const OutputScreen = ({state}) => {
  return (
    <div className="OutputScreen">
        <OutputScreenRow text={state.question}/>
        <OutputScreenRow text={state.answer}/>
    </div>
  )
}

export default OutputScreen