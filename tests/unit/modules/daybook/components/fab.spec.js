import { shallowMount } from "@vue/test-utils";
import Fab from "@/modules/daybook/components/Fab.vue";

describe("Testing the FAB component", () => {
  test("Must show the icon by default", () => {
    const wrapper = shallowMount(Fab);
    expect(wrapper.find("i").classes("fa-plus")).toBeTruthy();
  });
  test("Must show the icon by argument", () => {
    const wrapper = shallowMount(Fab, {
      props: {
        icon: "fa-circle",
      },
    });
    expect(wrapper.find("i").classes("fa-circle")).toBeTruthy();
  });
  test("Must be emit the on:click event when its clicked", () => {
    const wrapper = shallowMount(Fab);
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("on:click")).toHaveLength(1);
    //  expect(wrapper.emitted("on:click")).toBeTruthy();
  });
});
