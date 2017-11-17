
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch(action.type){

    case "ADD_RESTAURANT":
      const newRest = Object.assign({}, action.payload, {id: cuid(), reviews: []})
      return Object.assign({}, state, {restaurants: state.restaurants.concat(newRest)});

    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(rest => rest.id !== action.id)
      return Object.assign({}, state, { restaurants })

    case "ADD_REVIEW":
      const reviewWithId = Object.assign({}, action.review, {id: cuid()})
      const newReviews = {reviews: state.reviews.concat([reviewWithId])}
      return Object.assign({}, state, newReviews)

    case "DELETE_REVIEW":
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return Object.assign({}, state, { reviews })

    default:
      return state;
  }
}
