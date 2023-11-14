export default {
  namespaced: true,
  state() {
    return {
      isTourActivated: false,
      activatedTourIndex: 0,
    };
  },
  mutations: {
    setIsTourActivated(state, payload) {
      state.isTourActivated = payload;
    },
    setActivatedTourIndex(state, payload) {
      state.activatedTourIndex = payload;
    }
  }
}