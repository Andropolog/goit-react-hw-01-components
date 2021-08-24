import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticsItem from './statisticsItem/StatisticsItem';

const Statistics = ({ title = '', stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) =>
          <StatisticsItem key={id} label={label} percentage={percentage}/>)}  
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Statistics;