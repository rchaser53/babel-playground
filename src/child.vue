<template>
  <div>{{ addSomethingPropA }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ChildClass extends Vue {
  @Prop(Number) propA!: number

  get addSomethingPropA() {
    return 123 + this.propA;
  }
}
</script>