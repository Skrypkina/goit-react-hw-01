import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";

// Компонент должен иметь один проп user, в котором он ожидает объект с информацией о пользователе:

// name — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — url на изображение
// stats — объект с информацией об активности
// Компонент должен создавать DOM элемент следующей структуры.

// <div class="profile">
//   <div class="description">
//     <img
//       src="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
//       alt="user avatar"
//       class="avatar"
//     />
//     <p class="name">Petra Marica</p>
//     <p class="tag">@pmarica</p>
//     <p class="location">Salvador, Brasil</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">2000</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">3000</span>
//     </li>
//   </ul>
// </div>

const Profile = ({ avatar, name, tag, location, stats = {} }) => (
  <div class="profile">
    <div className="description">
      <img src={avatar} alt="user avatar" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
    <Stats
      followers={stats.followers}
      views={stats.views}
      likes={stats.likes}
    />
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default Profile;
