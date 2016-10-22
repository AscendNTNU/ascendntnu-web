---
layout: post
title:  "The International Aerial Robotics Competition"
date:   2016-02-25 10:00:00
categories: IARC competition
author: Marius Maaland
---
Ascend NTNU was founded with the primary mission of participating in (and winning) the [International Aerial Robotics Competition (IARC)](http://aerialroboticscompetition.org/) in 2016 and onwards. 

The IARC is the longest running collegiate aerial robotics challenge in the world, whose primary goal is to “move the state-of-the-art in aerial robotics forward”. In order to succeed with this ambitious mission, the IARC poses challenges deemed “impossible” when introduced. When a team, or a number of teams, complete the challenges in a sufficient manner, the world of aerial robotics will have advanced. This goal of advancing technology is what sparked our interest in entering this competition (aside from, you know, [drones](https://www.youtube.com/watch?v=CCDIuZUfETc)!). 

## The missions
When the IARC announces a new mission, the mission stays the same until one or more teams complete the challenge in a sufficient manner. As an example, mission 4 ran for eight years until it was finally completed by the Georgia Institute of Technology in 2009. Other previous winners include MIT, Stanford and Carnegie Mellon. In other words, as the first Scandinavian team, Ascend is going up against a skillful bunch. 

An event is held in the U.S and Asia each year, but only one winner is crowned. Even though a winner is chosen every year, the mission does not advance to the next one until the judges deem the solutions sufficient.

## Mission 7

The current mission, the one Ascend is solving, is mission number 7, more specifically 7a. Mission 7a takes places indoors on a 20x20 meter grid arena. The square arena has two white edges, one green edge and one red edge, as shown in figure 1. In the middle of the arena, 14 ground robots [(stripped down versions of the Roomba vacuum cleaner robots)](https://media.giphy.com/media/Q7ZckMLgjmthK/giphy.gif) start driving from the middle outwards towards the edges. The ground robots move in a specific pattern:

1. Every 20 seconds they rotate 180 degrees.
2. Every 5 seconds they rotate a random amount of degrees on the interval [-20, 20].

Our drone’s mission is to “herd” or guide 10 of these ground robots over the green edge, and keep them from running over any of the other edges, as shown in figure 2. And it has to do this autonomously; we are not allowed to control its movement in any way.

<div class="row">
	<div class="col-md-6">
		<figure>
			<img class="img-responsive" alt="Mission start state" src="/public/assets/start-state.png">
			<figcaption class="text-center">Figure 1. Mission start state.</figcaption>
		</figure>
	</div>
	<div class="col-md-6">
		<figure>
			<img class="img-responsive" alt="Mission start state" src="/public/assets/end-state.png">
			<figcaption class="text-center">Figure 2. Desired end state.</figcaption>
		</figure>
	</div>
</div>

So how does our drone make these vacuum cleaners go where it wants them to go? There are two methods of interaction, shown in figure 3 and 4,  respectively: 

1. Tapping on top of them, making them turn 45 degrees clockwise 
2. Bumping into them in the front, turning them 180 degrees. 

<div class="row"  style="padding-top: 20px; padding-bottom: 20px">
	<div class="col-md-6">
		<figure>
			<img class="img-responsive" alt="Mission start state" src="/public/assets/45-degree-turn-cartoon.png">
			<figcaption class="text-center">Figure 3. Tap on a robot to change their heading by 45 degrees.</figcaption>
		</figure>
	</div>
	<div class="col-md-6">
		<figure>
			<img class="img-responsive" alt="Mission start state" src="/public/assets/180-degree-turn-cartoon.png">
			<figcaption class="text-center">Figure 4. Land in front of a robot to change their heading by 180 degrees.</figcaption>
		</figure>
	</div>
</div>

The other 4 of the robots each carry a long cylinder (up to 2 meters) on top of them, and drive around in circles acting as annoying obstacles our drone has to avoid. 

Since the ground robots have a set of pre-programmed movements that execute continuously, our drone cannot simply point each ground robot towards the green line and forget about it. Because of the random nature of their movement, continuous observation and interaction is required to complete the challenge of getting all of the ground robots over the green line. 

Mission 7b is an extension of mission 7a that does not start until a sufficient number of teams complete mission 7a. . Mission 7b introduces an element of competition; two teams/drones now share an arena, competing head-to-head to guide their set of ground robots over their side of the arena. 

It should now be apparent that this mission sets high demands in regards to how the drone observes the environment, and plans and acts out its strategy. The arena is indoors and completely flat, so neither GPS nor [SLAM](https://www.google.com/url?q=https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping&sa=D&ust=1456487203231000&usg=AFQjCNELYTHadiBPpI8TVrSGE8TcWb8skQ) can be used. The next blog post will explain our approach to the problem. How we plan to use sensors and cameras to observe the environment, and advanced artificial intelligence to plan and execute the winning strategy. 
