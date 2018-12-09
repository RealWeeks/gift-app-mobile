<template>
  <q-page class="flex flex-start justify-center">
    <div class="column welcome-wrapper flex justify-around">
      <div class="text-wrapper welcome-banner justify-center content-center items-center">
        <p class="text-weight-bolder header-text self-center">Give your</p>
        <br/>
        <p class="text-weight-bolder header-text self-center">Group a name</p>
        <q-input v-model="groupName" float-label="Group name" placeholder="Katie's Wishlist" />
      </div>
      <div class="btn-container column justify-between">
        <q-btn to="/" class="create-btn" rounded color="red" label="Back"/>
        <br/>
        <!-- <q-btn to="invitefriends" class="create-btn" rounded color="secondary" label="Next"/> -->
        <q-btn @click="handleCreateGroup" class="create-btn" rounded color="secondary" label="Next"/>
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
  name: 'groupname',
  methods: {
    handleCreateGroup () {
      this.$store.dispatch('CREATE_GROUP', {groupname: this.groupName})
    }
  },
  data () {
    return {
      groupName: ''
    }
  }
}
</script>
