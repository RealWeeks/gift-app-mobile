<template>
  <q-page class="flex flex-start justify-center">
    <div class="column welcome-wrapper flex justify-around">
      <div class="text-wrapper welcome-banner justify-center content-center items-center">
        <p class="text-weight-bolder header-text self-center">Sign up</p>
        <!-- <div v-if="user">{{user}}</div> -->
        <br>
        <q-input v-model="email" float-label="Email address" placeholder="katie@gmail.com"/>
        <q-input v-model="password" type="password" float-label="Password"/>
      </div>
      <div class="btn-container column justify-between">
        <q-btn @click="handleSignUp" class rounded color="secondary" label="Sign up"/>
        <br>
        <q-btn to="/" class rounded color="red" label="Home"/>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.welcome-wrapper {
  margin-top: 15%;
}
.welcome-banner {
  margin-bottom: 25%;
  text-align: center;
}
.header-text {
  font-size: 2.5em;
}
.btn-container {
  text-align: center;
}
</style>

<script>
export default {
  name: 'signup',
  methods: {
    handleSignUp () {
      if (this.email.length && this.password.length) {
        let data = { email: this.email, password: this.password }
        this.$store.dispatch('SIGN_UP', data)
      } else {
        this.$q.notify({message: 'Please complete email and password', type: 'negative', position: 'top'})
      }
    }
  },
  computed: {
    useremail () {
      return this.$store.state.email
    },
    token () {
      return this.$store.state.token
    }
  },
  watch: {
    useremail () {
      let data = { email: this.email, password: this.password }
      this.$store.dispatch('SIGN_IN', data)
    },
    token () {
      if (this.token) {
        this.$q.notify({message: 'Signed in', type: 'positive', position: 'top'})
        this.$router.push('groupname')
      }
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
