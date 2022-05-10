

const OutputScreenRow = ({text}) => {
  return (
    <div className="OutputScreenRow">
        <input type='text' value={text} readOnly></input>
    </div>
  )
}

export default OutputScreenRow