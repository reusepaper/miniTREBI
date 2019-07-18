<template>
  <div>
    <v-container mt-5>
      <EditProfileModal v-if="showModal" @close="showModal = false" />
      <v-layout>
        <WMSidebar v-on:editProfile="editProfile"></WMSidebar>
        <v-flex xs12 style="min-height : 65vh;     margin-left: 80px;">
          <WMPostlist :limits="4" :load-more="true"></WMPostlist>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import WMPostlist from "../components/WMPostlist";
import WMSidebar from "../components/WMSidebar";
import EditProfileModal from "../components/EditProfileModal";
export default {
  name: "WMPostPage",
  components: {
    WMPostlist,
    WMSidebar,
    EditProfileModal
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    editProfile() {
      this.showModal = true;
    }
  }
};
</script>
