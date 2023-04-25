import { shallowMount } from "@vue/test-utils";
import About from "@/views/AboutView";

describe("About.vue", () => {
  test("Must match with snapshot", () => {
    const wrapper = shallowMount(About);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

// Path: journal-app/tests/unit/views/about.spec.js
