/* eslint-disable max-len */
import UrlParser from '../../routes/url-parser';
import restaurantsSource from '../../data/restaurants-source';
import {createRestaurantsDetailTemplate} from '../templates/template-creator.js';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurants from '../../data/favoriteRestaurants-idb';

const DetailRestaurants = {
  async render() {
    return `
    <div id="restaurantDetail" class="restaurantDetail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#mainContent').focus();
    });

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantsSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurantDetail');
    restaurantContainer.innerHTML = createRestaurantsDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurants,
      restaurant,
    });
  },
};

export default DetailRestaurants;
