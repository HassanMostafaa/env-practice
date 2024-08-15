module.exports = function (plop) {
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
        templateFile: "plop-templates/index-file.js",
      },
    ], // array of actions
  });
};
