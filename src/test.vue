<template>
  <div>vue dayo-</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';    // eslint-disable-line

@Component
export class TestClass extends Vue {
  a: number = 12;
  hoge = hoge;
}

const hoge = function(this: TestClass): number {
  return this.a;
}

export default TestClass;
</script>