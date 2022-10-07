const module = {
    namespaced: true,

    state(){
        return{
            channel:null,
            channels:[
                {
                    id: 1,
                    name: 'Canal 1',
                    messages : 1,
                },
                {
                    id: 2,
                    name: 'Canal 2',
                    messages : null,
                },
                {
                    id: 3,
                    name: 'Canal 3',
                    messages : null,
                },
                {
                    id: 4,
                    name: 'Canal 4',
                    messages : null,
                },
            ]
        }
    },
    getters: {
        getChannels: (state,getters,rootState,rootGetters)=> (search) =>{

            // return state.channels.filter((channel)=> search ? channel.name.toLowerCase().include(search.toLowerCase()) : false )
            return state.channels.filter((channel)=>  
            channel.name.toLowerCase()
            .includes(search.toLowerCase())
            ).map((channel) => {
                const messages = rootGetters['messages/getUnreadMessages'](channel.id)
                return{
                    ...channel,
                    messages
                }
            })
        }
    },
    mutations:{
        setChannel: () =>{

        }
    }

}

export default module