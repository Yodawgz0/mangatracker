<template>
  <div style="padding: 2%">
    <div v-if="!isMobile()" class="intro">
      <desktop>
        <v-row class="intro heading1"> CURRENTLY IN ALPHA </v-row>
        <v-row>
          <v-col cols="6">
            <div class="intro heading2">
              <h2>Cross-Site</h2>
              <span class="intro heading2 text2">
                <h2>manga tracker</h2>
              </span>
            </div>
            <p class="intro heading3">
              Read and manage your manga collection in a single place.
              Integrated with manga sites big and small, always stay up to date
              with your favourite manga series.
            </p>
            <v-btn large color="primary" class="intro header_btn"> Start tracking now</v-btn>
          </v-col>
          <v-col cols="3">
            <img
              src="../../assets/anime_tracker.png"
              class="intro header_image"
            />
          </v-col>
        </v-row>
      </desktop>
    </div>
    <div v-else class="text-center">
      <mobile>
        <div class="intro heading1 mobile">CURRENTLY IN ALPHA</div>
        <div>
          <div class="intro heading2 mobile">
            <h2>Cross-Site</h2>
            <span class="intro heading2 mobile text2">
              <h2>manga tracker</h2>
            </span>
          </div>
        </div>
        <div>
          <p class="intro heading3 mobile">
            Read and manage your manga collection in a single place. Integrated
            with manga sites big and small, always stay up to date with your
            favourite manga series.
          </p>
        </div>
        <div>
          <v-btn
            large
            light
            class="intro header_btn mobile"
            color="primary"
          >
            Start tracking now</v-btn
          >
        </div>
        <div>
          <img
            src="../../assets/anime_tracker.png"
            class="intro header_image_mobile"
          />
        </div>
      </mobile>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",

  data: () => ({}),
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
