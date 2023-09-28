# Plop

Plop is a tool which provide CLI interface with commands for rapid code creation.

To access plop CLI you need to run following command:

```shell
npm run generate
```

## Available commands

### 💧 react-custom-hook

This command creates custom React hook with a specific name inside `src/hooks` directory.

Result of this command:

- base hook file,
- add new hook to `hooks` index file.

### 💧 react-context

This command creates global React context with a specific name inside `src/contexts` directory.

Result of this command:

- context file
- context types file,
- context controller file,
- hook that retrieves data from the context,
- add new hook to `hooks` index file.

### 💧 shared-enum

This command creates shared enum with specific name inside `src/shared/enums` directory.

Result of this command:

- base enum file,
- add new hoenumok to `enum` index file.
