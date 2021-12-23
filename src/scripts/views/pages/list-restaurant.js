/* eslint-disable max-len */
import restaurantsSource from '../../data/restaurants-source';
import {createRestaurantsItemTemplate} from '../templates/template-creator.js';

const ListRestaurants = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading" align="center">Daftar Restoran</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await restaurantsSource.listRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantsItemTemplate(restaurant);
    });
  },
};

export default ListRestaurants;
