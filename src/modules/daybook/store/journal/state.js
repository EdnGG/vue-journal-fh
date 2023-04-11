//  con export default tu le puedes dar el nombre que desees a la funcion
export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: " lorem 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero veritatis corporis esse, sunt, commodi amet dicta odio similique accusamus quas maxime consectetur animi! Dicta eum eos officiis ullam ad animi.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: " lorem 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero veritatis corporis esse, sunt, commodi amet dicta odio similique accusamus quas maxime consectetur animi! Dicta eum eos officiis ullam ad animi.",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: " lorem 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero veritatis corporis esse, sunt, commodi amet dicta odio similique accusamus quas maxime consectetur animi! Dicta eum eos officiis ullam ad animi.",
      picture: null,
    },
  ],
});
