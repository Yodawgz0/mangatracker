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
          class="inputtextlog paddingneg"
          ref="password"
          v-model="password"
          :rules="[rules.password, rules.length(6), rules.required]"
          counter
          type="password"
          required
          auto-grow
          outlined
          dense
          rows="1"
        ></v-text-field>
      </v-list-item>
      <v-list-item>
        <div class="paddingneg fontbold weight2 fontsize size3">
          Password Confirmation
        </div>
      </v-list-item>
      <v-list-item class="paddingneg">
        <v-text-field
          autocomplete="password"
          placeholder="Password confirmation"
          class="inputtextlog"
          v-model="passwordconf"
          :rules="[rules.required, rules.passwordconf]"
          counter
          type="password"
          auto-grow
          outlined
          dense
          rows="1"
        ></v-text-field>
      </v-list-item>
      <v-list-item>
        <v-btn block elevation="2" medium color="#1c64f2" @click="handleSubmit">
          <div class="inputsubmittext font">Register</div></v-btn
        >
      </v-list-item>
      <v-list-item> <v-divider></v-divider></v-list-item>
      <v-list-item class="paddingneg space-left long">
        <div class="fontsize size3">Already have an account?</div>
        <div style="padding-left: 5px" class="fontsize size3 fontbold weight2">
          Sign In
        </div>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterCard",
  methods: {
    async handleSubmit() {
      if (
        this.email &&
        this.password &&
        this.passwordconf &&
        this.password === this.passwordconf
      ) {
        await axios
          .post("http://localhost:8000/register", {
            email: this.email,
            password: this.password,
          })
          .then(
            (res) => {
              console.log(res);
            },
            (err) => {
              console.log(err.response);
            }
          );
      }
    },
  },

  data() {
    return {
      dialog: false,
      password: "",
      email: "",
      passwordconf: "",
      // eslint-disable-next-line
      rules: {
        email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
        length: (len) => (v) =>
          (v || "").length >= len ||
          `Invalid character length, required ${len}`,
        password: (v) =>
          !!(v || "").match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
          ) ||
          "Password must contain an upper case letter, a numeric character, and a special character",
        required: (v) => !!v || "This field is required",
        passwordconf: (v) =>
          !!(v || "").match(this.password) || "Passwords Don't Match",
      },
    };
  },
};
</script>
