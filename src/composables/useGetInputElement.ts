import { ref } from 'vue-demi'

export const inputEl = ref<HTMLInputElement | null>(
  document.getElementById('__canvue_input_dom')! as HTMLInputElement,
)

export const useSetInputElement = () => {
  if (!inputEl.value) {
    inputEl.value = document.createElement('input')
    inputEl.value.id = '__canvue_input_dom'
    document.body.appendChild(inputEl.value)
  }
}
