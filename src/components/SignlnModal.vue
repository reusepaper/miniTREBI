<template>
  <div>
    <Signln></Signln>
  </div>
</template>

<script>
import Signln from "../components/Signln";

export default {
  components: {
    Signln
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>