import { h, ref } from 'vue-demi'

const inputElStyle = ref({
  top: '0px',
  left: '0px',
  width: '0px',
  height: '0px',
  opacity: 0,
})

const renderInput = () => h(
  'input',
  {
    id: '__canvue_input_dom',
    style: {
      position: 'fixed',
      top: inputElStyle.value.top,
      left: inputElStyle.value.left,
      width: inputElStyle.value.width,
      height: inputElStyle.value.height,
      opacity: inputElStyle.value.opacity,
    },
    // onChange: (event: { target: HTMLInputElement }) => handleChange(event),
  },
)

export {
  renderInput,
  inputElStyle,
}
