const componentTypes = {
  REACT_CONTEXT: 'react-context',
};

const getPlaceholderPattern = (pattern) => new RegExp(`(\/\/ ${pattern})`, 's');

const reactContextGenerator = () => ({
  description: componentTypes.REACT_CONTEXT,
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'context name',
      validate: (input) => input.length > 1 || 'Context name cannot be empty.',
    },
  ],
  actions: function () {
    return [
      {
        type: 'add',
        path: 'src/context/{{camelCase name}}/{{camelCase name}}Context/{{pascalCase name}}Context.ts',
        templateFile: 'templates/context/Context.hbs',
      },
      {
        type: 'add',
        path: 'src/context/{{camelCase name}}/{{camelCase name}}Context/{{pascalCase name}}Context.types.ts',
        templateFile: 'templates/context/Context.types.hbs',
      },
      {
        type: 'add',
        path: 'src/context/{{camelCase name}}/{{camelCase name}}ContextController/{{pascalCase name}}ContextController.tsx',
        templateFile: 'templates/context/ContextController.hbs',
      },
      {
        type: 'add',
        path: 'src/hooks/use{{pascalCase name}}/use{{pascalCase name}}.hook.ts',
        templateFile: 'templates/context/useContext.hbs',
      },
      {
        type: 'modify',
        path: 'src/hooks/index.ts',
        pattern: getPlaceholderPattern('HOOKS_REEXPORTS'),
        templateFile: 'templates/context/useContext.hook.index.hbs',
      },
    ];
  },
});

/* eslint-disable import/no-default-export */
export default function (plop) {
  plop.setGenerator(componentTypes.REACT_CONTEXT, reactContextGenerator());
}
