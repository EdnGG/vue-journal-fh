import daybookRouter from "@/modules/daybook/router";

describe("Testing the daybook router", () => {
  test("Must be return the correct routes", async () => {
    expect(daybookRouter).toMatchObject({
      name: "daybook",
      component: expect.any(Function),
      children: [
        {
          path: "",
          name: "no-entry",
          component: expect.any(Function),
        },
        {
          path: ":id",
          name: "entry",
          component: expect.any(Function),
          props: expect.any(Function),
        },
      ],
    });

    //  expect((await daybookRouter.children[0].component()).default.name).toBe(
    //    "NoEntrySelected"
    //  );
    //  expect((await daybookRouter.children[1].component()).default.name).toBe(
    //    "EntryView"
    //  );

    const promiseRoutes = [];
    daybookRouter.children.forEach((child) => {
      promiseRoutes.push(child.component());
    });

    const routes = (await Promise.all(promiseRoutes)).map(
      (r) => r.default.name
    );

    expect(routes).toContain("EntryView");
    expect(routes).toContain("NoEntrySelected");
  });
  test("Must return the route ID", () => {
    //  const route = daybookRouter.children[1];
    //  expect(route.props({ id: "ABC123" })).toEqual({ id: "ABC123" });

    const route = {
      params: {
        id: "ABC-123",
      },
    };
    //   Esta solucion aplica si la ruta la movemos de lugar
    const entryRoute = daybookRouter.children.find(
      (route) => route.name === "entry"
    );
    expect(entryRoute.props(route)).toEqual({ id: "ABC-123" });
    //  expect(daybookRouter.children[1].props(route)).toEqual({ id: "ABC-123" });
  });
});
