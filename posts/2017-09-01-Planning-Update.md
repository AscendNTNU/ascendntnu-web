---
layout: post
image: /public/assets/planning-update-3/prob-distribution-showoff.png
title: 'Hello World from the AI group!'
date: 2017-09-01 13:00:00
categories: planning AI
related: 2017-02-14-planning-update, 2017-02-20-planning-update
author: Rasmus Munter
---


Ascend NTNU is now busy preparing for another year working towards solving mission 7a. Despite a great trip to Atlanta, seeing many interesting solutions and us bringing back a prize for the most innovative drone, once again no one has managed to solve the mission. This summer will mark the 5th attempt at the mission, tying for the second longest running mission in the International Aerial Robotics Competition’s 25 year history.

What makes this mission so hard? Our previous blog [post](https://ascendntnu.no/blog/2017-07-20-the-competition) gives an overview of the mission and the main challenges we face, so if you haven’t read that, now is probably a good time.

The navigation and interaction aspect of the mission is clearly the biggest stumbling block. However, from the technology that was presented in Atlanta, a few teams are close to solving these issues. Instead, the focus of this post will be on the difficulty of the next step, getting as many robots as possible over the green line.

There are two factors that make this challenging. The first is the 10 minute time limit. At the very start all the 10 robots are aligned in a circle in the center of the course. One or two of those robots starts by heading towards the green line. Theoretically these two can be removed in just under 40 seconds. However, the rest of the robots start at awkward angles and are farther away from the green line. Due to how slow the ground robots are, moving a robot across the playing field takes approximately 80 seconds. That will take over 13 minutes! Way over the 10 minute time limit. To make things worse, this was an oversimplified calculation that just included the random 180 degree turns that the robot makes every 5 seconds. If one takes into account that the robot can also collide with the other robots, and our drone could have issues while trying to interact with the robot, the estimated time significantly increases.

The other factor is the random movement of the robots. Every 5 seconds they each change their bearing by any angle in the range from -20 to 20. This might not sound like much but it quickly compounds into chaos. Below is a simulation a thousand different paths one robot can take.

<figure>
  <img alt="Probability distribution" src="/public/assets/planning-update-3/prob-distribution.gif" />
  <figcaption>Probability distribution</figcaption>
</figure>

Keep in mind that this simulated with only one robot. Once one adds the possibility of collisions with other robots, which always occur due to the starting formation, the probability distribution expands at a much quicker rate. This leads to issues keeping track of ground robots we’ve lost sight of.

From a more theoretical standpoint we can address a few more issues. One way of looking at this is by referring to the task classification system introduced in Russell and Norvig (2009) [1]. The left side of the table are properties that make the task easier, while the right side makes the task harder. Below is the table for mission 7a showing why it’s difficult from a theoretical viewpoint.

<figure>
  <img alt="AI Classification System" src="/public/assets/planning-update-3/ai-classification-system.png" />
  <figcaption>AI Classification System</figcaption>
</figure>

Pro tip: red means hard

Let's take a quick look at some of the important properties in this list.

### Single Agent vs Multi Agent

An agent is anything in the environment that is intelligent, in other words another AI or human. Luckily for us the ground robots are based on predefined rules. This means we don’t need to spend time trying to figure out what they might be thinking, we know they’re dumb. Hence 7a fills the simpler criterion of a single agent environment and is colored in a nice shade of green. Unfortunately things get a bit more complicated from here on.

### Deterministic vs Stochastic

Deterministic means that based on a current observation one can predict the future. In other words if our drone could see a ground robot moving at a certain bearing and know, with certainty, the bearing 10 seconds later it would be a deterministic environment. However, from the randomness we saw earlier this is not the case. We call this environment stochastic as it means there is uncertainty in the the outcome of an action performed. The AI thus cannot consider an action as the right or wrong action in any given situation. It must instead weigh the possible positive outcomes versus the possible negative ones.

### Fully vs Partially Observable

This point refers to how much of the applicable environment is accessible at any given time. In our case this refers to knowing the drone and ground robots position. In the best case scenario, when flying at maximum height defined by the rules, we might be able to detect all the ground robots. However, these value will be imprecise and as soon as we need lower our height to interact we steadily lose sight of more ground robots. Upon landing on a ground robot, we actually can’t detect any.

This wouldn’t be a problem if the world was deterministic, but since it is stochastic as soon as we lose sight of a robot, it’s position grows more and more uncertain as time passes.
This then requires additional logic from the drone to be able to decide if it should explore its environment to gain more knowledge of the ground robots positions or interact on a robot given its current limited knowledge.

### Known vs Unknown

If an environment is known it means you know the rules of the environment. Technically speaking we know all the competition rules already and should color it green.

However, I am a bit hesitant to call the environment completely known.

The issue here isn’t from the design of the mission, but from the process we have to go through to get there. Since much of the difficulty of the mission comes from the navigation and interaction side of things, these systems will have to be continuously developed throughout the year. In other words, how observable our environment is, and how much we can interact with robots is unknown until relatively close to the competition. These are variables which have a large influence on how our drone should behave.

For us this means we must either develop multiple algorithms to deal with different scenarios, or have a method which can adapt to these changes. The latter is a lot more challenging to develop, but with the first one risks having an ill equipped algorithm.

## The good news

Last year, after three years of attempts at solving the mission, IARC decided to slightly lower the bar, reducing the ‘completed’ threshold from moving 7 robots over the green line to 4 robots. Since some robots are easier to deal with than others, this makes it significantly easier to solve the challenge as the time constraint isn’t as much of an issue.

With that said, multiple teams are closing in on a solution so getting 4 robots across the green line won’t be enough. In order to win the competition one will have to address the above issues, a far from trivial task.

So here’s to a new year in our newly renamed group AI!
