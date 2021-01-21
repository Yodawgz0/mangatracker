<template> <div></div></template>
<script>
import { setIdToken, setAccessToken } from "../utils/auth-services";

export default {
  name: "Callback",

  mounted() {
    this.$nextTick(() => {
      setAccessToken();
      setIdToken();
      window.location.href = "/";
    });
  },
};
</script>
