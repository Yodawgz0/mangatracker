<template>
  <v-container class="stats">
    <v-row class="stats_padding" align="center" justify="space-around">
      <div class="stats heading ">
        Track manga series across sites
      </div>
    </v-row>

    <v-row align="center" justify="space-around">
      <div class="stats body">
        Get the latest releases from supported sites hourly.<br />
        With new sites added monthly, always stay up to date with your favourite
        series
      </div>
    </v-row>

    <v-row class="stats_padding" align="center" justify="space-around">
      <v-btn class="stats checkbutton" color="#3f83f8" large>
        Check all supported sites
      </v-btn>
    </v-row>

    <v-row class="stats_padding" justify="center">
      <v-card min-width="300">
        <v-card-text class="stats cardtitle">
          <div class="mangacolorstats">
            18217
          </div>
        </v-card-text>
        <v-card-subtitle class="stats cardsubtitle">
          Manga Series Tracked
        </v-card-subtitle>
      </v-card>
      <v-divider vertical></v-divider>
      <v-card min-width="300">
        <v-card-text class="stats cardtitle">
          <div class="mangacolorstats">
            178766
          </div>
        </v-card-text>
        <v-card-subtitle class="stats cardsubtitle">
          Manga Entries Created
        </v-card-subtitle>
      </v-card>
      <v-divider vertical></v-divider>
      <v-card min-width="300">
        <v-card-text class="stats cardtitle">
          <div class="mangacolorstats">
            18
          </div>
        </v-card-text>
        <v-card-subtitle class="stats cardsubtitle">
          Supported Sites
        </v-card-subtitle>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Stats",

  data: () => ({})
};
</script>
