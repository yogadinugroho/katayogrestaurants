/* eslint-disable max-len */
import FavoriteRestaurants from '../src/scripts/data/favoriteRestaurants-idb';

import {itActsAsFavoriteRestaurantModel} from './contract/FavoriteRestaurantContract';


describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurants.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurants.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurants);
});
