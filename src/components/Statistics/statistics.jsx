import PropTypes from 'prop-types';
import css from '../Statistics/statistics.module.css'

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => (
    <>    
    <ul className={css.feedback_block__result}>
        <li>Good: {good}</li>
        <li>Netural: {neutral}</li>
        <li>Bad: {bad}</li>
    </ul>
    <ul className={css.feedback_block__result}>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage} %</li>
    </ul>    
    </>
)

export default Statistics

Statistics.prototype = {
    good: PropTypes.string,
    bad: PropTypes.string,
    neutral: PropTypes.string,
    total: PropTypes.string,
    positivePercentage: PropTypes.string
}