import PropTypes from 'prop-types';
import css from '../Button/button.module.css'

const FeedbackCounter = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.feedback_block__buttons}>
            {options.map(option => (
                <button type="button"
                        className={css.feedback_block__btn}
                        onClick={() => onLeaveFeedback(option)}
                        key={option}>
                        {option}
                </button>
            ))}
        </div>
    )
} 

export default FeedbackCounter;

FeedbackCounter.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func
}