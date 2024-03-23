## Getting Started

First install the dependencies and run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

# Learn More

**The following section explains what have been done and what remains to be done to be a project ready for MEP & delivery. Because of the time constrain, I was not able to do everything I wanted. But I would be very happy to discuss it together as it would be necessary to implement it**

## What I have done in this test

In this test, I focused on the creation of a simple dashboard for the display of industrial information.
I used the app/router from next to optimize the performances. The server components allow us to have an approach serverside first and optimize the performances.
This approach complexifies a little the architecture of the project, because we need to balance between the server components and client components.
Data can be fetched securely, and cached from server components optimizing the rendering performances for the user, while the client components are necessary to interact with the user. There components would call the route handler (/api) -> Read more https://nextjs.org/docs/app/building-your-application/routing/route-handlers.

I didn't get into the creation of these routes and the management of user profile as I prefered prepare a clean and scalable architecture for the project.

I have created a NextJs application that gives us the opportunity to create server components and client components to optimize the loading experience while allowing to user to interact with his application.

This test explores the creation of server components, client components, and api handlers.

## What remains to be done

### The tests

The components are not tested as I didn't take the time to do TDD work. This part is for me critical and I would not allow a MEP without proper testing coverage. To be discussed in interview?

I would have liked to implement 3 testing strategies:

###### Unit testing for the components
- These tests would be better high level for NextJs components in order to minimize duplication. In __tests__ folder, create a 'ConponentName.test.tsx'. Use a setup to render the component and then screen.getByText('') to find your elements. Assess your user stories.
- The tool sonarCloud is really interesting for testing the code coverage on PRs (possibility to make it mandatory and to determin a minimum coverage)
- eslint-plugin-testing-library is an ESLint plugin for Testing Library that helps users to follow best practices and anticipate common mistakes when writing tests. It is very useful!
- In order to avoid mocking, I generally use MSW (avoiding too big solicitation of the API).

###### Integration testing to test the server response
Because API response needs to be fitting the intrface with the front to display data, the integration tests need to  run to make sure the server is healty and the data returned is correct. These tests sollicitate the API and can be run as chon.

###### End-to-End testing with cypress
These tests are done to tests the main user stories so the critical paths are covered. The main difficulty is the time of execution, as they can become a bottleneck in the PR merging process if blocker. If not, a team strategy has to be determined to maintain them.

### The authentification

Using next/auth, the authentification is necessary to protect the user's data.
I will protect the front byt need to be applied as well as a middleware next to protect the route handlers.
I guess that a stronger authentification manager system is used at Yxir. I have experience with Active Directory security groups & Akamai for user authentification gestion.

### The tracking & logging

The tracking is mandatory in order to measure the success KPI of development.
The logging is mandatory to debugg in prod and be reactive in case of an issue (as well to analyse our performances for example...)

### The project setting (linter, prettier)

The setting of a project take a little time in order to fromalize the standards and align everyone on the way to work and code.
I didn't do much, there is a lot of opportunities but I would be happy to discuss it in the interview.
When working on a project with the team, need to create a branch for each ticket & PR before validation and merge.

### The connexion to the CI/CD

deployment automatic with github action (on github pages). I didn't have the time to implement it.