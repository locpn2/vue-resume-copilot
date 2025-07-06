import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ChatSuggestion from '../ChatSuggestion.vue';

describe('ChatSuggestion', () => {
  it('renders suggestion prop', () => {
    const suggestion = 'Test suggestion';
    const wrapper = mount(ChatSuggestion, {
      props: { suggestion }
    });
    expect(wrapper.text()).toContain(suggestion);
  });
});
