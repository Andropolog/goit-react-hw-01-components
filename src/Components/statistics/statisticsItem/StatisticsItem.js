import randomColor from './RandomColor';
import styles from '../Statistics.module.css';
import PropTypes from 'prop-types';

const StatisticsItem = ({ id, label, percentage }) => {
    return (
         <li className={styles.item} key={id} style={{backgroundColor: randomColor()}}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
    );
}

StatisticsItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;