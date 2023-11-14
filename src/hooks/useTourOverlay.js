import { createApp } from "vue";
import TourOverlay from "../components/TourOverlay.vue";
import { DEMO_EL_LIST } from "../constants";
import store from '../store/storage.js'

const createOverlayApp = () => {
  const app = createApp(TourOverlay);
  app.use(store);
  return app;
};
let overlayInstance = null;

export const useProcessTour = () => {
  const { isTourActivated, activatedTourIndex } = store.state.tour;

  if (!isTourActivated) return

  if (activatedTourIndex === DEMO_EL_LIST.length - 1) {
    useDeactivateTourOverlay();
    return
  }

  useNextTourIndex()
}

export const useActivateTourOverlay = () => {
  let overlayContainer = document.createElement("div");
  overlayContainer.id = "overlay-dummy";
  overlayContainer.style.position = "absolute";
  overlayContainer.style.top = 0;
  overlayContainer.style.left = 0;
  overlayContainer.style.width = "100vw";
  overlayContainer.style.height = "100vh";
  overlayContainer.style.zIndex = 9999;
  document.body.appendChild(overlayContainer);

  overlayInstance = createOverlayApp();
  overlayInstance.mount("#overlay-dummy");
  store.commit("tour/setIsTourActivated", true);
}

export const useDeactivateTourOverlay = () => {
  if (overlayInstance) {
    overlayInstance.unmount();
    overlayInstance = null;
  }

  let overlayContainer = document.getElementById("overlay-dummy");
  if (overlayContainer) {
    overlayContainer.parentNode.removeChild(overlayContainer);
  }

  store.commit("tour/setIsTourActivated", false);
  store.commit('tour/setActivatedTourIndex', 0);
}

export const useNextTourIndex = () => {
  store.commit("tour/setActivatedTourIndex", store.state.tour.activatedTourIndex + 1);
}