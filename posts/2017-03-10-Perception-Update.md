---
layout: post
image: /public/assets/planning-update-2/reward-system-context.jpg
title: "Perception Update: Deep learning in the Perception field of view"
date: 2017-02-20 12:00:00
categories: perception tech update
author: Ivar Thokle Hovden, Markus Pike
---

In this blog post, we will make a brief overview of our use of deep learning for ground robot detection. Almost analog to deep learning is Convolutional Neural Networks (CNNs), which are the new cool members of Artificial Neural Networks (ANNs). An ANN in its most simple form is a connectionist network containing multiple interconnected artificial neurons and activation functions, typically in a feed-forward fashion. The core advantage to using CNNs for object recognition and detection opposed to using older more conventional methods such as SIFT matching, circle detection and other appearance based techniques, is that we are less prone to various lighting and illumination disturbances.

The figure shows the most basic artificial neuron with the activation function f, which can be a threshold function in its most simple form.

![Artificial Neuron Function](/public/assets/perception-update-1/function.jpg)

Those artificial neurons are in fact, when put together in unimaginable amounts in very complex networks, the core components that can learn visual features in pictures. When inputting an RGB image in the network for which we know what the network should output, what basically happens is that the weight in each neurons is appropriately adjusted, so that they can learn to fire on pixel values such that the networks output comes close to the desired output. The desired output is often confidence values between [0,1] for each of the classes.

![Network Graph](/public/assets/perception-update-1/network-graph.jpg)
<figcaption>A decription of a fully connected(hidden) layer.</figcaption>

### Enough data for training.

Today's most accurate visual object detection systems are often associated with an extensive use of CNN. Due to their highly dimensional sub-symbolic nature, such networks can learn a lot of useful features in an image, if it is trained with enough data. That is where the "deep" part comes in. We make a black box learn to output if it is a red ground robot, green ground robot or nothing, with desired input. It is thus supervised learning. A lot of time has gone into making the data, which started with taking pictures of green and red roomba ground robots. Luckily, the process of training our first network was later done in a semi-supervised fashion, where we started with these pictures, then made a program to generate variants of each of these pictures (rotation, blurring etc.). An interactive correction of false negatives and false positives by altering training dataset was done using the NVIDIA Digits framework. At first, a we did transfer learning on a pre-trained AlexNet NN, a CNN that outperformed its competitors on the ILSVR 2012 competition with only 16% error rate, having its closest competitor at 26% error rate. Depicted is a similar smaller CNN following the same principles. Here, rectifier linear units (ReLU) are artificial neurons with rectifier activation functions stacked up in layers. Pooling is a type of dimensional reduction.

![Pooling](/public/assets/perception-update-1/pooling.jpg)

Then, using a sliding window approach, we got a very slow but accurate ground robot detector.

![Ground Robot Detection](/public/assets/perception-update-1/ground-robot-detection.jpg)

### Real-time.

Nevertheless, due to the sliding window approach, AlexNet was too slow for ground robot tracking (~1 minute computation time/total image). AlexNet was designed to take in low resolution images (128x128) and predict to which class it belongs, while we want to take in images not smaller than 640x480. In addition to detect robot in the image, we also wanted to find more of them, and their positions on the image. Despite low error on detection of robots, AlexNet with sliding window did not suffice in speed; we needed a faster network with similar performance on each of the robot detections.

Out of the pit then came the Single Shot Multibox Detection Network, which is basically a CNN like AlexNet plus additional convolutional layers where object detection on our pre-trained classes (red roomba, green roomba) are run with a fixed set of bounding boxes, on each convolutional layers. This is unconventional, since the typical classification in a neural network is done using fully connected layers as the last layers in the network. This network additionally tests classes in the convolutional layers using a fixed set of bounding boxes, as seen in the following picture.

![Feature Mapping](/public/assets/perception-update-1/feature-mapping.jpg)

Following the nature of a CNN, when doing convolutions on the features, the network will learn features on increasingly larger scale (in the input picture), the more deeper layer you are into the network. In the picture, the dog is detected later in the network than the cat. We have previously succeeded running a 200 classes distinguishing caffe version of the SSD network on a NVIDIA Jetson TX1 card on 6 fps. The modified SSD network will hopefully run with higher fps, as we only need 2 classes (red, green gr. r.).

![SSD VS. YOLO](/public/assets/perception-update-1/ssd-vs-yolo.jpg)
<figcaption>You Only Look Once (YOLO) network, a similar much appraised one, is shown for comparison.</figcaption>

### Parallelism.

The basic algorithm used to train such networks, I.e. adjusting the weights, is called backpropagation. This training procedure can be done with high parallelism, thus it is a huge trade-off investing in high-end GPUs compared to CPUs. We have made use of various high end NVIDIA GPUs in our labs. Ascend NTNU's upcoming quadrotor will most likely contain 3 NVIDIA Jetson cards (TX1/TX2), which is quite impressive to have on a flying machine, although the training procedure itself will be done on faster computers.

### The course.

What is left with this work, is to get a real-time or near real-time ground robot tracking system that is just as robust against illumination, occlusion etc. as AlexNet with a sliding window approach. To do so, the SSD network shall be re-trained with our robot data on the convolutional parts shown in the figure after the box with stipples. The CNN in this box is, again, a complex CNN trained on a huge image dataset such as ImageNet, with its last fully connected (classifier) layers removed. We are really looking forward to have such an accurate and robust CNN object recognition and detection system running at a sufficiently high framerate.
