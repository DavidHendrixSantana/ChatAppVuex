import { createStore } from 'vuex'

const store = createStore({
//   Parecido al data de los componentes
    state(){
        return{
            username: 'TestUser'
        }
    },
    getters:{
        firstName(state){
            return state.username
        }

    },
    mutations:{
        updateUsername(state, username){
            state.username = username
        }
    },
    actions:{
        updateUsername({commit,state}, username){
            commit('updateUsername', username)

        }
    }
})

export default store

