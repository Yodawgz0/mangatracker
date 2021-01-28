<template>
  <div>
    <hr
      style="
         {
          color: rgba(99, 96, 98);
        }
      "
    />
    <br /><br />
    <div class="footer">
      <v-row class="footer">
        <v-col cols="2">
          <h4 class="footer heading1 _col1">PRODUCT</h4>
          <ol
            v-for="heading in footer_row1"
            :key="heading"
            class="footer sub_heading option_1"
          >
            {{
              heading
            }}
          </ol>
        </v-col>
        <v-col cols="2">
          <h4 class="footer heading1 _col2">RESOURCES</h4>
          <ol
            v-for="heading in footer_row2"
            :key="heading"
            class="footer sub_heading option_2"
          >
            {{
              heading
            }}
          </ol>
        </v-col>
        <v-col cols="2">
          <h4 class="footer heading1 _col3">LEGAL</h4>
          <ol
            v-for="heading in footer_row3"
            :key="heading"
            class="footer sub_heading option_3"
          >
            {{
              heading
            }}
          </ol>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="4">
          <h4 class="footer heading1 _col4">SUBSCRIBE TO OUR NEWSLETTER</h4>
          <p class="footer sub_heading option_4">
            The latest development updates, and general news, sent to your inbox
            regularly.
          </p>
          <v-row class="footer footer_details">
            <v-text-field
              cols="5"
              type="text"
              placeholder="Enter your email"
              outlined
              auto-grow
              class="footer email_text"
            ></v-text-field>
            &nbsp;
            <v-btn cols="5" large dark class="intro header_btn" color="primary"
              >Subscribe</v-btn
            >
          </v-row>
        </v-col>
      </v-row><br>
      <hr
        style="
           {
            color: rgba(99, 96, 98);
          }
        "
      /><br>
    </div>
  </div>
</template>

<script>
const FOOTER_ROW1 = ["About", "Blog "];
const FOOTER_ROW2 = ["Changelog", "Supported Sites ", "Status"];
const FOOTER_ROW3 = ["Privacy", "Terms "];
export default {
  name: "Footers",

  data: () => ({
    msg: "hi",
  }),
  computed: {
    footer_row1() {
      return FOOTER_ROW1;
    },
    footer_row2() {
      return FOOTER_ROW2;
    },
    footer_row3() {
      return FOOTER_ROW3;
    },
  },
};
</script>
