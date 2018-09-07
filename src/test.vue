<template>
  <div>vue dayo-</div>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line no-unused-vars
import Component from 'vue-class-component';

@Component({
  async mounted() {
    try {
      const hoge = { a: 12, b: 33 };
      const hogehoge = { ...hoge };
      console.log(hogehoge);
    } catch(err) {

    }
  }
})
export default class TestClass extends Vue {
  hoge() {
    return Promise.resolve();
  }
}
</script>