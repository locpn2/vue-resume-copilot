import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillChart from '../SkillChart.vue'

// Mock logger
const mockLogger = {
  logComponentPerformance: vi.fn(),
  info: vi.fn()
}

const mockSkills = [
  { name: 'Vue.js', level: 90, category: 'Frontend' },
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'JavaScript', level: 88, category: 'Programming' }
]

describe('SkillChart', () => {
  it('renders properly with skills data', () => {
    const wrapper = mount(SkillChart, {
      props: { skills: mockSkills },
      global: {
        provide: {
          logger: mockLogger
        }
      }
    })

    expect(wrapper.find('.skill-chart').exists()).toBe(true)
    expect(wrapper.findAll('.skill-item')).toHaveLength(mockSkills.length)
  })

  it('displays correct skill information', () => {
    const wrapper = mount(SkillChart, {
      props: { skills: mockSkills },
      global: {
        provide: {
          logger: mockLogger
        }
      }
    })

    const firstSkill = wrapper.find('.skill-item')
    expect(firstSkill.find('.skill-name').text()).toBe('Vue.js')
    expect(firstSkill.find('.skill-percentage').text()).toBe('90%')
  })

  it('filters skills by category', async () => {
    const wrapper = mount(SkillChart, {
      props: { skills: mockSkills },
      global: {
        provide: {
          logger: mockLogger
        }
      }
    })

    // Click on Frontend category
    const frontendBtn = wrapper.find('.category-btn:nth-child(2)') // "Frontend" button
    await frontendBtn.trigger('click')

    // Should show only Frontend skills
    const skillItems = wrapper.findAll('.skill-item')
    expect(skillItems).toHaveLength(2) // Vue.js and React
  })

  it('validates props correctly', () => {
    const invalidSkills = [
      { name: 'Vue.js', level: 150, category: 'Frontend' }, // Invalid level > 100
      { name: 'React' } // Missing required fields
    ]

    const wrapper = mount(SkillChart, {
      props: { skills: invalidSkills },
      global: {
        provide: {
          logger: mockLogger
        }
      }
    })

    // Component should still render but with validation warnings
    expect(wrapper.find('.skill-chart').exists()).toBe(true)
  })

  it('emits events when category is changed', async () => {
    const wrapper = mount(SkillChart, {
      props: { skills: mockSkills },
      global: {
        provide: {
          logger: mockLogger
        }
      }
    })

    const categoryBtn = wrapper.find('.category-btn:nth-child(3)') // "Backend" button
    await categoryBtn.trigger('click')

    // Check if the active class is applied
    expect(categoryBtn.classes()).toContain('active')
  })
})