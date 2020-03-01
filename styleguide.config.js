const path = require("path");
// reference: https://vue-styleguidist.github.io/Configuration.html

module.exports = {
  title: "Default Style Guide",
  // initially, you can change the looks globally using the theme property.
  // Note: the file is given as String to keep it available for Hot Module Replacement (HMR)
  // https://github.com/styleguidist/react-styleguidist/blob/master/src/client/styles/theme.ts
  theme: "./config/styleguidist/theme.js",
  // Fine tune the styles of each component, component per component
  styles: "./config/styleguidist/styles.js",
  ignore: [
    // ignore HelloWorld as it is not a real component we want to document
    "**/HelloWorld.vue"
  ],
  defaultExample: true,
  // enable routing and section paging
  pagePerSection: true,
  // define the sections
  sections: [
    {
      name: "Getting Started",
      content: "./config/styleguidist/GettingStarted.md"
    },
    {
      name: "Components",
      components: [
        "./src/components/[A-Z]*.vue",
        "./src/components/*/[A-Z]*.vue"
      ]
    }
  ],
  require: ["./src/scss/buefy-build.scss"],
  // skipComponentsWithoutExample: true,
  // usageMode: "expand",
  exampleMode: "expand",
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, ".vue");
    const dir = path.dirname(componentPath).replace(/^src/, "");
    return `import ${name} from '@my-library${dir}';`;
  }
};
