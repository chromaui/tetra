---
name: update-pr-summary
description: Update pull request (pr) summary
disable-model-invocation: true
argument-hint: <pr-number-or-url>
---

1. Fetch the current PR description with `gh pr view $ARGUMENTS` (if no argument provided, omit it to use the current branch's PR)
2. Review the commits and diff with `gh pr diff $ARGUMENTS`
3. Check whether the description accurately reflects the actual changes (scope, motivation, test plan)
4. Update the description if needed with `gh pr edit $ARGUMENTS --body "..."`
