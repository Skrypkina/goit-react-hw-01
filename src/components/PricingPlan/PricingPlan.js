import React from 'react';
import PropTypes from 'prop-types';
import Shortid from 'shortid';
import PricingItem from './PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items = [] }) => (
  <ul className={styles.pricingPlan}>
    {items.map(item => (
      <li className={styles.item} key={Shortid.generate()}>
        <PricingItem {...item} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PricingPlan;
