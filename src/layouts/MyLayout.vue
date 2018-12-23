<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header v-if="token">
      <q-toolbar
        color="blue"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Chore Calendar
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="handleCalView">
          <q-item-side icon="school" />
          <q-item-main label="Calendar" sublabel="View main cal" />
        </q-item>
        <q-item @click.native="handleEventView">
          <q-item-side icon="code" />
          <q-item-main label="Add event" sublabel="add an event" />
        </q-item>
        <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
          <q-item-side icon="chat" />
          <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
        </q-item>
        <q-item @click.native="openURL('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    handleCalView () {
      this.$router.push('calendar')
    },
    handleEventView () {
      this.$router.push('addevent')
    }
  },
  computed: {
    email () {
      let value = false
      if (this.$q.localStorage.get.item('email')) {
        value = this.$q.localStorage.get.item('email')
        this.$store.commit('SET_EMAIL', value)
      }
      return this.$store.state.email
    },
    token () {
      let value = false
      if (this.$q.localStorage.get.item('token')) {
        value = this.$q.localStorage.get.item('token')
        this.$store.commit('SET_TOKEN', value)
      }
      return this.$store.state.token || value
    }
  },
  watch: {
    // token () {
    //   if (this.token) {
    //     this.$q.notify({message: 'Signed in', type: 'positive', position: 'top'})
    //     this.$router.push('groupname')
    //   }
    // }
  }
}
</script>

<style>
</style>
