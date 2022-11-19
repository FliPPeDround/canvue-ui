<script setup lang="ts">
import { cvButton, cvInput, cvText, cvUi } from 'canvue-ui'
import { ref } from 'vue'

const flexStyle = {
  width: 500,
  hight: 500,
  display: 'flex',
  flexDirection: 'column',
}

const handleClick = () => {
  alert('clicked')
}

const text = ref('Hello World')
</script>

<template>
  <cv-ui :styles="flexStyle">
    <cv-button @click="handleClick">
      Click me
    </cv-button>
    <cv-input placeholder="aaasdasdasd" />
    <cv-input v-model="text" placeholder="你在干什么" />
    <cvText>
      {{ text }}
    </cvText>
  </cv-ui>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
