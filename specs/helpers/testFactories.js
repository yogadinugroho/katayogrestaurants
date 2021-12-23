/* eslint-disable max-len */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurants from '../../src/scripts/data/favoriteRestaurants-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurants,
    restaurant,
  });
};

export {createLikeButtonPresenterWithRestaurant};
