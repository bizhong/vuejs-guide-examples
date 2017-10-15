import Vue from 'vue'
const Component = Vue.extend({
  // type inference enabled
})
const Component = {
  // this will NOT have type inference,
  // because TypeScript can't tell this is options for a Vue component.
}