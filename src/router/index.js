<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
=======
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ChatPage from '../views/ChatPage.vue';
>>>>>>> master

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
<<<<<<< HEAD
      component: HomePage,
      meta: { title: 'Trang Chủ - Resume Copilot' }
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperiencePage.vue'),
      meta: { title: 'Kinh Nghiệm - Resume Copilot' }
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsPage.vue'),
      meta: { title: 'Kỹ Năng - Resume Copilot' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsPage.vue'),
      meta: { title: 'Dự Án - Resume Copilot' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactPage.vue'),
      meta: { title: 'Liên Hệ - Resume Copilot' }
    },
    {
      path: '/chat-ai',
      name: 'chat-ai',
      component: () => import('../views/ChatPage.vue'),
      meta: { title: 'AI Copilot - Resume Copilot' }
    },
    // Redirect old about route
    {
      path: '/about',
      redirect: '/contact'
    }
  ],
})

// Navigation guard để cập nhật title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Resume Copilot'
  next()
})

export default router
=======
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatPage
    }
  ]
});

export default router;
>>>>>>> master
