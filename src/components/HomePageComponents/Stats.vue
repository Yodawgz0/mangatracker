<template>
  <v-container class="stats">
    <div>
      <h1 class="text-center stats headerpropeties">
        Track manga series across sites
      </h1>
      <p class="text-center stats paragraphpropeties">
        Get the latest releases from supported sites hourly.<br />
        With new sites added monthly, always stay up to date with your favourite
        series
      </p>
    </div>

    <div class="text-center ">
      <v-hover v-slot:default="{ hover }">
        <v-btn
          class="stats btnbdrprops txtprops"
          :color="hover ? '#085ff5' : '#3f83f8'"
          large
          depressed
          dark
        >
          Check all supported sites
        </v-btn>
      </v-hover>
    </div>

    <div class="cardsmtopmargin">
      <v-row class="stats_padding" justify="center">
        <v-card width="30%" class="hidden-xs-only">
          <v-card-text>
            <div class="blue-color stats cardtitle">
              18217
            </div>
          </v-card-text>
          <v-card-subtitle class="stats cardsubtitle">
            Manga Series Tracked
          </v-card-subtitle>
        </v-card>

        <v-card width="30%" class="hidden-xs-only">
          <v-card-text>
            <div class="blue-color stats cardtitle">
              178766
            </div>
          </v-card-text>
          <v-card-subtitle class="stats cardsubtitle">
            Manga Entries Created
          </v-card-subtitle>
        </v-card>

        <v-card width="30%" class="hidden-xs-only">
          <v-card-text>
            <div class="blue-color stats cardtitle">
              18
            </div>
          </v-card-text>
          <v-card-subtitle class="stats cardsubtitle">
            Supported Sites
          </v-card-subtitle>
        </v-card>
      </v-row>
    </div>

    <div>
      <v-card class="stats cardproportionsmbview hidden-sm-and-up">
        <v-card-text>
          <div class="blue-color stats cardtitle">
            18217
          </div>
        </v-card-text>
        <v-card-subtitle class="stats cardsubtitle">
          Manga Series Tracked
        </v-card-subtitle>
      </v-card>

      <v-card class="hidden-sm-and-up">
        <v-card-text>
          <div class="blue-color stats cardtitle">
            178766
          </div>
        </v-card-text>
        <v-card-subtitle class="stats cardsubtitle">
          Manga Entries Created
        </v-card-subtitle>
      </v-card>

      <v-card class="hidden-sm-and-up">
        <v-card-text>
          <div class="blue-color stats cardtitle">
            18
          </div>
        </v-card-text>
        <v-card-subtitle class="stats cardsubtitle">
          Supported Sites
        </v-card-subtitle>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Stats",

  data: () => ({})
};
</script>
