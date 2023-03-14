import PropTypes from 'prop-types';
import css from '../Section/section.module.css'

const Section = ({ title, children }) => {
  return (
    
      <div className={css.feedback_block}>
        <h2 className={css.feedback_block__head}>{title}</h2>
        {children}
      </div>
    
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};