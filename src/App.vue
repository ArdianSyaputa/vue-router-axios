<template>
  <div class="nav3">
    <h1>Provinsi</h1>
    <div class="nav4">
      <img
        class="satu"
        src="https://tse3.mm.bing.net/th?id=OIP.EEw0aaEVXVD3KMyCKVVNYAHaDC&pid=Api&P=0"
        alt=""
      />
    </div>

    <div class="nav1">
      <div class="sidebar">
        <NavComp />
      </div>
      <div class="krp">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavComp from "./components/NavbarComponen.vue";

export default {
  components: {
    NavComp,
  },
};
</script>

<style scoped>
.nav1 {
  display: flex;
  background-image: url(http://wonderfulengineering.com/wp-content/uploads/2014/09/red-wallpaper-13.jpg);
  color: white;
  scroll-behavior: smooth;
}
.krp {
  scroll-behavior: smooth;
  margin-left: auto;
  margin-right: 37px;
}
.nav3 {
  text-align: center;

  border-bottom: 3px solid;
  color: white;
  font-size: 15px;
scroll-behavior: smooth;
background-color: black;
}

.satu {
  display: flex;
  width: 10%;
}


.nav4 {
  text-align: center;

  border-bottom: 3px solid;
  font-size: 15px;
  border-bottom: 2px solid;
background-color: black;
  border-bottom: 2px solid;
}

img {
  border: 2px solid black;
}
</style>
