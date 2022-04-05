import Repository from "./../../repositories/RepositoryFactory";
const UserRepository = Repository.get("user");

export default {
  state: {
    users: [],
    user: {},
    totalPage: 0
  },
  getters: {
    getUsers: state => state.users,
    getUser: state => state.user,
    getTotalPage: state => state.totalPage
  },
  mutations: {
    SET_USERS(state,users) { 
        return state.users = users
    },
    SET_USER(state,user){
      state.user = user
    },
    POST_USER(state,user){
      state.users.push(user)
    },
    SET_PAGE(state,totalPage){
      state.totalPage = totalPage
    }
  },
  actions: {
    async getUsers({commit},payload) {
        try {
            const res = await UserRepository.get(payload)
            commit('SET_USERS', res.data)
            commit('SET_PAGE',res.total_pages)
        } catch (error) {
            return Promise.reject(error)
        }
    },
    async setUser({commit},{id}) {
      try {
        const res = await UserRepository.show(id)
        commit('SET_USER',res)
        return Promise.resolve(res)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async postUser({commit},payload){
      try {
        const res = await UserRepository.post(payload)
        commit('POST_USER',res)
        return Promise.resolve(res)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    // eslint-disable-next-line no-unused-vars
    async putUser({commit},payload){
      try {
        const res = await UserRepository.put(payload)
        
        return Promise.resolve(res)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
}
