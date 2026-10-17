# smcozart — Claude Code plugins

A catalog. Each plugin lives in its own repo; this file pins the version.

| Plugin | Solves | Source |
|---|---|---|
| `ai-sdlc` | Ties agent work to source control and sets up agent orchestration of issues. Needs `mattpocock-skills` (installed with it). | `smcozart/cozy_ai-sdlc` › `plugin/` |
| `cozy-setup` | Makes a new computer behave like Sean's: the Cozy Architect output style (select `cozy-setup:Cozy Architect` once) and the macOS PATH guard hook. Private: install needs access to the repo. | `smcozart/cozy_setup` |
| `cozy-view` | Shows how agents and skills really behave: `/cozy-view:trace`, on Claude Code transcripts in Databricks. Sync is off until the machine opts in: `~/.config/cozy_view/profile` holds a Databricks profile name. Private: install needs access to the repo. | `smcozart/cozy_view` |

## Install

First, once per machine: `claude plugin marketplace add anthropics/claude-plugins-official`. Dependencies such as `mattpocock-skills` install from there; without it, `ai-sdlc` installs but fails to load.

Then, inside Claude Code:

```
/plugin marketplace add smcozart/claude-plugins
/plugin install ai-sdlc@smcozart
```

For this repo only, from a shell: `claude plugin install ai-sdlc@smcozart --scope project`.

## Release a plugin

1. In the plugin repo: merge, then `claude plugin tag plugin` (→ `<name>--v<version>`), push the tag.
2. Here: set that plugin's `ref` to the new tag and `sha` to the commit the tag points to (`git ls-remote <repo> 'refs/tags/<tag>^{}'`), `claude plugin validate .`, merge. The `sha` pin means a moved tag cannot change what installs.
