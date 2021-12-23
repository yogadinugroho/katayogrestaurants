
/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */

import API_ENDPOINT from '../../globals/api-endpoint';

class restaurantsSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default restaurantsSource;
