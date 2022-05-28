import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Title = ({ title }) => {
  return <h2 className={s.title}>{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
