/* eslint-disable max-len */
import FavoriteRestaurants from '../../data/favoriteRestaurants-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-movie-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#mainContent').focus();
    });

    new FavoriteRestaurantShowPresenter({view, favoriteRestaurants: FavoriteRestaurants});
    new FavoriteRestaurantSearchPresenter({view, favoriteRestaurants: FavoriteRestaurants});
  },
};

export default Like;
