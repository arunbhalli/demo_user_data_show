import React from 'react';
import ReactDOM from 'react-dom';
//user information//
const user = {
  name: 'Chris moris',
  location: 'Stockholm',
  foodType: 'Vegetarian',
  age: 25,
  avatar:
    'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
};
function App() {
  return (
    <div>
     <img data-cy='avatar' src= 'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'></img>
     <h1 data-cy='name'>User Name:{user.name}</h1>
     <h1 data-cy='age'>Users age.{user.age}</h1>
     <h1 data-cy='location'>Users Location:{user.location}</h1>
     <h1 data-cy='foodType'>Food FoodType:{user.foodType}</h1>
    </div>
  );
}

export default App;
