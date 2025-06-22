# Active Context: Resume Copilot

## 1. Current Work Focus

- Developing detailed content for `HomePage` with personal information, experience, and skills.
- Enhancing `ContactPage` with comprehensive contact information.
- Developing `ChatPage` with AI integration for resume advice.
- Integrating CLI scripts for automation tasks.

## 2. Recent Changes

- Implemented Glassmorphism UI for main components.
- Set up routing for navigation between Home, About, and Chat pages.
- Integrated `ChatSuggestion.vue` component with suggestion data.
- Implemented logging module in main components (`App.vue`, `HomeView.vue`, `AboutView.vue`, `ChatPage.vue`).
- Set up unit testing with Jest and Vue Test Utils for components (`ChatSuggestion.vue`, `NavBar.vue`).
- Updated `progress.md` to reflect current project status.

## 3. Next Steps

- Develop detailed content for `HomePage` with personal information, experience, and skills.
- Enhance `ContactPage` with comprehensive contact information.
- Develop `ChatPage` with AI integration for resume advice.
- Integrate CLI scripts for automation tasks.

## 4. Active Decisions and Considerations

- Determining the best approach for AI integration with Gemini 2.0 for resume advice.
- Planning the structure and content for detailed resume sections in `HomePage`.

## 5. Important Patterns and Preferences

- Use PascalCase for component names.
- Use camelCase for variable names.
- Use kebab-case for file names.
- Follow the BEM naming convention for CSS classes.
- Write commit messages in English.

## 6. Learnings and Project Insights

- The `memory-bank` is crucial for maintaining project context and ensuring consistency.
- The `.clinerules` file helps enforce coding standards and project-specific rules.
- Implementing a modern UI design like Glassmorphism enhances user experience significantly.
- Unit testing early in development helps catch issues before they become significant problems.

## 7. Plan for developing `HomePage`

1.  Create the basic structure of the `HomePage.vue` component, including the template, script, and style sections.
2.  Implement the layout of the `HomePage` component, using the structure provided in the task description. This includes sections for AboutMe, Experience, Skills, and Projects.
3.  Create the `AboutMe.vue`, `Experience.vue`, `Skills.vue`, and `Projects.vue` components in the `src/components/sections/` directory.
4.  Import and register the `AboutMe`, `Experience`, `Skills`, and `Projects` components in the `HomePage.vue` component.
5.  Add Glassmorphism style to the `HomePage.vue` component.
6.  Create a `data.js` file in the `src/utils/` directory to store the data for the `HomePage` component.
7.  Import data from the `data.js` file into the `HomePage` component.
8.  Display the data in the `HomePage` component.
9.  Import the `logger` module from the `src/services/logging.js` file.
10. Add logging statements to the `HomePage` component to log page views and user interactions.
11. Create a `HomePage.spec.js` file in the `src/components/__tests__/` directory.
12. Write unit tests for the `HomePage` component to test the component's rendering, props, and event emission.
13. Run unit tests for the `HomePage` component.
14. Add a script to run the unit tests for the `HomePage` component in the `package.json` file.
15. Commit the changes to the Git repository with a descriptive commit message in English.
16. Run the project to ensure that the `HomePage` component is working correctly.
17. Push the changes to the remote Git repository.
