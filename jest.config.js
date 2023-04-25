module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  // esta segunda línea se añade para evitar el error de axios en la consola
  transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
};
