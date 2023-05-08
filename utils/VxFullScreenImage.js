import Vue from "vue";
import VxFullScreen from "../components/VxFullScreenImage.vue";

const VxFullScreenImageConstructor = Vue.extend(VxFullScreen);

const VxFullScreenImageUtil = {
  show(imageSrc) {
    const instance = new VxFullScreenImageConstructor({
      propsData: {
        imageSrc,
      },
    });

    instance.$mount();
    document.body.appendChild(instance.$el);

    instance.$on("close", () => {
      instance.$destroy();
    });
  },
};

export default VxFullScreenImageUtil;
