---
title: "REST vs. GraphQL"
date: "01-06-2020"
tags: ["GraphQL", "Web Development"]
summary: "In this article, I briefly talk about what REST API and GraphQL API are and make a comparison using a very simple example."
---

1, 2, 3... Fight!

#### RESTful Routing

REST is an acronym for **RE**presentational **S**tate **T**ransfer.

To explain this, I'll be using a very simplified and modified version of the superb example given in [this](https://www.infoq.com/articles/webber-rest-workflow/) article that explains REST workflow: how to get a cup of coffee from Starbucks, with a RESTful approach. And that example is taken from [this](https://www.enterpriseintegrationpatterns.com/ramblings/18_starbucks.html) awesome blog post if you're interested. If you have time, definitely read these articles; if not, stick with me for a little bit.

So as a customer, you enter Starbucks and this action starts the whole process. You want to get a cup of coffee.

There are many workflows in this scenario, and we'll discuss a few.

The first workflow belongs to the customer, which looks like this:

1. Place order
2. Update order (if necessary)
3. Pay
4. Get the drink
5. Drink

In most of the Starbucks' I have seen nowadays, one person stays behind the cashier and creates orders and takes payment, and the beverage orders become empty cups that form a queue, while another person just deals with the food orders (whom we are going to ignore, just for convenience's sake). This way, the order creation, and beverage preparation gets decoupled, and for the more busy hours the store can hire more baristas, and the customer's orders can be taken very fast, so they don't walk away saying 'it's too crowded anyway'.

The second workflow belongs to the barista behind the cashier, which looks like this:

1. Create order
2. Take payment
3. Prepare a cup for the queue

The third workflow belongs to the barista that's preparing your order, which looks like this:

1. Take the order from the queue
2. Make the drink
3. Give the drink to the customer, or leave it to a place where they can find it
4. Go to the next order in line or end shift

Let's dissect these actions in a web context. You enter Starbucks, and as a customer, you need to order in a way that the barista taking your order can understand (POST request). The barista that is taking care of you will create the order, and then will ask for payment. At this point, as the customer, you should be sure that it is what you want. If not, you need to update (PUT or POST request) or cancel (DELETE request) your order. At any point of this conversation, requests can fail, (the payment can fail, the customer and cashier might not understand each other and repeat a conversation, etc.) but either way, the communication between the coffee shop and the customer here is synchronous.

If the order is created and the payment is successful, the preparation step will continue. This step is asynchronous, it will finish whenever it can, and it might not take the same amount of time every time. The person preparing the beverages might be slower or faster, or the machines that are being used might stop working for a while, or they might have to prepare an ingredient. And if there are 2 baristas preparing orders at the same time using different machines, the drink orders might not be guaranteed as well. (Maybe you ordered a white chocolate mocha and the person after you ordered drip coffee.)

The barista that's preparing the beverages first has to see the orders (line of cups, GET request). Then, needs to do whatever needs to be done and bring the result (the beverage) back.

Another thing to be mentioned is this: You need to be in the right place to do certain stuff. You need to go to the cashier to create an order, and you need to be somewhere else to take your beverage. So the place you request certain things also matter. In the web context, this is a specified URL for you to be requesting that stuff.

In this coffee shop, the customer is the end-user (or client) and both of the baristas are the server. You request something synchronously or asynchronously, they respond successfully or fail. Either way, you need to talk the same language (even hand gestures are enough if both sides can understand it) and you need to make requests that make sense. (Can't go to a Starbucks and ask for an elephant ride. Or maybe you can. I never tried.)

So to summarize, given a collection of records on a server, RESTful routing should provide a uniform URL and consistent HTTP request methods to read (GET), create (POST), update (PUT), or delete (DELETE) those records.

#### What is GraphQL?

GraphQL provides a common interface between the client and server for data fetching and manipulation. So GraphQL is actually meant to cover everything that a REST API does.

There are multiple reasons why developers prefer GraphQL over REST.

Let's assume that we have a website that users create posts and others can comment on these post. (Like probably most websites you use today. Not hard to imagine is it?) As the developer that's responsible for the front end of this website, you want to show the user page with the posts the user has created and comments that were made.

First, we'll tackle this situation with REST.

To reach the user information you have to send request to a certain endpoint, such as this: `users/:id/about`. To retrieve the posts that belong to that user, you have to reach another endpoint, such as this: `users/:id/posts`. To retrieve a certain post that belongs to a single user, you need to hit another API endpoint, that might look like this: `users/:id/posts/:id`, and to read the comments on this specific post, you need to hit this endpoint: `users/:id/posts/:id/comments`. As the relations get complicated, REST endpoints get complicated as well. Also, do you see the amount of the API endpoints we have to hit to just render a single page? If you want to avoid hitting to this many endpoints, you can reach an endpoint such as `users/:id` that possibly brings all the data you have of that user, but inside there might be other sorts of data that you don't actually care about, so you'll be overfetching this time.

Now let's fetch the same data with a GraphQL API. With GraphQL, queries have a "strongly typed schema", and a graphQL schema clearly defines what you can do using that API. (You actually can do 3 things, query, mutate or subscribe, but we'll get there.) GraphQL schemas are written in GraphQL Schema Definition Language (SDL), and clearly defines the API in a structured way. To do the same thing as above with GraphQL, we only need a single query that looks like this:

```
query{
  user(id: "26") {
    username
    email
    location
    posts {
      body
      comments {
        comment
      }
    }
  }
}
```

And the response would look like this:

```
    {
      "data": {
        "user": {
          "name": "cakebatterandsprinkles"
          "email": "cakebatterandsprinkles@gmail.com"
          "posts": [
            {
              "title": "How to build a collaborative note app using Laravel",
              "comments": [
                {
                  "comment": "Great article."
                }
              ]
            },
            {
              "title": "Event-Driven Laravel Applications",
              "comments": [
                {
                  "comment": "I love event driven applications! :)"
                }
              ]
            }
          ]
        }
      }
    }
```

With one single query, we got all the information we need. This means no more multiple network requests, and no more over/underfetching data. As they have a REST API's are schemaless, meaning you

#### Resources:

1. [How to GET a Cup of Coffee](https://www.infoq.com/articles/webber-rest-workflow/) by Savas Parastatidis, Ian Robinson and Jim Webber
2. [Starbucks Does Not Use Two-Phase Commit](https://www.enterpriseintegrationpatterns.com/ramblings/18_starbucks.html) by
3.
