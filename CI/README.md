## Continuous Integration (CI)

It’s especially important if you’re working on a team, but even if you’re working on your
own, it can provide some discipline that you might otherwise lack. Basically, CI runs
some or all of your tests every time you contribute code to a shared server. If all of the
tests pass, nothing usually happens (you may get an email saying “good job,” depending
on how your CI is configured). If, on the other hand, there are failures, the consequences
are usually more…public. Again, it depends on how you configure your CI, but usually
the entire team gets an email saying that you “broke the build.” If your integration master
is really sadistic, sometimes your boss is also on that email list! I’ve even known teams
that set up lights and sirens when someone breaks the build, and in one particularly
creative office, a tiny robotic foam missile launcher fired soft projectiles at the offending
developer! It’s a powerful incentive to run your QA toolchain before committing.
