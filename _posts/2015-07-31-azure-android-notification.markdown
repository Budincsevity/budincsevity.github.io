---
layout: post
title:  "Working with Azure Notification Hubs on Android and .Net backend"
date:   2015-07-31 01:30:00
categories: programming
---

Back in the old days there was just Azure Mobile Services. It’s still the best service in its category. And the main reason why we are using Azure at Tep. It supports offline sync, push notification sending, social authentication and scalable schema-less database. All off this are cross platform and there are open source SDKs for Windows, Android and iOS.

But time passes and everything changes. Except the documentation. Now to every new Mobile Service you can link a new Notification Hub. It makes it easy to push cross-platform, personalized messages to a single user, or to selected groups. A.k.a. Tags.

So if you want to integrate push notifications in your app you should use Notification Hubs instead of the old Mobile Services push service. In this post I want to show you the main code snippets you can use in your Android application and .NET backend.

##Registration

{% highlight java %}
//Register a new gcm ID
GoogleCloudMessaging gcm = GoogleCloudMessaging.getInstance(context);
String gcmID = gcm.register(SENDER_ID);

//New NotificationHub instance
NotificationHub hub = new NotificationHub("<hub name>", "<connection string>", context);

//Register your gcm ID with NotificationHub
NativeRegistration registration = hub.register(gcmID);
{% endhighlight %}

As you can see, the first step is to create a new Project in Google Developer Console, and your Project Number will be the SENDER_ID;

You can look for the hub name and connection string at your Notification Hubs instance in Azure Management Portal.

##Tags

Tags are like group names or unique identifiers. You can provide tags at the registration and in backend you can target all clients with the same tags.
{% highlight java %}
//Register a new gcm ID
GoogleCloudMessaging gcm = GoogleCloudMessaging.getInstance(context);
String gcmID = gcm.register(SENDER_ID);

//New NotificationHub instance
NotificationHub hub = new NotificationHub("<hub name>", "<connection string>", context);

//Register your gcm ID with NotificationHub
NativeRegistration registration = hub.register(gcmID, "tag");
{% endhighlight %}
##Send notification from C# backend
{% highlight csharp %}
var hubClient =
NotificationHubClient.CreateClientFromConnectionString("<connection string>", "<hub name>");

//JSON payload
var payload = "{ \"data\" : {\"msg\":\"Hello\"}}";

var tags = new List<string>(){ "tags" };

//Send push notification just to selected tags
hubClient.SendGcmNativeNotificationAsync(payload, tags);
{% endhighlight %}

For Android clients you must use JSON payload, but if you provide your platform specific templates, backend can send platform independent notifications.

{% highlight csharp %}

//Register a new gcm ID
GoogleCloudMessaging gcm = GoogleCloudMessaging.getInstance(context);
String gcmID = gcm.register(SENDER_ID);

//New NotificationHub instance
NotificationHub hub = new NotificationHub("<hub name>", "<connection string>", context);

 String template = "{ \"data\" : {\"msg\":\"$(message)\"}}";

//Register your gcm ID with NotificationHub
NativeRegistration registration = hub.registerTemplate(gcmID, "Template1", template, tag);
{% endhighlight %}


{% highlight csharp %}

var hubClient =
NotificationHubClient.CreateClientFromConnectionString("<connection string>", "<hub name>");

var expressions = new Dictionary<string, string>();
expressions.Add("message", "Hello");

//Send platform independent message to all devices
hubClient.SendTemplateNotificationAsync(expressions);
{% endhighlight %}

Templates are great for localized information or client dependent messages. For example Mary wants to receive weather information in F, but Jack in C.
