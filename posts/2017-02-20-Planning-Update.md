---
layout: post
image: /public/assets/planning-update-2/reward-system-context.jpg
title: "Planning Update 2: Lazy planning group let’s drone do all the work"
date: 2017-02-20 12:00:00
categories: planning tech update
related: 2017-02-14-planning-update, 2017-03-10-perception-update
author: Rasmus Munter
---
Planning group here, back at it! Earlier this week we went into some detail about our [first planning algorithm](/blog/2017-02-14-planning-update) using a value field. However, we are also working on a second solution using something called reinforcement learning.

Due to all the random movement of the ground robots and limited awareness of the world around us, solving the challenge can be pretty cumbersome at times. So instead of doing our job and programming the drone so that it actually manages to solve the challenge, reinforcement learning lets us sit down and relax while the drone has to spend hundreds of thousands of attempts trying to figure out where it is and what’s going on.

This sounds like a bad idea. However, the concept has proven to be surprisingly effective in other areas, for example beating a professional player in the chinese game go, and learning to play video games using only the screen image as input ([AlphaGo](https://www.youtube.com/watch?v=SUbqykXVx0A), [Games](https://www.youtube.com/watch?v=V1eYniJ0Rnk)). The underlying principles are pretty simple, so skipping over a lot of small boring details, here is a quick introduction to what it is.

You have an agent, which can be anything that can perform actions on an environment. These actions can then affect the environment around it, and if the change is something you consider positive, you give the agent a reward.

<figure class="img-float-right">
  <img alt="Reward System" src="/public/assets/planning-update-2/reward-system.jpg" />
</figure>

Now all we need for an agent to perform well is a way of retaining and learning what actions, in what situation (known as states), lead to positive rewards. This is most commonly referred to as policy. A policy receives an input which describes any important aspects of the environment and outputs the best action to choose.

Now that the groundwork is in place, you just need to let your agent learn. The simplest method here is to start by initializing a policy that views all actions to be equally good. After each attempt of solving the problem the agent then slightly updates its policy given the rewards it receives. Given enough time the agent will make a policy that gives good rewards.

<figure class="img-float-left">
  <img alt="Reward System With Our Context" src="/public/assets/planning-update-2/reward-system-context.jpg" />
</figure>

So let’s put this in context of our challenge. We have the agent, our drone, which can interact with the ground robots, fly somewhere around the course or just hang around and wait. Then we give positive rewards when a ground robot crosses the green line and negative rewards when it crosses the red line.

Once again pretty straightforward. The implementation involves neural networks with a lot of small adjustments, but skipping all of that for now, implementing this simple system trying to solve the problem for one ground robot should work well.

![Derp Solution](/public/assets/planning-update-2/derp-solution.gif)

Or maybe not. The drone has decided that landing on top of the ground robot as often as humanly(robotly?) possible is the best idea ever. This is one of those small details we promised not to talk about. Down the rabbit hole we go.

What happened here is that it is more likely for the ground robot to drive out the 3 wrong sides than the one right side. Early on in the learning process the drone learns that, more often than not, being close to the edges leads to negative rewards. So then the agent thinks, with some creative freedom from our part, “Hey, if I just keep landing on this ground robot, I’ll never go to those scary edges. Problem solved.” In other words, the drone learns how to get zero reward instead of negative reward, but never figures out that it can also reliably get a positive reward.

![Age Of Exploration](/public/assets/planning-update-2/age-of-exploration-image.jpg)

This is known as the problem of exploration vs exploitation. Since the drone learns to keep the ground robot away from the edge early on, it never has time to figure out that one of the edges is actually good. The drone has never tried exploring possible states that could possibly be even better than just avoiding the edges altogether. There needs to be a balance between the agent doing what it thinks is best and doing actions to explore new possibilities.

Luckily, there is a quick and simple solution to this known as an ε-greedy method. We define a variable ε which is a probability of doing a random action instead of the action the agent thinks is best. To start ε is set to 1, and so our drone just interacts randomly with the ground robot. The agent still updates its policy based on the result of the random actions and this way is exposed to more states, i.e. ground robot positions. As the drone starts racking up experience of its environment, we slowly decrease ε to 0 allowing the drone to once again control itself and exploit its policy properly.

This quick fix and we see a much smarter drone

![Slow Solution](/public/assets/planning-update-2/slow-solution.gif)

Well smart might not be the best description. The drone uses too much time herding the robot out. This has to do with a bunch of small details we again promised not to talk about...and will probably have to leave untouched until some other blog post.

Thanks for reading! 

Lots of love

Planning
