---
layout: post
title:  "Google Photos Compression"
date:   2015-09-25 11:30:00
categories: review
---

On IO Google unveiled the new Photos service. It's the third (?) attempt from Google, after Picasa and Google+ Photos, to make it easier to upload and organize your photos online.
Or offline if you are using one of their apps. With Photos you get an unlimited storage for your photos and videos. Up to photos with 16MP resolution and Full HD videos.

But there is a thing. Google compress all you photos after uploading them. All of them. Even below 16MP resolution. Can you notice the difference between compressed and original photos?
I compared a couple of photos and here are the results.

Image from  | Size | Resolution
--- | --- | ---
Original | 8,1 MB | 18 megapixel
Google Photos | 2,4 MB  | 16 megapixel

![Original](https://github.com/Budincsevity/budincsevity.github.io/raw/master/assets/images/original1.JPG "Original")

![Downloaded from Google Photos](https://github.com/Budincsevity/budincsevity.github.io/raw/master/assets/images/gp1.JPG "Downloaded from Google Photos")

The first one is the original, and the second one is from Google Photos. I can't see any difference. Let's go deeper.

![Original](https://github.com/Budincsevity/budincsevity.github.io/raw/master/assets/images/original2.jpg "Original")

![Downloaded from Google Photos](https://github.com/Budincsevity/budincsevity.github.io/raw/master/assets/images/gp2.jpg "Downloaded from Google Photos")

Again the first one is cropped from the original photo, and the second one is from the downloaded one. Maybe if you have good eyes, and zoom in a little you can spot some differences. Image from Photos is softly blurred.



Once I wrote a small script in Matlab, what I used to solve "Spot the differences" games. Let's try that script on these images. You can download the source code from my [Github repository](https://github.com/Budincsevity/Spot-the-difference).
