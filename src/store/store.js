const store = {
    profile:{
        username: ''
    },

    contacts:[
        {
            id:1,
            username:'user 1'
        },
        {
            id:2,
            username:'user 2'
        },
        {
            id:3,
            username:'user 3'
        },
    ],

    messages:[
            {
                id:1,
                msg: 'HOLA 1',
                author:1
            },
            {
                id:2,
                msg: 'HOLA 2',
                author:3    
             },
             {
                id:3,
                msg: 'HOLA 1',
                author:2
            },
            {
                id:4,
                msg: 'HOLA 2',
                author:2
            },
    ],

    channesl: [
        {
        id: 1,
        name: 'Canal1',
        messages: [1,2]
    },
        {
        id: 2,
        name: 'Canal1',
        messages: [3,4]
    },
]

}

export default store











// Example
// import {reactive} from 'vue'

// const store = reactive({
//     username: 'test',

//     updateUsername(username){
//         this.username = username
//     }
// })

// export default store