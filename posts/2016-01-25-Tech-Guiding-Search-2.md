---
layout: post
title:  "Tech: Guiding the search for ground robots (Part 2)"
date:   2016-01-25 11:00:00
categories: simulation tech modelling ai
author: Simen Haugo
---

This week I continue down the rabbit hole in the search for ground robots.

Well that didn't work!
----------------------
Last week we looked at an attempt at keeping track of where the robots are. It was somewhat grounded on statistical methods, but also on some human intuition. While it appeared to work well on a single test case, it fell short when we got all ten robots into the mix. Keeping track of where everyone is at all times proved to be too difficult of a task.

Now, truth be told, we are a research organization. Therein lies the fact that we don't really know what we are doing. So whenever we are met with the inevitable failure, the only thing we can do is to take a step back, reevaluate our life choices so far, and try again.

This time, we'll take a step back of about two months and thirty days, when we published our first tech post on this subject. You could try and dig into your memory and remember what it was about, but thankfully, you don't have to, since I will do that for you.

![Many simulations (1)](/public/assets/tech-guiding-search-2/simulation-1.gif)

The first thing I did to try to understand the stochastic nature of our problem was to run many simulations at the same time, and draw them all in a ghostly blue shade on top of the true simulation in yellow.

I now realize that this might just be what we need. [What if](https://what-if.xkcd.com/), instead of looking at where everyone should be, I look at where everyone _could_ be. I could run many simulation "universes" in parallel, and compute the most likely spots to find robots by counting the number of universes that have a robot in a given spot. A high count would indicate high confidence in the estimate, while a low count means that only in a handful of universes did a robot ever get there.

![Many simulations (2)](/public/assets/tech-guiding-search-2/simulation-3.gif)

The last .gif from the prior post showed that the universes spread rapidly, and turned into a bland soup of indistinguishable robots. At that point, each cell is as likely to contain a robot as any other cell, so that's obviously not helpful. To fix that, we'll need to make good use of any observations that we get. Not only if we see a ground robot, thus strengthening our belief in those universes, but also that we don't, thus invalidating other universes.

I'll spare you the tiring implementation details, since it's not that interesting. Suffice to say, developing this algorithm required abounding amounts of bookkeeping, green tea and danish rye bread with smoked salmon. The result of which looking like this:

![Tracking](/public/assets/tech-guiding-search-2/tracking-1.gif)

Even the most seasoned of aficionados in statistics might be unable to fully appreciate everything that is happening in this animation. So for the sake of reaching a collective understanding, I would like you to focus on the white robot in the lower-left. You know, the one that collides with the blue one? (You may want to wait until the gif restarts)

As you can see, when it hits the blue robot, the cloud of estimates splits up into two new clouds, each slightly dimmer than the original. One represents the robots that avoided the collision and continued; the other represents the ones that bounced back. The cloud of robots that bounced back is brighter than the other cloud, since it was the more likely outcome.

Naturally, we don't know for sure which outcome we got, even if one is more likely than the other. This is made evident by the upper-right robot, which almost went through a similiar collision, but instead continued along, gently grazing the edge of the blue guy.

At this point, you might be as interested as I was, in how well this actually works. But first, let me show you a graph I made, just for you.

![Detections (1)](/public/assets/tech-guiding-search-2/detections-1.png)

This graph shows the number of cells where we correctly estimated a robot's whereabouts, over a timespan of two minutes. Ideally, this number should be close to ten, which was the number of ground robots on the arena. After two minutes the number of detections hovered at about 2-4. The drone stood still in the middle while this was recorded, so you might ask how it looks if our drone is actually moving around.

![Detections (2)](/public/assets/tech-guiding-search-2/detections-2.png)

Interestingly, if we make the drone fly around in a circular pattern, the graph looks like this. Statistically speaking, this seems to imply that we are more likely to detect robots in the middle. Atleast in the beginning.

Did we learn anything?
----------------------
It appears to work reasonably well. But... not well enough. We clearly still get cases where we mis-estimate the likelihood of a robot being in a given spot. We also can't even detect half of the robots after two minutes of running time.

Now, if there is anything I remember from the real-time programming course I took last year, it's that you need to handle the worst-case, always. The worst-case here being that we don't have any good estimates.

What all this boils down to, is that we need a fallback mechanism for when we lose track of robots. That fallback is, necessarily, to actually do an exhaustive search over the arena.

We are building a system that needs to be robust, it always needs to handle the worst-case _anyway_. With that key bit of insight, maybe we have been going about this the wrong way all along? Could it be a better idea to somehow optimize our strategy for the worst-case? Perhaps we could rely on this estimation scheme, but only on short timespans, and over small regions of space?

I'm sure the gears in your head are starting to turn at this point. But judging by the ever-decreasing gap between this text and the page footer, I'm sure you already know what I'm about to say.

Thanks for reading! We hope you found this week's tech post enjoyable, or perhaps even educational. If you experienced any other emotions that you would like to tell us about, you are welcome to share it with us on any of our social media channels, listed at the bottom of this page.

Take it easy, and we'll see you next time!
