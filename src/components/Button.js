import PropTypes from 'prop-types'

const Button = ({text,handler}) => {

    return (
        <div className="Button">
            <button type='button' onClick={handler}>{text}</button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string

}

export default Button