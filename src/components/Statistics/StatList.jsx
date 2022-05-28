import Statistics from './Statistics';
import Title from './Title';
import s from './Statistics.module.css';

const StatList = ({ data, title = 'Upload stats' }) => {
  return (
    <section className={s.statistics}>
      <Title title={title} />
      <ul className={s.list}>
        {data.map(el => (
          <Statistics key={el.id} label={el.label} percent={el.percentage} />
        ))}
      </ul>
    </section>
  );
};

export default StatList;
