import { shallowMount } from "@vue/test-utils";
import { createStore } from 'vuex'

import Contador from '@/components/Contador'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count += 1
    }
  }
})

test('vuex', async () => {
  const wrapper = shallowMount(Contador, {
    global: {
      plugins: [store]
    }
  })

  await wrapper.find('button').trigger('click')

  expect(wrapper.html()).toContain('Count: 1')
})