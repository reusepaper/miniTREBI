<template>
<nav class="navbar shadow fixed-top navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
    <img src="../assets/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    TREVI
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link hi" title="즐겨찾기 등록" onclick="alert('ctrl+d버튼을 눌러 저장할 수 있습니다.')"><img src="../assets/bookmark-black-shape.svg" style="width:10px;"/></a>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
</template>

<script>
import SignIn from "./SignIn";
export default {
  components: {
    SignIn
  },
  name: "WMHeader",
  data: () => ({
    items: [
      { title: "Ho" },
      { title: "ydk" },
      { title: "yeon" },
      { title: "mansub" },
      { title: "rain" }
    ],
    dialog: false
  })
};
</script>
