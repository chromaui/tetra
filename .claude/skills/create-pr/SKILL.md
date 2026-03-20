---
name: create-pr
description: Create a pull request (pr)
disable-model-invocation: true
---

Create a pull request against main using the template at `.github/PULL_REQUEST_TEMPLATE.md`.

The template has two required sections: **Summary** (what changed and why) and **How to QA** (step-by-step verification instructions), plus a QA checklist. There is also an optional commented-out release checklist for env vars or migrations.

1. Confirm current branch is not `main`
2. Check for an existing PR with `gh pr view` — if one exists, share the URL and stop
3. Push the branch to remote: `git push -u origin HEAD`
4. Review commits and diff: `git log main..HEAD --oneline` and `git diff main..HEAD --stat`
5. Draft a PR title (≤70 chars) and body following the template sections
6. List available labels: `gh label list` and apply any relevant ones
7. Create the PR as a draft: `gh pr create -d --base main --title "..." --body "..." -a "@me" -l "..."`
8. Share the PR URL with the user
