module.exports = {
  // set your styleguidist configuration here
  title: "Default Style Guide",
  styles: "./sg-conf/styles.js",
  theme: "./sg-conf/theme.js",
  components: [
    "./src/components/**/MyButton.vue",
    "./src/components/**/[A-Z]*.vue"
  ],
  ignore: [
    "**/Datepicker[A-Z]*.vue",
    "**/Dropdown[A-Z]*.vue",
    "**/HelloWorld.vue"
  ],
  defaultExample: true,
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  require: ["./src/scss/buefy-build.scss"],
  // skipComponentsWithoutExample: true,
  // usageMode: "expand",
  exampleMode: "expand"
};
