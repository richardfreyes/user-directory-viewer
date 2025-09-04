# Front-End Technical Test: React + TypeScript + PrimeReact

How to Run the App with local server (http://localhost:3001/users)
1. Clone the repository.
2. Run npm install.
3. Run npm run server.
4. Run npm run start:local.
5. The application will be available at http://localhost:5173.

How to Run the App using online public endpoint (https://jsonplaceholder.typicode.com/users)
1. Clone the repository.
2. Run npm install. (skip if you already have the node_modules)
3. Run npm run dev.
4. The application will be available at http://localhost:5173.

How to Start Storybook
1. Run npm install. (skip if you already have the node_modules)
2. Run npm run storybook.
3. Storybook will open in your browser, typically at http://localhost:6006.

Time Spent on the Challenge
1. User List Page: 0.5 hour
2. User Detail Page: 0.5 hour
3. Routing: 0.5 hour
4. Storybook Setup & Story: 0.5 hour
5. Local Server 0.5 hour
6. Testing 0.5 hour

Decisions and Trade-offs
1. Vite: Vite was chosen for its faster build times and simpler configuration.
2. PrimeReact: The DataTable and Card components were used to quickly implement the UI, following the test's requirements.
3. API Service: Centralizing the API calls in a separate file (src/api/users.ts) improves code organization and reusability.
4. Basic Loading/Error States: Implemented basic loading and error handling to show awareness of real-world scenarios, even though they were optional.
5. PrimeFlex: Used PrimeFlex utility classes for simple layout and spacing (e.g., flex, p-5) to avoid custom CSS.


Richard Frey Utulo Reyes
