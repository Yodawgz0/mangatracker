<template>
  <v-card>
    <v-list class="p1">
      <v-list-item>
        <div class="fontbold weight2 fontsize size3 inputtexttitle">Email</div>
      </v-list-item>
      <v-list-item>
        <v-text-field
          v-model="email"
          :rules="[rules.email, rules.required]"
          autocomplete="email"
          solo
          placeholder="you@example.com"
          required
          auto-grow
          type="email"
          class="inputtextlog"
          outlined
          rows="1"
          dense
        ></v-text-field>
      </v-list-item>
      <v-list-item>
        <div class="paddingneg fontbold weight2 fontsize size3">Password</div>
      </v-list-item>
      <v-list-item class="paddingneg">
        <v-text-field
          autocomplete="password"
          placeholder="Password"
          class="inputtextlog"
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          :rules="[rules.required]"
          counter
          @click:append="show = !show"
          required
          auto-grow
          outlined
          dense
          rows="1"
        ></v-text-field>
      </v-list-item>
      <v-list-item class="paddingneg">
        <v-checkbox v-model="checkbox"></v-checkbox>
        <div class="fontsize size3 fontbold weight2">
          Remember Me (2 months)
        </div>
      </v-list-item>
      <v-list-item>
        <v-btn block elevation="2" medium color="#1c64f2">
          <div class="inputsubmittext font" @click="handleLogin">
            Sign In
          </div></v-btn
        >
      </v-list-item>
      <v-list-item>
        <div class="fontsize size3 fontbold weight2 space-left extralong">
          Forgot Your Password?
        </div>
      </v-list-item>
      <v-list-item class="paddingneg"> <v-divider></v-divider></v-list-item>
      <v-list-item class="paddingneg space-left long">
        <div class="fontsize size3">Don't have an account?</div>
        <div style="padding-left: 5px" class="fontsize size3 fontbold weight2">
          Register
        </div>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
//import  login  from "../utils/auth-service";

export default {
  name: "LoginCard",

  data() {
    return {
      dialog: false,
      password: "",
      email: "",
      show: false,
      checkbox: false,
      rules: {
        email: (v) =>
          !!(v || "").match(/\S+@\S+\.\S+/) || "Please enter a valid email",
        required: (v) => !!v || "This field is required",
      },
      methods: {
        handleLogin() {
          //login();
        },
      },
    };
  },
};
</script>
