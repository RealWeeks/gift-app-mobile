<template>
  <q-page class="flex flex-start justify-center">
    <div>
      test
      <Calendar />
      <q-btn to="/" class="create-btn" rounded color="red" label="Back"/>
    </div>
  </q-page>
</template>

<style scoped>

</style>

<script>
import { Calendar } from 'quasar-calendar'
export default {
  name: 'calendar',
  components: {
    Calendar
  },
  methods: {
  },
  data () {
    return {
    //   groupName: ''
    }
  }
}
</script>
