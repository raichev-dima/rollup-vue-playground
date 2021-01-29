import { h, provide } from "vue";

// const Key = Symbol("Key");

const withScopedSlots = (component) => {
  return {
    name: `WithScopedSlots${component.name}`,
    props: component.props,
    setup(props, context) {
      provide("RollupKey", "Context from library provided!");

      console.log("Setup is completed!");

      return () => h(component, props, context.slots);
    },
  };
};

export default withScopedSlots;
