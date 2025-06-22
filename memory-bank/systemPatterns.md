# System Patterns: Resume Copilot

## 1. System Architecture

The Resume Copilot application follows a component-based architecture, with Vue.js components responsible for rendering the user interface and handling user interactions. The application uses Vue Router for navigation between pages and may use a centralized data store (e.g., Vuex or Pinia) for managing application state.

## 2. Key Technical Decisions

- Using Vue.js for frontend development.
- Using Vue Router for navigation.
- Using CSS Modules for component-specific styling.
- Using Axios or Fetch for making API requests.
- Using Jest and Vue Test Utils for unit testing.

## 3. Design Patterns in Use

- Component-based architecture
- Model-View-Controller (MVC)
- Singleton
- Observer

## 4. Component Relationships

- `App.vue` is the root component.
- `HomePage.vue`, `ContactPage.vue`, and `ChatPage.vue` are the main pages.
- `NavBar.vue` provides navigation between pages.
- `SkillBar.vue` displays skill levels.
- `ChatSuggestion.vue` displays chat suggestions.

## 5. Critical Implementation Paths

- User navigates to `HomePage.vue` and enters personal information.
- User navigates to `ContactPage.vue` and views contact information.
- User navigates to `ChatPage.vue` and interacts with the AI chat assistant.
- User selects a resume template and exports their resume.
