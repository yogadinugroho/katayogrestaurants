/* eslint-disable max-len */
/* eslint-disable new-cap */
const assert = require('assert');
Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({I} ) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({I}) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content .restaurant__title a');

  const firstRestaurant = locate('.restaurant-item__content .restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content .restaurant__title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
