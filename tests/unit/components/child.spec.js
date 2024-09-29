import { shallowMount } from "@vue/test-utils";
import Child from '@/components/Child.vue'

test('sets the value', async () => {
    const wrapper = shallowMount(Child)
    const input = wrapper.find('input')
  
    await input.setValue('Algún texto')
  
    expect(input.element.value).toBe('Algún texto')
  })