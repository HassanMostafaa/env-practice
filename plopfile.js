module.exports = function (plop) {
  var files = {
    mainComponent: "plop-templates/main-component.js",
    styledComponent: "plop-templates/styled-component.js",
    storybookStory: "plop-templates/storybook-story.js",
    cssSnippet: "plop-templates/css.js",
    indexFile: "plop-templates/index-file.js",
  };
  plop.setGenerator("fc", {
    description: "Function Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the component name?",
        validate: function (value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "name is required";
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{kebabCase name}}/index.ts",
        templateFile: files.indexFile,
      },
      {
        type: "add",
        path: "src/components/{{kebabCase name}}/{{pascalCase name}}.tsx",
        templateFile: files.mainComponent,
      },
      {
        type: "add",
        path: "src/components/{{kebabCase name}}/styles/S{{pascalCase name}}.tsx",
        templateFile: files.styledComponent,
      },
      {
        type: "add",
        path: "src/components/{{kebabCase name}}/styles/CSS{{pascalCase name}}{{pascalCase suffix}}.tsx",
        templateFile: files.cssSnippet,
      },
      {
        type: "add",
        path: "src/components/{{kebabCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: files.storybookStory,
      },
      {
        type: "Usage:",
      },
    ],
  });
};
