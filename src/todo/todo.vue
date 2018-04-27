<template>
  <section class="real-app">
      <input 
        type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="接下去要做什么？"
        @keyup.enter="addTodo"
      >
      <item :todo="todo"></item>
      <tabs :filter="filter"></tabs>
  </section>
</template>


<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
export default {
    data() {
        return {
            todo: {
                id: 0,
                content: 'this is todo',
                completed: false,
            },
            filter: 'all'
        }
    },
    components: {
        Item,
        Tabs,
    },
  methods: {
      addTodo() {}
  }
}
</script>

<style lang="stylus" scoped>
.real-app{
    width 600px
    margin 0 auto
    bos-shadow 0 0 5px #666
}
.add-input{
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family inherit 
    font-weight inherit 
    line-height 1.4em
    border 0
    outline none 
    color inherit 
    padding 6px
    border 1px solid #999
    box-shadow inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2)
    box-sizing border-box
    font-smoothing antialiased 
    padding 16px 16px 16px 60px
    boder none 
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
}
</style>
