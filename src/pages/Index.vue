<template>
  <q-page class="flex flex-start justify-center">
    <div class="column welcome-wrapper flex justify-around">
      <div class="text-wrapper items-center welcome-banner">
        <p class="items-center content-center text-weight-bolder header-text">Welcome to Gift App</p>
      </div>
      <div class="text-wrapper items-center justify-between column text-weight-medium">
        <p>Create or Join a party</p>
        <p>Make your list</p>
      </div>
      <div class="items-center justify-between column">
        <q-btn class="create-btn" rounded color="red" label="Create Group" icon-right="create"/>
        <br/>
        <q-btn rounded label="Join Group" icon-right="card_giftcard"/>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.welcome-wrapper{
  margin-top: 20%;
}
.welcome-banner{
  margin-bottom: 25%;
}
.header-text{
  font-size: 2.5em;
}
/* .create-btn{
  margin-bottom: 10%;
} */
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
