import ListRestaurants from '../views/pages/list-restaurant.js';
import DetailRestaurants from '../views/pages/detail-restaurants.js';
import Like from '../views/pages/like.js';

const routes = {
  '/': ListRestaurants,
  '/detail/:id': DetailRestaurants,
  '/like': Like,
};

export default routes;
