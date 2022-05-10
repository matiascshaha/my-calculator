import PropTypes from 'prop-types'

const Button = ({text,state,setState}) => {

    //on click events
    const renderOnClickEvents = (text,state,setState) => {
        switch(text){
            case '=': {
                setState({answer: 'math error'})
                setState({question: 'math error'})
                break
            }
            case 'Clear': {
                setState({question: 'ff'})
                break
            }
            case 'Delete': {
                setState({question: 'ff'})
                break
            }
            default: {
                
                break
            }

        }
    }

    return (
        <div className="Button">
            <button type='button' onClick={renderOnClickEvents({text}, {state}, {setState})}>{text}</button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string

}

export default Button