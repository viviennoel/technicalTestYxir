## Getting Started

First install the dependencies and run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

# Learn More

**Below, I'll detail what has been accomplished and what aspects are yet to be implemented for the project's readiness for MEP & delivery. Due to time constraints, I couldn't cover everything I wanted, but I'm eager to discuss further in the interview. I think it can be very interesting to discuss all the aspects of this project. For this purpose, I gathered bellow the mains points highlighted by the ADR**

### Accomplishments
In this technical test, I focused on creating a simple dashboard for displaying industrial information using Next.js's app/router to optimize performance. By leveraging server components, we adopt a server-side-first approach to enhance rendering performance. Although this approach adds complexity to the project's architecture, it allows for a balanced optimization between server and client components. Data can be securely fetched and cached from server components, optimizing user experience, while client components facilitate user interaction.

I prioritized building a clean and scalable architecture over implementing user profile management and route handling in this test.

### Key features of the project include:

Utilization of Next.js to create server components and client components for optimized loading and user interaction.
Exploration of server components, client components, and API handlers.

## Remaining Tasks
Testing
Testing coverage is critical for ensuring the reliability of the application. Although I couldn't perform Test-Driven Development (TDD) due to time constraints, I prioritize thorough testing before the MEP phase.

### Proposed testing strategies include:

- **Unit Testing**: High-level tests for Next.js components to minimize duplication and ensure user stories are met. Integration with tools like SonarCloud and eslint-plugin-testing-library for code coverage and best practices adherence.
- **Integration Testing**: Verification of server responses to ensure API health and correct data retrieval.
- **End-to-End Testing with Cypress**: Covering critical user stories to validate the application's main functionalities.

## Authentication
Implementation of authentication using next/auth to protect user data. Consideration of stronger authentication mechanisms, such as Active Directory security groups and Akamai, for comprehensive user authentication management.

## Tracking & Logging
Inclusion of tracking mechanisms for measuring success KPIs and logging for debugging and performance analysis purposes.

## Project Settings (Linter, Prettier)
Configuration of project standards, including linting and formatting rules, to ensure consistency and alignment across team members.

## CI/CD Integration
Automatic deployment using GitHub Actions (GitHub Pages). Although not implemented yet, setting up CI/CD pipelines is crucial for streamlining development workflows.
