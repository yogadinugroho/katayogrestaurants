/* eslint-disable max-len */
import CONFIG from '../../../globals/config';

const createRestaurantsDetailTemplate = (restaurants) => `
    <h2 align="center" class="restaurantDetail__title">${restaurants.name || '-'}</h2>
    <img class="restaurantDetail__poster" src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurants.pictureId}" alt="${restaurants.name}" />
        <h3 align="center">Informasi Restoran</h3>
    <div class="customer__review">
        <h4>Kota</h4>
        <div class="customer__overview">
            <p>${restaurants.city}</p>
        </div>
    </div>
    <div class="customer__review">
        <h4>Alamat</h4>
        <div class="customer__overview">
        <p>${restaurants.address}</p>
        </div>
    </div>
    <div class="customer__review">
        <h4>Rating</h4>
        <div class="customer__overview">
            <p>${restaurants.rating}</p>
        </div>
    </div>   
    <div class="customer__review">
    <h3>Deskripsi Restoran</h3>
        <div class="customer__overview">
            <p align="justify">${restaurants.description}</p>
        </div>
    </div>
    <div class="customer__review">
        <h4>Menu Makanan</h4>
        <div class="customer__overview">
            <p>${restaurants.menus.foods.map((makanan) => makanan.name).join(', ')}</p>
        </div>
        <h4>Menu Minuman</h4>
        <div class="customer__overview">
            <p>${restaurants.menus.drinks.map((minuman) => minuman.name).join(', ')}</p>
        </div>    
    </div>
    </div>
    <div class="customer__review">
        <h4>Customer Review</h4>
        ${restaurants.customerReviews.map((review) => `
        <div class="customer__overview">
            <p>${review.review}</p>
        </div>
    </div>
    `).join('')}
`;

const createRestaurantsItemTemplate = (restaurants) => `
    <div class="restaurant-item">
        <div class="restaurant-item__header">
            <img class="restaurant-item__header__poster lazyload" alt="${restaurants.name || '-'}"
            data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurants.pictureId}">
            <div class="restaurant-item__header__rating">
                <p>⭐️<span class="restaurant-item__header__rating__score">${restaurants.rating}</span></p>
            </div>
        </div>
        <div class="restaurant-item__content">
            <h3 class="restaurant__title"><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name || '-'}</a></h3>
            <p>${restaurants.description || '-'}</p>
        </div>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {createRestaurantsDetailTemplate,
  createRestaurantsItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate};

