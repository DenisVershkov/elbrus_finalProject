import $api from "../http/axios.config"

export default class UserService {
  static async updateSkills(id, payload) {
    return $api.patch(`/profile/${id}`, payload)
  }

  static async updateInformation(id, payload) {
    return $api.put(`/profile/${id}`, payload)
  }

}