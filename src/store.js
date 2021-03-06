import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    selectedCourses: [],
    school: ""
}

const actions = {
    selectCourses(context, courses){
        context.commit('selectCourses', courses);
    },
    selectSchool(context, school){
        context.commit('selectSchool', school);
    }
}

const mutations = {
    selectCourses(state, courses){
        state.selectedCourses = courses
    },
    selectSchool(state, school){
        state.selectedSchool = school
    }
}

const getters = {
    selectedCourses(state){
      return state.selectedCourses
    },
    selectedSchool (state) {
        return state.selectedSchool
    }

}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })