# Serverless GraphQL AppSync & RDS implementation 

## Introduction

I am a co-founder of [getsby](https://gets.by/) and I'm currently developing a GraphQL service for us. In our development process I encountered several difficulties concerning the serverless framework in combination with AWS AppSync & RDS. We finally got our service up running and therefore I want to share my achievements with the community.

## Getting Started

This repository provides an example implementation of a GraphQL endpoint with AWS AppSync & RDS using the [serverless framework](https://serverless.com/).

### Prerequisites

You'll need the following things to get started:
- A database with some sampledata (Use our *db.sql* for this example)
- Fill in the blanks in the *serverless.yml* file
- Grab yourself a cup of coffee 

### Installing

Install all the dependencies:

```
yarn install
```

## Deployment

To deploy the service simply run the following command:

```
serverless deploy
```

## Testing

Test your new deployed service in the AppSync console or connect a client to it.

## Authors

* **Lukas Wittich** - [getsbydev](https://github.com/getsbydev)

## Acknowledgments

* To accomplish our goal I carefully read the majority of the examples provided in the [serverless/serverless-graphql](https://github.com/serverless/serverless-graphql) repository and combined the gained knowledge in our implementation. I really appreciate the work you guys did there, thank you!
* If you have any questions or feedback feel free to contact me 
