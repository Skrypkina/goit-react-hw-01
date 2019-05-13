import React from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import styles from './Stats.module.css';

const Statss = ({ stats = [], title }) => (
  <section className={styles.statsSection}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(item => (
        <li
          className={styles.item}
          key={item.id}
          style={{ backgroundColor: randomColor() }}
        >
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statss.defaultProps = {
  title: '',
};

Statss.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statss;
