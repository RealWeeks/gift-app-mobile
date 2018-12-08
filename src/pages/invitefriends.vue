<template>
  <q-page class="flex flex-start justify-center">
    <div class="column welcome-wrapper flex justify-around">
      <div class="text-wrapper welcome-banner justify-center content-center items-center">
        <p class="text-weight-bolder header-text self-center">Invite friends</p>
        <p class="text-weight-bolder header-text self-center">TBD</p>
        <p class="text-weight-bolder header-text self-center">Friend stuff</p>
      </div>
      <div class="btn-container column justify-between">
        <q-btn to="/" class="create-btn" rounded color="red" label="Home"/>
        <br/>
        <q-btn class="create-btn" rounded color="secondary" label="Next"/>
        <br/>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.welcome-wrapper{
  margin-top: 15%;
}
.welcome-banner{
  margin-bottom: 25%;
  text-align: center;
}
.header-text{
  font-size: 2.5em;
}
.btn-container{
    text-align: center;
}
</style>

<script>
export default {
  name: 'invitefriends',
  methods: {
  },
  data () {
    return {
    //   groupName: ''
    }
  }
}
</script>
