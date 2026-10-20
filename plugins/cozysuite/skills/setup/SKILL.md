---
name: setup
description: Pick this project's tools from the cozysuite catalog and install them at project scope. Reads the repo, recommends a preset plus or minus named tools, shows the change, and installs only after the developer confirms. Run again later to add or remove tools.
disable-model-invocation: true
---

# cozysuite setup

Tools install per project, never at user scope. This skill picks the project's
tool set. It does not set up the workflow files: that is ai-sdlc `new-project`,
after this.

## 1. Read

- **The catalog is the only list.** Run `claude plugin marketplace update
  cozysuite`, then read
  `~/.claude/plugins/marketplaces/cozysuite/.claude-plugin/marketplace.json`.
  An entry with `"category": "preset"` is a preset; its members are the
  `dependencies` in `plugins/<name>/.claude-plugin/plugin.json` beside it.
  Never recommend a tool that is not in the catalog.
- **What this project has:** `.claude/settings.json` (`enabledPlugins`,
  `extraKnownMarketplaces`) and the entries of `claude plugin list --json`
  whose `projectPath` is this repo.
- **What this project is:** `AGENTS.md` and `STATUS.md` (under the workflow),
  `site.json` (a client site), `composer.json` or `artisan`, `package.json`,
  `pyproject.toml` (the stack), or an empty folder (a new project).

## 2. Recommend

One preset, plus or minus named tools, each with one line of reason from what
you read. Ask at most two questions, and only what the repo cannot answer (an
empty folder: what is this project for?). A tool the developer names that is
not in the catalog: say so, and install nothing from another marketplace.

## 3. Show, confirm, install

Show the exact commands and the `enabledPlugins` that result. Run nothing
before the developer says yes. Then:

```
claude plugin marketplace add smcozart/cozysuite --scope project   # only when extraKnownMarketplaces has no cozysuite
claude plugin install <preset or tool>@cozysuite --scope project
claude plugin disable <tool>@cozysuite --scope project             # a preset member this project does not want
claude plugin uninstall <tool>@cozysuite --scope project           # a tool installed on its own
```

A preset's members install with it and show in `enabledPlugins`. Then tell the
developer: run `/reload-plugins` (no restart needed), and commit
`.claude/settings.json`. When the repo has no `AGENTS.md` and the developer
wants the workflow, the next step is "start a new project".

## Rules

- Never `--scope user`, and never edit `~/.claude/settings.json`.
- On a repo already set up, show the current set beside the recommendation,
  and change only what the developer approves.
- Upgrades are the developer's call: `claude plugin marketplace update
  cozysuite`, then `claude plugin update <tool>@cozysuite --scope project`,
  then restart the session.
