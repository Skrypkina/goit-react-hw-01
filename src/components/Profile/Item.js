import React from 'react';
import PropTypes from 'prop-types';

const statsStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  backgroundColor: 'aliceblue',
  borderRadius: 6,
  width: 250,
  height: 60,
  position: 'absolute',
  left: 0,
  right: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  top: 350,
};

const statsItem = {
  display: 'flex',
  flexDirection: 'column',
  width: 83,
  border: '1px solid lightgrey',
  boxShadow: '1px #808080',
  padding: 10,
};

const statsLabel = {
  color: 'grey',
  fontFamily: 'Arial',
  fontSize: 13,
  textAlign: 'center',
  marginBottom: 5,
};

const statsQuantity = {
  color: 'black',
  fontFamily: 'Arial',
  textAlign: 'center',
  fontSize: 15,
  fontWeight: 'bold',
};

const Item = ({ followers = 0, views = 0, likes = 0 }) => (
  <ul className="stats" style={{ ...statsStyle }}>
    <li style={{ ...statsItem }}>
      <span className="label" style={{ ...statsLabel }}>
        Followers
      </span>
      <span className="quantity" style={{ ...statsQuantity }}>
        {followers}
      </span>
    </li>

    <li style={{ ...statsItem }}>
      <span className="label" style={{ ...statsLabel }}>
        Views
      </span>
      <span className="quantity" style={{ ...statsQuantity }}>
        {views}
      </span>
    </li>

    <li style={{ ...statsItem }}>
      <span className="label" style={{ ...statsLabel }}>
        Likes
      </span>
      <span className="quantity" style={{ ...statsQuantity }}>
        {likes}
      </span>
    </li>
  </ul>
);

Item.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Item;
