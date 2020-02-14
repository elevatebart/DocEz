module.exports = {
  // set your styleguidist configuration here
  title: "Default Style Guide",
  // components: "./src/components/**/[A-Z]*.vue",
  ignore: ["**/Datepicker[A-Z]*.vue", "**/HelloWorld.vue", "**/MyButton.vue"],
  defaultExample: true,
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  // webpackConfig: {
  //   // custom config goes here
  // },
  exampleMode: "expand",
  require: ["./src/scss/buefy-build.scss"]
  // skipComponentsWithoutExample: true,
  // usageMode: "expand"
};
