---
layout: post
title:  "Tech: Modelling ground robots"
date:   2015-10-26 12:00:00
categories: simulation tech modelling ai
author: Simen Haugo
---
An accurate probabilistic model of the ground robots is a step towards bulletproofing a robust state estimator.

![Motion capture system](/public/assets/lumaVolumeLarge.jpg)

<p class="text-muted centered">
	Typical motion capture installation - Optitrack.
</p>

Unlike motion-capture laboratories that have a plethora of cameras providing full coverage of the world, our drone must be able to estimate the state of the world from its own pair of eyes. The state being the orientation and position of the drone and a tenfold of moving ground robots. This poses a series of problems related to estimating the world state, namely, what do you do when you can't see a robot?

Our drone must be aware of whereabouts of each ground robot in order to make strategical decisions about which robot to turn. Furthermore, it is unacceptable for ground robots to leave the floor, since that means less points for us, and an increased risk of a terminated run.

Since our drone might spend a considerable amount of time being close to the floor, we cannot rely on the entirety of the competition floor being observable at all times. Attacking the problem by adding more cameras - to provide peripheral vision - will not solve the problem either, as you'll have a hard time tracking objects in footage captured at a slanted angle.

Much like in Missile Command - which was much better than that other alien shooting game - we need the ability to predict where a given ground robot might be ahead of time. Using this prediction we can

* Know the likelyhood of a certain robot being close to leaving
* Spend less time searching for the location of a certain robot

## Under Great Uncertainty

If the full state of the world is not available, the best we can do is to predict and control our estimates at a later time. Consider the case of a single ground robot travelling at a constant velocity. In this case, you can predict the robot's position at any point time, given that you know where you last saw it and what velocity it was travelling with.

Alas, our problem is much more complex, and also much more interesting than this. The ground robots of the competition follow a handful of simple rules:

1. Every 20 seconds: turn around 180 degrees
2. Every 5 seconds: turn a random amount, distributed between -20 and +20 degrees
3. Upon colliding frontally: turn 180 degrees
4. Upon being touched on top: turn 45 degrees

The second rule clearly poses a problem in that it makes our system be non-deterministic. If there were no randomness to a robot's behaviour, then we could very well simulate the entire world from start to finish, by integrating Newton's laws and resolving collisions that occur. Aside from various real-life factors, such as the build quality of the robots, ground friction differences, and so on, this would make a very good estimate of the world state. However, the random turn adds uncertainty to our system, which will accumulate rapidly as robots collide and interact with each other, making the whole situation very nasty.

So how can we predict the motion of these robots? This is a difficult question, and the answer depends what you want from the prediction scheme. Maybe you want a worst-case estimator or you only care about predicting the motion in the short term. Before we can make a solution that suits our needs, we need to gain a better understanding of the problem.

My favorite approach, if I don't know where to begin on a problem, is to visualize it. By no doubt, visualization is pretty much never a bad thing, and is usually worth spending time on. For that reason, I made a simple tool that simulates the behaviour of the ground robots hundreds of times, and displays the result over time. The technical term for this is Monte Carlo simulation, and was developed back at Los Alamos in the 1940s while the physicists were researching radiation shielding, and had to look for alternatives to deterministic solutions of how neutrons behaved near surface materials. Today it's widely used in a variety of fields, like photorealistic rendering - like in your favorite Pixar movie - or simulation of fluids.

<div class="row">
	<div class="col-md-4">
		<img class="img-responsive" alt="Simulation" src="/public/assets/simulation-1.gif">
	</div>
	<div class="col-md-8">
	<p>
		The simulation works by simulating many universes in parallell, each with its own random seed. On the left you can see the yellow robots starting out in a circle. After five seconds each robot turns a random angle, and you can see how the different universes (in blue) make up an arch of about 40 degrees, equal to the distribution interval.
	</p>
	</div>
</div>

<div class="row">
	<div class="col-md-4">
		<img class="img-responsive" alt="Simulation" src="/public/assets/simulation-2.gif">
	</div>
	<div class="col-md-8">
	<p>
		At twenty seconds in, the robots undergo a 180 degree rotation, and things start getting hairy. As you can see, the distribution of robots spreads rapidly as the robots collide with one another. The majority of robots are still headed towards the center, while a couple of outliers collide and do a reverse. The robots do another turn after forty seconds, before reaching the center.
	</p>
	</div>
</div>

<div class="row">
	<div class="col-md-4">
		<img class="img-responsive" alt="Simulation" src="/public/assets/simulation-3.gif">
	</div>
	<div class="col-md-8">
	<p>
		After a minute or two, the situation looks nothing like before, and is more of a soup of entropy. Yum. At this point, the robots appear to be distributed at a mean radius of half a floor length away from the center, and this mean position seems to be changing very little over time. In terms of predicting the position, this appears to be of little use.
	</p>
	</div>
</div>

## Beginning to Make Sense

So that was kind of useful. Already, we can intuitively see that the statistical properties of the system change over time - we even have a rough idea of the time scales that are in play. If we want to know the mean position and rotation of a robot, a one-minute long prediction will have huge variance and is pretty much useless. On the other hand, predicting the position over a ten or fifteen second timespan might have low enough variance that we can use it to estimate the robot position.

Now, obviously, this simulation is a simplification of the real process. We have not considered that a drone will be flying around and turning robots towards a desired direction, nor have we considered the four obstacle robots that run in a circular path along the floor. Both of these will change the statistical properties, and also the model that we end up using.

Until next time...

