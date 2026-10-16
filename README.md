# smcozart — Claude Code plugins

A catalog. Each plugin lives in its own repo; this file pins the version.

| Plugin | Solves | Source |
|---|---|---|
| `ai-sdlc` | Ties agent work to source control and sets up agent orchestration of issues. Needs `mattpocock-skills` (installed with it). | `smcozart/cozy_ai-sdlc` › `plugin/` |

## Install

```bash
npx smcozart ai-sdlc                     # user scope (default)
npx smcozart ai-sdlc --scope project     # this repo only
# or, inside Claude Code:
/plugin install ai-sdlc --marketplace smcozart/claude-plugins
```

## Release a plugin

1. In the plugin repo: merge, then `claude plugin tag plugin` (→ `<name>--v<version>`), push the tag.
2. Here: set that plugin's `ref` to the new tag, `claude plugin validate .`, merge.
