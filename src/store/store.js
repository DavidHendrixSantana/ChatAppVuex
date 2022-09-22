import {reactive} from 'vue'

const store = reactive({
    username: 'test',

    updateUsername(username){
        this.username = username
    }
})

export default store