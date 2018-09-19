<template>
  <div>
    <child :prop-a="11"></child>
    <div>vue dayo-</div>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';    // eslint-disable-line
import Child from './child.vue';

@Component({
  components: {
    child: Child
  }
})
export class TestClass extends Vue {
  a: number = 12;
}

export default TestClass;
</script>