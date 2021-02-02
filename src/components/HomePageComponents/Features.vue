<template>
  <v-container class="feat space-top container-long">
    <div>
      <h3 class="feat featminiheading blue-color text-center">
        YOUR MANGA CONTROL CENTRE
      </h3>
      <h1 class="feat featheading">The best way to read and track manga</h1>
      <v-row class="space-top medium">
        <v-col cols="6" v-for="featcard in featcards" :key="featcard.text">
          <v-row>
            <v-col cols="1" class="flex-grow-0 flex-shrink-0">
              <div class="feat featiconbox">
                <v-icon dark style="transform: TranslateY(40%)">{{
                  featcard.icon
                }}</v-icon>
              </div>
            </v-col>
            <v-col class="space-left medium">
              <h4 class="feat featsubheading">{{ featcard.text }}</h4>
              <p class="feat cardpara lightgrey--text">
                {{ featcard.subtext }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    featcards: [
      {
        icon: "mdi-web",
        text: "Cross-site tracking",
        subtext:
          "Forget bookmarking manga and manually checking if a new chapter got released. We automatically track manga across many sites, from big to small."
      },
      {
        icon: "mdi-flash",
        text: "Real-time manga updates",
        subtext:
          "When the latest chapter of your favourite manga gets released, we automagically update your dashboard, so that you can jump straight into reading."
      },
      {
        icon: "mdi-lock",
        text: "Reliable",
        subtext:
          "You can trust us to keep your manga list safe. We don't store manga chapters, meaning we won't get that DMCA takedown that killed your favourite manga provider"
      },
      {
        icon: "mdi-lightbulb-on-outline",
        text: "Smart suggestions",
        subtext:
          "We do a lot more than just track manga. Smart suggestions can tell you if a different site has more chapters than the one you track, making sure you are always using the best manga provider."
      }
    ]
  })
};
</script>
