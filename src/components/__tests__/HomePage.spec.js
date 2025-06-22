import { mount } from '@vue/test-utils'
import { test, expect, vi } from 'vitest'
import HomePage from '../../views/HomePage.vue'

// Mock the logger module
vi.mock('../../utils/logger.js', () => ({
  logger: {
    logPageView: vi.fn()
  }
}))

test('renders the HomePage component', () => {
  const wrapper = mount(HomePage)
  expect(wrapper.find('.home-page').exists()).toBe(true)
})
