---
layout: post
title:  "Tech: How we see the world (Part 1)"
date:   2016-02-08 10:00:00
categories: tech computer vision
author: Simen Haugo
---

Asking the questions that really matter, and then not answering them.

How we see the world (Part 1)
-----------------------------
As many of our readers are surely aware, here at Ascend we are building a robot that can not only observe and reason about the world, but also take actions to modify it on its own volition. Clearly, this does not come free in terms of the moral and ethical questions that arise. For this reason, we will dedicate the next ten blog posts solely to discussing our responsibility towards mankind and its surrounding nature --- digging deep into the questions that really matter around here, such as *"What does really it mean to be rational"* and *"What about global warming?"*

...

No, wait! I'm just kidding, don't close the tab!

Despite how *exciting* it would be for you, dear reader, to read through such a discussion without falling asleep, we feel like questions about morals and ethics and stuff like that can be *temporarily pushed onto the stack*, while we focus on cranking out the technical details first.

(The above sentence will hopefully *not* appear in future history books with the caption *" --- last words from the organization that built the AI that took over the world"*)

Instead, we thought we should take a break from all this AI stuff, and tell you all a thing or two about our drone's perception algorithms --- how we
distinguish order from chaos in the flood of bits and bytes streaming into
our sockets.

Where are we?
-------------
As is often the case in life, you need to know where you are at the moment in order to make good decisions about where to go next. Our drone shares some of our life issues, and our team is currently working hard to solve the --- surprisingly difficult --- problem of figuring out where the drone is on the arena.

To aid us in answering this tough question, we have equipped our drone with so much expensive equipment that it makes us kinda nervous. That includes

* a downward-pointing laser, telling us how high up we are,
* an inertial measurement unit, telling us how fast we are moving,
* and multiple color cameras.

We actually maxed out the USB capacity on our device after two cameras, so we were all kinda bummed out about that. We haven't nailed down the list of equipment or their connections yet, so I'll save that for a future post.

There's also the problem of recognizing the roomba robots. But we haven't really begun on that yet, so let's take the position estimation first.

So, it kinda works like this
----------------------------
The arena, as you know, has a grid of 1x1 meter tiles. On each side of the arena is a strip of thick tape, colored either red, white or green. What we want to do is to estimate which tile we are within at any point in time.

![The arena](/public/assets/tech-how-we-see-1/world-frame.png)

To do this, we have attached a camera that can see below the drone. On the video feed we run some clever algorithms that extract sets of lines. After we have found those lines, we essentially need to solve a *"triangulation"* problem.

![What we see](/public/assets/tech-how-we-see-1/tileframe.png)

Suppose that the camera sees the white region, in particular, atleast one of the line intersections.

![Picking out lines](/public/assets/tech-how-we-see-1/tileframe-2.png)

Our vision algorithm picks out the lines that it sees. We know how these lines are configured in the real world, because they are located on a regular grid.

As we see them, the lines are just projected onto the camera lens, so we need to do some math to find the corresponding lines on the real arena. The way we do this is by placing an *"virtual camera"*, with the same orientation and height as the drone, into an *"virtual arena"*.

![Projection](/public/assets/tech-how-we-see-1/projection.png)

We then use a very simple camera model, where a plane is located in front of the virtual camera, seperated by a distance equal to the lens' focal length. The image that we see on our screen is formed by "splatting" the geometry in front of the camera onto the plane.

We then invert the equation that maps lines from the flat plane onto the camera lens, to determine where the lines we see originated from. This is done by solving the equation for a line-plane intersection. For any point in the image, we can draw a line originating from the center of the camera, intersecting the image plane at a known point, and the arena floor at an almost unknown point --- we know that the height is zero at the floor.

![Final answer](/public/assets/tech-how-we-see-1/tileframe-4.png)

Solving for the unknown point, from the point on the image plane that we know from the lens parameters and the height above ground, and the line direction that we know from the drone orientation, we compute how far away we are from the pair of lines.

Reality kicks your butt
-----------------------
Unfortunately, I skipped over a bunch of technical details in the above explanation. It all sounds nice on paper, but at the end of the day someone's gotta program the thing.

Here's a video I recorded at our lab the other day. In an attempt to somewhat reproduce the competition at home, we have not only bought in a handful of vacuum cleaner robots, but we have also created an elaborate grid of sticky tape.

<p style="text-align: center;" ><video style="margin: 0 auto;" src="/public/assets/tech-how-we-see-1/scaled.mp4" width="480" height="270" controls></video></p>

This is, part, what our drone will be seeing. We think we need more cameras, but we're pretty sure we'll have one pointing downwards like this. Naturally, you have no problem working out how big the grid was, or how many tiles I walked in that video. But that's thanks to the many years of intense grid-position-estimation training you've done, right?

Sadly, our drone skipped out on his practice as a kid, so he spends most of his waking time in a confused state, unable to tell lines apart from shoes.  For now, it is up to us to take the video feed, point at a group of pixels, and tell our drone: *"That right there, yeah, that's a line. And that line ... intersects this other line ... here!"*.

Doing that involves somehow encoding all of our line detection wisdom, into a .cpp file which is further compiled into CPU instructions.

I'll let you grind your gears on that one until next time, when I venture into the world of low-level image processing.

As always, thanks for reading! If you would like to get a notification whenever we post a new article or share some interesting news, you might want to follow us on our social media channels, listed at the bottom of this page.
