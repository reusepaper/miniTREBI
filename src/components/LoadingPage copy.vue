<template>
  <div class="loading-page-wrapper">
    <div class="loading-page">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  data() {
    return {
    };

  },
};
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
</script>

<style>
.loading-page-wrapper {
  display: table;
  width: 100%;
  height: 100%;
  /* position: absolute; */
}

.loading-page {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.spinner {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: white;
  border: 8px solid #007CB7;
  border-right-color: transparent;
  border-radius: 50%;
  animation: rotate-spinner  .5s  infinite linear;
}

@keyframes rotate-spinner {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>