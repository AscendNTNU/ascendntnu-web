---
layout: post
title: "Planning Update: How to get a drone to think"
date: 2017-02-14 12:00:00
categories: planning tech update
author: Vilde Gjærum & Adrian Tofting
---

![Flying dog](http://fpv.tv/wp-content/uploads/2015/12/Drone-take-your-dog-for-a-walk.jpg)

The planning group is working on creating an algorithm for how to solve the mission, i.e. making the drone autonomously decide what action it should do on which ground robot. We started working together in August and spent the first semester going through the rules, getting to know the problem and finally researching and brainstorming different solutions. This semester we are mainly working on two possible solutions we’ll outline in this blog.

Algorithm built on a fixed reward value field
-------------------------------------------
The first algorithm is simply put a greedy algorithm. It basically decides which ground robot to work with and what action to do based on how good the resulting position and angle of the ground robot is and how far away the robot is from the drone.

To choose the right action, the drone must consider all actions. There are two main actions the drone can perform - either land in front of the ground robot and make it turn 180 degrees, or land on top of it and turn it 45 degrees. However, these actions can be done at any time and so there’s a problem - there are infinitely many actions to choose from! This also results in infinitely many resulting positions for the ground robots. So, to make things a little easier for ourselves, we use an expected path to decide which action is the best. Which of the three possible actions(do nothing, land in front and land on top of ground robot) gives the best expected path for the ground robot.

When choosing which ground robot to work on we thought that a good idea would be to start with the robots closest to the green line. Getting these out of the court first also clears the way for the other ground robots and reduces the likelihood of collisions.

But how does one give an action or a position a value? Our solution was to assign a reward value to every point on the court. And we wanted these values to reflect the rules of the game, specifically the points we earn for guiding ground robots out of the grid: +2000 points for robots crossing the green edge, and -1000 for or other edges. 

The value field was made by making a 22x22 matrix, representing the 20x20 meter court with a frame around. The frame was given values equivalent to the points we get for sending a ground robot over the different lines in the competition. In essence, we put 2000 points above the green line and -1000 points outside the other lines. We then iterated through each element in the matrix and gave that element the average value of its neighbour, until the whole field converged.

![Value iteration](/public/assets/planning-update-1/value-iteration.gif)
<figcaption>Value iteration of the value field, where the z-axis show the grid values.</figcaption>

This valuefield worked just fine for its purpose, so we decided this was something worth spending more time on. We wanted to represent this value field as a function for faster and more accurate computation. In addition, an accurate matrix would require a lot of storage space, whereas the function requires next to none.
One way to do this is by Least Squares Method (LSM). In short, LSM finds the best fit for a continuous model of your choice to the discrete data you feed into it. As a simple example, look at the illustration below.

![Least Squared Method](/public/assets/planning-update-1/lsm-illustration.jpg)

Here, <tex>\\vec{b}</tex> is the data you want to describe with your chosen model <tex>\\vec{A}</tex>.
In our case <tex>\\vec{b}</tex> is the discrete grid values calculated earlier, and <tex>\\vec{A}</tex> is a general polynomial function with coefficients <tex>\\vec{x}</tex>.

So we want to find <tex>\\vec{x}</tex>, the coefficients that make <tex>\\vec{A}</tex> equal to <tex>\\vec{b}</tex>. Normally we would solve with <tex>A\\vec{x} = \\vec{b}</tex>. But in our illustration we can see that <tex>\\vec{b}</tex> is not parallel to <tex>\\vec{A}</tex>, thus there is no correct solution. We will therefore have to approximate a solution, and LSM gives us the solution where the sum of errors are the least. And which solution is this? The part of <tex>\\vec{A}</tex> that is closest to <tex>\\vec{b}</tex> of course: <tex>\\vec{b}_{||}</tex>

So try to keep up here, and I promise you will become a mathmagician.

We have:

<tex>\\vec{b} = \\vec{b}\_{||} + \\vec{b}\_{\\bot}</tex>, and we want to solve  
<tex>A\\vec{x} = \\vec{b}\_{||}</tex> , giving us  
<tex>A\\vec{x} = \\vec{b} - \\vec{b}\_{\\bot}</tex> , right? But how can we calculate <tex>\\vec{b}\_{\\bot}</tex>? Multiplying by <tex>A^{T}</tex> on both sides, we actually won’t have to.  
<tex>A^{T}A\\vec{x} = A^{T}\\vec{b} - A^{T}\\vec{b}\_{\\bot}</tex>  
<tex style="margin-left: 60px">\\Updownarrow</tex>  
<tex>A^{T}A\\vec{x} = A^{T}\\vec{b}</tex>

You see what I did there? If you remember the course TMA4115 you will know <tex>A^{T}\\vec{b}\_{\\bot}</tex> disappears because the dot product of orthogonal vectors **= zero**. So the least squares solution boils down to something that is quite easy to calculate with our given knowledge:

<tex>\\vec{x} = (A^{T}A)^{-1}A^{T}\\vec{b}</tex>

And did I mention it holds for all cases?!

Now let’s go back to our actual problem. By feeding the discrete grid values (<tex>\\vec{b}</tex>) into LSM we can estimate a continuous function (<tex>A\\vec{x}</tex>) that quite accurately represents the input. We can choose what function to approach the data with and started out with a linear function, and worked or way up to an 8th order polynomial. The following animation shows the resulting functions as the polynomial order increases from 1 to 8.


![Function Estimation](/public/assets/planning-update-1/function-estimation.gif)
<figcaption>Estimating a continuous function to the discrete value field.</figcaption>

In essence, the Least Squares Method finds the function that minimizes the sum of the errors (squared) between the input data and the resulting function. It is therefore interesting to look at the errors between the function and the data it represents. As the figure below shows, the errors decrease and gets evenly distributed as the polynomial order of A increases.

![Grid Function Error](/public/assets/planning-update-1/grid-func-error.gif)
<figcaption>Errors between the continuous function and the discrete values as the function gets more complex.</figcaption>

Using our value function we can calculate a reward for the ground robots resulting path given different actions at different time steps. Comparing these we now have a quick way of finding the best actions, which implemented looks something like this:

![v0.1.gif](/public/assets/planning-update-1/v0.1.gif)

Now the drone can make objective decisions on which robot to work with and what action it should perform on the robot. However, this is only the first stage of the algorithm, as the drone must be able to see further into the future to solve the problem more efficiently. This will lead to reduced traveling time and less actions to herd robots out of the court. But that will have to wait until another blog post. Meanwhile, here is a taxidermied cat converted into a drone.

![Cat drone](http://i.giphy.com/h5NXof7XfEYHm.gif)

Thanks for reading! 

Lots of love,

Planning
