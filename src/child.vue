<template>
  <div @click="hoge">{{ addSomethingPropA }}</div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Vue, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class'

@Component
export default class ChildClass extends Vue {
  @Prop(Number) propA!: number
  @State('aaa') stateAaa!: number

  get addSomethingPropA() {
    return 123 + this.propA;
  }

  hoge() {
    console.log(this.stateAaa)
  }
}
</script>