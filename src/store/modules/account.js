import Repository from "./../../repositories/RepositoryFactory";
const LoginRepository = Repository.get("login");

const accessTokenStorageName = 'access_token'
export default {
  state: {
    accessToken: localStorage.getItem(accessTokenStorageName),
  },
  getters: {
    accessToken: state => {
        return state.accessToken
    },
    accessTokenHeader: state => {
        return 'Bearer ' + state.accessToken
    },
    isLoggedIn: state => {
        return state.accessToken !== null
    },
  },
  mutations: {
    login(state, tokens) {
        state.accessToken = tokens.accessToken
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    login({commit, dispatch, state},payload) {
        return LoginRepository.post(payload)
        .then(response => {
            const a = response.token
            localStorage.setItem(accessTokenStorageName, a)
            commit('login', {
                accessToken: a,
            })

            return Promise.resolve(response)
        })
        .catch(error => {
            return Promise.reject(error)
        })
    }
  }
}
