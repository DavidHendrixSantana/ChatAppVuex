import {COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS} from '@/common/mutation-types.js'
import {getUser} from '@/api'


const module = {
    // We specify it needs to call the name of the module when it its use in the components
    namespaced: true,
    state(){
        return{
            id: 1,
            username: 'David',
            details:{
                id:1,
                name: 'Deivid Salvador',
                avatar: '/avatars/avatar.jpg'
            }
        }
    },
    getters:{
        firstName(state){
            return state.username
        }

    },
    mutations:{
        // Function with the name of the constant: Update User
        [COMMIT_UPDATE_USERNAME](state, username){
              state.username = username
         }

        //Traditional Way 
        // updateUsername(state, username){
        //     state.username = username
        // }
    },
    actions: {
        async updateUsername({ commit, state, rootState }, username) {
          console.log("update username action!", state.username, username);
          const user = await getUser(1);
          console.log(user);
          commit(COMMIT_UPDATE_USERNAME, username);
          if (state.username) {
            commit(COMMIT_SET_STATUS, "active", { root: true });
            
           
          }

        },
      }
}
export default module