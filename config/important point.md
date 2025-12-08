cmd+shift+v

# How the config package works:

The config package was designed with separate files for different purposes:

| File                                | Purpose                                                              |
| ----------------------------------- | -------------------------------------------------------------------- |
| `default.json`                      | Static default values (literal strings, numbers, etc.)               |
| `custom-environment-variables.json` | Special file that tells config: "for this key, look up this env var" |

> **Note:** The package only looks for env var mappings in the specially-named `custom-environment-variables.json` file. It treats all other files as literal values.
