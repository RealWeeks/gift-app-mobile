<template>
  <q-page class="flex flex-start justify-start column">
    <div class="column welcome-wrapper flex justify-around">
      <q-card>
        <q-card-title>
            Card Title
        </q-card-title>
        <q-card-separator />
        <q-card-main>
            Card Content
        </q-card-main>
        </q-card>
    </div>
    <q-btn to="/" class="create-btn" rounded color="red" label="Back"/>
  </q-page>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'groupsplash',
  created () {
  },
  methods: {
  },
  computed: {
    createdGroup () {
      if (this.$store.state.message === 'created group') {
        return this.$store.state.message
      }
    }
  },
  watch: {
    createdGroup () {
      if (this.createdGroup) {
        this.$store.dispatch('GET_GROUPS')
      }
    }
  },
  data () {
    return {
    //   groupName: ''
    }
  }
}
</script>
