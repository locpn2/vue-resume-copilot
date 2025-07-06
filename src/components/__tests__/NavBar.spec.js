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
=======
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