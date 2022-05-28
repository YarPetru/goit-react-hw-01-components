import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = props => {
  const { label, percent } = props;
  return (
    <li className={s.item}>
      <span className={s.label}>{label + ' - '}</span>
      <span className={s.percentage}>{percent + '%'}</span>
    </li>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Statistics;
