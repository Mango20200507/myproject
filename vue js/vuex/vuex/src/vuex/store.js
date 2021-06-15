import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
        //默认值
        count: 3
    }
    // 改变count状态
const mutations = {
    add(state, n) {
        state.count += n;
        //  触发的时候每次➕的数值（n)
    },
    reduce(state) {
        state.count--;
    },


}

const getters = {
    count: function(state) {
        return state.count += 100;
    }
}


const actions = {
    addAction(context) {
        context.commit('add', 10),
            setTimeout(() => { context.commit('reduce') }, 3000);
        console.log('我比reduce先执行了');
    },
    reduceAction({ commit }) {
        commit('reduce')
    }
}

const moduleA = {
    state,
    mutations,
    getters,
    actions
}

// const moduleB = {
//     state,
//     mutations,
//     getters,
//     actions
// }

export default new Vuex.Store({
    modules: {
        a: moduleA,

    }
})