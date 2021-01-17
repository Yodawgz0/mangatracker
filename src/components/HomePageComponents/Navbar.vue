<template>
  <v-app-bar
    color="white"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
    class="navbar"
  >
    <v-app-bar-title class="navbar appname">UwU MangaTracker</v-app-bar-title>
    <div v-if="$vuetify.breakpoint.mdAndUp" class="navbar navtitles">
      Features
    </div>
    <div v-if="$vuetify.breakpoint.mdAndUp" class="navbar navtitles">
      Supported Sites
    </div>
    <v-spacer></v-spacer>
    <v-btn
      v-if="$vuetify.breakpoint.mdAndUp"
      text
      class="navbar button"
      elevation="2"
    >
      Log in
    </v-btn>
    <v-btn
      v-if="$vuetify.breakpoint.mdAndUp"
      text
      class="navbar button"
      elevation="2"
    >
      Register
    </v-btn>

    <v-dialog
      v-model="dialog"
      halfscreen
      hide-overlay
      transition="dialog-top-transition"
      v-if="$vuetify.breakpoint.smAndDown"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-card class="navbar mobilesidebar">
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="../../assets/uwulogo.png" />
            </v-list-item-avatar>
            <v-btn class="ml-auto" icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text class="navdirectmob">Features</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text class="navdirectmob">Supported Sites</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text class="navlogmob">Log in</v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text class="navlogmob">Register</v-btn>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@1,700&display=swap");
</style>
