import Vue from "vue";
import VxModal from "../components/VxModal.vue";

const VxModalConstructor = Vue.extend(VxModal);

const VxModalUtil = {
  show(text) {
    const instance = new VxModalConstructor({
      propsData: {
        text,
      },
    });

    instance.$mount();
    document.body.appendChild(instance.$el);

    instance.$on("close", () => {
      instance.$destroy();
    });
  },
};

export default VxModalUtil;
