<<<<<<< HEAD
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '../NavBar.vue'

// Mock logger
const mockLogger = {
  info: vi.fn(),
  logUserInteraction: vi.fn()
}

// Create a mock router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/contact', component: { template: '<div>Contact</div>' } }
  ]
})

describe('NavBar', () => {
  it('renders navigation items correctly', () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router],
        provide: {
          logger: mockLogger
        }
      }
    })

    expect(wrapper.find('.nav-logo').exists()).toBe(true)
    expect(wrapper.find('.logo-text').text()).toBe('Resume')
    expect(wrapper.find('.logo-accent').text()).toBe('Copilot')
    
    const navLinks = wrapper.findAll('.nav-link')
    expect(navLinks).toHaveLength(6) // 6 navigation items
  })

  it('toggles mobile menu when hamburger is clicked', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router],
        provide: {
          logger: mockLogger
        }
      }
    })

    const menuToggle = wrapper.find('.nav-toggle')
    const navMenu = wrapper.find('.nav-menu')

    // Initially menu should be closed
    expect(navMenu.classes()).not.toContain('active')

    // Click to open menu
    await menuToggle.trigger('click')
    expect(navMenu.classes()).toContain('active')

    // Click again to close menu
    await menuToggle.trigger('click')
    expect(navMenu.classes()).not.toContain('active')
  })

  it('closes mobile menu when nav link is clicked', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router],
        provide: {
          logger: mockLogger
        }
      }
    })

    // Open menu first
    await wrapper.find('.nav-toggle').trigger('click')
    expect(wrapper.find('.nav-menu').classes()).toContain('active')

    // Click a nav link
    await wrapper.find('.nav-link').trigger('click')
    expect(wrapper.find('.nav-menu').classes()).not.toContain('active')
  })

  it('logs user interactions', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router],
        provide: {
          logger: mockLogger
        }
      }
    })

    // Click menu toggle
    await wrapper.find('.nav-toggle').trigger('click')
    expect(mockLogger.logUserInteraction).toHaveBeenCalledWith('menu_toggle', 'open', 'NavBar')
  })
})
=======
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import NavBar from '../NavBar.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/about', name: 'about', component: { template: '<div>About</div>' } },
    { path: '/chat', name: 'chat', component: { template: '<div>Chat</div>' } }
  ]
});

describe('NavBar', () => {
  it('renders navigation links', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router]
      }
    });
    await router.isReady();
    expect(wrapper.text()).toContain('Home');
    expect(wrapper.text()).toContain('About');
    expect(wrapper.text()).toContain('Chat');
  });
});
>>>>>>> master
