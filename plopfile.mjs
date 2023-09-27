const componentTypes = {
  REACT_CONTEXT: 'react-context',
  REACT_CUSTOM_HOOK: 'react-custom-hook',
  SHARED_ENUM: 'shared-enum',
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

const reactCustomHookGenerator = () => ({
  description: componentTypes.REACT_CUSTOM_HOOK,
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'hook name',
      validate: (input) => input.length > 1 || 'Hook name cannot be empty!',
    },
  ],
  actions: function () {
    return [
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}/{{camelCase name}}.hook.tsx',
        templateFile: 'templates/hook/hook.hbs',
      },
      {
        type: 'modify',
        path: 'src/hooks/index.ts',
        pattern: getPlaceholderPattern('HOOKS_REEXPORTS'),
        templateFile: 'templates/hook/hook.index.hbs',
      },
    ];
  },
});

const reactSharedEnumGenerator = () => ({
  description: componentTypes.SHARED_ENUM,
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'enum name',
      validate: (input) => input.length > 1 || 'Enum name cannot be empty!',
    },
  ],
  actions: function () {
    return [
      {
        type: 'add',
        path: 'src/shared/enums/{{pascalCase name}}/{{pascalCase name}}.enum.ts',
        templateFile: 'templates/enum/enum.hbs',
      },
      {
        type: 'modify',
        path: 'src/shared/enums/index.ts',
        pattern: getPlaceholderPattern('ENUMS_REEXPORTS'),
        templateFile: 'templates/enum/enum.index.hbs',
      },
    ];
  },
});
/* eslint-disable import/no-default-export */
export default function (plop) {
  plop.setGenerator(componentTypes.REACT_CONTEXT, reactContextGenerator());
  plop.setGenerator(componentTypes.REACT_CUSTOM_HOOK, reactCustomHookGenerator());
  plop.setGenerator(componentTypes.SHARED_ENUM, reactSharedEnumGenerator());
}
