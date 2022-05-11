import PropTypes from 'prop-types'

const Button = ({text,setState,inp}) => {

    return (
        <div className="Button">
            <button type='button' onClick={onClickHandler({inp})}>{text}</button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string

}

export default Button