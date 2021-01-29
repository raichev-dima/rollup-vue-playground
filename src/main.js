import { inject } from "vue";

import Example from "./components/Example/Example.vue";
import withScopedSlots from "./hocs/withScopedSlots";

const useContext = () => {
  return inject("RollupKey", "Default value from library");
};

const ExamplePlugin = {
  install(app) {
    app.component("Example", withScopedSlots(Example));
  },
};

export { Example, withScopedSlots, ExamplePlugin, useContext };
