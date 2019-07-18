<template>
  <div class="parent">
    <div class="main">
      <div class="wings"></div>
      <div class="wings"></div>
      <span class="hatch"></span>
      <div class="back">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import { setTimeout } from "timers";

$(document).ready(function() {
  $(".wings")
    .first()
    .css({ transform: "rotate(80deg)", marginLeft: "40px " });
  $(".wings")
    .last()
    .css({ transform: "rotate(-100deg)", left: "-10px" });
});
export default {
  data() {
    return {};
  }
};
</script>

<style>
.parent {
  background-color: #eee;
  position: relative;
  padding: 30px;
  margin-top: 0;
  min-height: 1000px;
}
.main {
  width: 50px;
  height: 100px;
  background-color: #165c92;
  border-radius: 50% 50% 0 0;
  transform: rotate(0deg);
  position: relative;
  margin-left: 20px;
  margin-top: 100px;
  animation: fly 2s linear 0s infinite normal forwards running;
}
.wings {
  width: 20px;
  height: 40px;
  background-color: #165c92;
  border-radius: 50% 50% 0 0;
  position: absolute;
  bottom: 15%;
}
.hatch {
  background-color: #ddd;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 13%;
  left: 30%;
}
.back {
  background-color: #666;
  position: absolute;
  bottom: 0;
  width: inherit;
  height: 20px;
}
.back span {
  background-color: #d86646;
  width: 5px;
  height: 20px;
  position: absolute;
  bottom: -25px;
}
.back span:first-child {
  left: 25%;
}
.back span:last-child {
  right: 25%;
}

@keyframes fly {
  0% {
    transform: rotate(90deg);
    position: absolute;
    right: 95%;
    margin-top: 100px;
  }
  20% {
    transform: rotate(90deg);
    position: absolute;
    right: 80%;
    margin-top: 80px;
  }
  40% {
    transform: rotate(90deg);
    position: absolute;
    right: 60%;
    margin-top: 60px;
  }
  60% {
    transform: rotate(90deg);
    position: absolute;
    right: 40%;
    margin-top: 60px;
  }
  80% {
    transform: rotate(90deg);
    position: absolute;
    right: 20%;
    margin-top: 80px;
  }
  100% {
    transform: rotate(90deg);
    position: absolute;
    right: 0;
    margin-top: 100px;
  }
}
</style>