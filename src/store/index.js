import { createStore } from 'vuex'
// import { reactive } from 'vue'

// const state = reactive({
//   inputText: "",
//   markedText: ""
// });

const state = {
  inputText: "",
  markedText: ""
}

const getters = {
  inputText(state) {
    return state.inputText
  },
  markedText(state) {
    return state.markedText
  }
};

const mutations = {
  SET_INPUT_TEXT(state, payload) {
    state.inputText = payload;
  },
  SET_MARKED_TEXT(state, payload) {
    state.markedText = payload;
  }
};

const actions = {
  setInputText({commit}, payload){
    commit("SET_INPUT_TEXT", payload);
  },
  setMarkedText({commit}, payload) {
    commit("SET_MARKED_TEXT", payload);
  }
};


export default createStore({
  state,
  getters,
  mutations,
  actions
});