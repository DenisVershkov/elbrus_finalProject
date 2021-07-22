import { SET_ANOTHER_INFO } from "../types/anotherUserTypes"

const AnotherProfileReducer = (state = {}, action) => {

  switch (action.type) {
    
      case SET_ANOTHER_INFO: {
        const{ payload } = action
        const info = {...state, id: payload._id ,firstName: payload.firstName, middleName: payload.middleName, lastName: payload.lastName, about: payload.about, location: payload.location, job: payload.job, gitHub: payload.gitHub, twitter: payload.twitter, instagram: payload.instagram, facebook: payload.facebook, skills: payload.skills }
        return info
      }
    

    default:
      return state
  }
}

export default AnotherProfileReducer