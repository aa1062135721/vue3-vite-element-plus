import { createStore } from 'vuex'
export default createStore({
    state: {
        name: 'lisi'
    },
    mutations: {
        changeName (state, val) {
            state.name = val
        }
    }
})