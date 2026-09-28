---
title: "TokenOPS - AI Coding Centre"
source: "https://copilot.gh.allegrogroup.com/tokenops/"
author:
published:
created: 2026-09-24
description: "AI Coding site"
tags:
  - "clippings"
---
## TokenOPS

📹 Videos: [reasoning effort in LLMs](https://copilot.gh.allegrogroup.com/blog/2026-06-26-reasoning-effort-in-llms/) and [context management with tools and MCP servers](https://copilot.gh.allegrogroup.com/blog/2026-06-26-context-management-tools-mcp/).

![TokenOPS four levers](https://copilot.gh.allegrogroup.com/img/tokenops-four-levers.png)

## Principles

### Use the right model for the job

Using strong models for planning, lighter models for implementation, and the lightest models for automation and data processing reduces usage by 70%.

### Plan first, interact less

Creating an action plan before execution reduces token usage by 50%, because the agent can follow a clear path instead of discovering the next step through many back-and-forth interactions.

### Script instead of LLM

Use scripts for script-side data processing instead of asking the LLM to process large files in chat. Do not paste huge files into chat, such as logs or JSON files, asking for them to be filtered, mapped, or sorted. Paste only a small sample, a few lines, and ask Copilot to write a script (Python/Bash) that will perform the task locally. For example, instead of making the model process and re-output an 80k-token translation file, which creates a huge token/AI credit cost just for the output, generate a parsing script in 3 seconds and run it in the terminal for exactly 0 tokens.

### Match effort and speed to the task

Use the lowest reasoning effort and service tier that still solves the task. Reserve `xhigh` for deep research, security/code review, and long agentic tasks where the quality gain justifies the extra latency and cost. Use Fast mode only when latency matters: it speeds supported models up by 1.5x, but consumes credits at 2.5x the Standard rate for GPT-5.5 and 2x for GPT-5.4. See [Reasoning effort](https://developers.openai.com/api/docs/guides/reasoning#reasoning-effort) and [Fast mode](https://developers.openai.com/codex/speed#fast-mode).

![Context hygiene workflow](https://copilot.gh.allegrogroup.com/img/tokenops-context-hygiene.png)

### Avoid infinite sessions

Avoid "infinite sessions" by starting new topics in new conversations. Fresh conversations help the LLM keep attention on the current goal and stay in the smart zone, without old assumptions polluting the context. Long sessions make every next request more expensive, because you pay for input tokens each time.

### Slim down AGENTS.md

Slim down `AGENTS.md` so it contains only essential instructions that should apply to every conversation. The ideal `AGENTS.md` file should be as small as possible: every entry competes with the actual task instructions for the model's attention and token budget.

Aim for just the one-liner project description, package manager information, and non-standard build/typecheck commands. That's it.

**Use progressive disclosure**. Move the rest of the knowledge and guidance to separate files, leaving only clear pointer descriptions in `AGENTS.md`. For example, keep only a pointer such as `For TypeScript conventions, see docs/TYPESCRIPT.md`. Put language-specific rules, testing patterns, API guidance, style decisions, and Git workflow in those separate resources, allowing the agent to load them when needed. Instead of docs files, you can also use skills to provide the same knowledge; with a clear skill description, the agent will know when to load the skill with the appropriate information. In multi-module projects, place dedicated `AGENTS.md` files in subdirectories so each area can keep only the instructions relevant to that scope. To clean up an existing overloaded file, use this prompt to [fix a broken AGENTS.md file](https://www.aihero.dev/a-complete-guide-to-agents-md#fix-a-broken-agentsmd-with-this-prompt).

For more details, read Matt Pocock's article [A Complete Guide To AGENTS.md](https://www.aihero.dev/a-complete-guide-to-agents-md).

### Point the agent to the right place

Point the agent, as precisely as possible, to where it should make changes, for example in a given submodule or in the indicated files. Without this, the agent will search globally across the project and consume tokens. Keep a dedicated project structure document with a short project map, for example: this module contains the REST API, this one contains business logic, and so on; `AGENTS.md` should point to that document so the agent can load it when it decides the extra context is needed.

### Enable only selected project capabilities

Enable only selected MCPs and SKILLS at the project level. MCP definitions, especially input and output parameter schemas, take valuable space in the context window even before the agent decides whether it needs to call a tool.

### Restrict oh-my-openagent usage

Avoid using `oh-my-openagent` (previously `oh-my-opencode`) for routine tasks. Its workflow adds several subagents and strongly favors delegation from the main agent to specialized agents. Delegation can be useful for specific scenarios, such as heavy searching or research where subagents return short findings to the main agent, but this implementation often creates significantly higher token usage without proportional quality gains.

### Prefer English

Prefer English for prompts, `AGENTS.md`, system instructions, agent-facing documentation, task descriptions, and context shared with AI tools when the team can work in English. Models can answer well in Polish, but token cost is not language-neutral: OpenAI's English rule of thumb is `1 token ~= 4 characters` and `1 token ~= 3/4 of a word`. Polish morphology often splits words into more subword tokens; in the [Bielik 7B v0.1 tokenizer benchmark](https://ruj.uj.edu.pl/server/api/core/bitstreams/ba1f2b34-3569-45a7-a645-909654d31d5c/content), Mistral v0.1 encoded Polish text at 3.22 tokens per word versus 1.28 for English, which is about 150% more tokens per word. Keep Polish where it improves clarity for people or is required by the content, but use English for agent-facing work.

### Use local and on-prem models when they are sufficient

When an open-weight model running locally or on-prem is sufficient for the task, prefer it for routine automation, data processing, and cost-sensitive inference instead of reaching for frontier hosted models by default.

Local models can be run directly on a developer machine with tools such as [LM Studio](https://lmstudio.ai/), and the recommended laptop for this kind of workload is a MacBook M4/M5 Pro. In June 2026, we recommend Qwen 3.5 for light coding tasks and simple automation, for example smaller frontend changes or knowledge-gathering conversations in Ask mode. Keep in mind that for harder tasks these models are more error-prone and have a much shorter practical context window, around 32K instead of 200K. You can find the Qwen 3.5 description in the [Allegro Tech Radar](https://tech-radar.techdocs.allegrogroup.com/ai/qwen-3.5).

In summer 2026, Allegro will also have internally hosted open-source models on on-prem infrastructure, with traffic limited mainly by hardware capacity, as well as Plugged Cloud models from GCP.

### Use ccusage to see your usage

Use `ccusage` to inspect your local AI coding usage from the terminal. It reads local usage files generated by supported tools and turns them into usage reports. Start with one of these options:

- Homebrew: install once with `brew install ccusage`, then run `ccusage`.
- npm: run `npx ccusage@latest`.
- pnpm: run `pnpm dlx ccusage`.

For more installation options and details, see the [ccusage installation guide](https://ccusage.com/guide/installation). For `npx` and `pnpm`, you need Node.js installed first. See the [Node.js download page](https://nodejs.org/en/download).

Sample usage:

![Sample ccusage terminal output](https://copilot.gh.allegrogroup.com/img/ccusage.png)

#### Supported sources

`ccusage` works out of the box with Claude Code, Codex, and OpenCode: after you have used those tools, it reads their local usage files automatically.

#### GitHub Copilot

**Copilot CLI.** Enable local OpenTelemetry file export before starting or resuming a session:

```bash
export COPILOT_OTEL_ENABLED=true
export COPILOT_OTEL_EXPORTER_TYPE=file
mkdir -p "$HOME/.copilot/otel"
export COPILOT_OTEL_FILE_EXPORTER_PATH="$HOME/.copilot/otel/copilot-otel-$(date +%Y%m%d-%H%M%S).jsonl"
```

Then run Copilot CLI normally and inspect it with `ccusage copilot daily`. See the [ccusage Copilot CLI guide](https://ccusage.com/guide/copilot/) and [GitHub Copilot CLI OpenTelemetry docs](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference#opentelemetry-monitoring).

To keep this enabled all the time, add those exports to your shell profile, for example `~/.zshrc` on macOS.

**VS Code.** VS Code supports OpenTelemetry monitoring with the same environment variables as Copilot CLI. Use the same configuration as above, and see [VS Code agent monitoring docs](https://code.visualstudio.com/docs/agents/guides/monitoring-agents#_enable-otel-monitoring) for additional options. **JetBrains IDEs.** `ccusage` does not read GitHub Copilot usage from JetBrains IDE plugins.

### Ask for a higher limit when optimization is not enough

If you have already optimized model choice, context, and workflow but still hit the limit, request a limit increase through the [limit increase form](https://forms.gle/rpiwfzaW5efrP4ie6). Include the business context, expected usage, and what you have already optimized.