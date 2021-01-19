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
    <v-dialog
      max-width="330"
      overlay-opacity="0.8"
      overlay-color="#6b7280"
      v-model="LoginDialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-if="$vuetify.breakpoint.mdAndUp"
          class="navbar button"
          elevation="2"
          v-bind="attrs"
          v-on="on"
        >
          Log in
        </v-btn>
      </template>
      <LoginCard />
    </v-dialog>
    <v-dialog
      max-width="330"
      overlay-opacity="0.8"
      overlay-color="#6b7280"
      v-model="RegisterDialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-if="$vuetify.breakpoint.mdAndUp"
          text
          class="navbar button"
          elevation="2"
          v-bind="attrs"
          v-on="on"
        >
          Register
        </v-btn>
      </template>
      <RegisterCard />
    </v-dialog>

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
import LoginCard from "./AuthenticationLogins/LoginCard";
import RegisterCard from "./AuthenticationLogins/RegisterCard";
export default {
  components: { LoginCard, RegisterCard },
  name: "Navbar",

  data() {
    return {
      LoginDialog: false,
      RegisterDialog: false,
    };
  },
};
</script>
