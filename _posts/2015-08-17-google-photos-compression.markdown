---
layout: post
title:  "Google Photos compression"
date:   2015-09-25 11:30:00
categories: review
---

On IO Google unveiled the new Photos service. It's the third (?) attempt from Google, after Picasa and Google+ Photos, to make it easier to upload and organize your photos online.
Or offline if you are using one of their apps. With Photos you get an unlimited storage for your photos and videos. Up to 16MP resolution photos and Full HD videos.

But there is a thing. Google compress all your photos after uploading them. All of them. Even below 16MP resolution. Can you notice the difference between compressed and original?
I compared a couple of photos and here are the results.

Original photos resolution is 18 megapixel and it has 8,1 MB size. Image from Google Photos is compressed to 2,4 MB and downscaled to 16 megapixel.

![Original](https://github.com/Budincsevity/budincsevity.github.io/raw/master/assets/images/original1.JPG "Original")

![Downloaded from Google Photos](https://github.com/Budincsevity/budincsevity.github.io/raw/master/assets/images/gp1.JPG "Downloaded from Google Photos")

The first one is the original, and the second one is from Google Photos. I can't see any difference. Let's go deeper.

![Original](https://github.com/Budincsevity/budincsevity.github.io/raw/master/assets/images/original2.jpg "Original")

![Downloaded from Google Photos](https://github.com/Budincsevity/budincsevity.github.io/raw/master/assets/images/gp2.jpg "Downloaded from Google Photos")

Again the first one is cropped from the original photo, and the second one is from the downloaded one. Maybe if you have good eyes, and you zoom in a little you can spot some differences. Image from Photos is softly blurred.

Once I wrote a small script in Matlab, what I used to solve "Spot the differences" games. Let's try that script on these images. You can download the source code from my [Github repository](https://github.com/Budincsevity/Spot-the-difference).

Here is the result of the script:
![Result](https://github.com/Budincsevity/budincsevity.github.io/raw/master/assets/images/result.png "Result")

The red rectangles are showing the differences between two images. The script uses Matlab's built in graytresh() method to create the binary image above the treshold. So the result shows that the algorithm used compressing the photo is so great. Nearly lossless. But it depends on your treshold level.

This post was written just for fun. I know that maybe this is not a fair comparison. And the result can be so different for other images. But I was curious about compression (should I backup all my images to Photos and compress all of them), and it was fun to use my 'Spot the differences' script for this problem.
