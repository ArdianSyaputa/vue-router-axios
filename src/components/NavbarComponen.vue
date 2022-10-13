<template>
  <div class="all">
    <ul>
      <li><router-link to="/">Jakarta</router-link></li>
      <li><router-link to="/about">Jawa Barat</router-link></li>
      <li><router-link to="/detail">Jawa Tengah</router-link></li>
      <li><router-link to="/product">Jawa Timur</router-link></li>
      <li><router-link to="/contact">Bali</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavComp",
};
</script>

<style scoped>
ul{
  width: 200px;
  list-style-type: none;
   border: 1px solid;
   margin: 0;
   padding: 0;
   position: fixed;
}
li {
  /* line-height: 2; */
    padding: 12px 16px;
   
   /* background-image: url(https://wonderfulengineering.com/wp-content/uploads/2016/02/red-wallpaper-23.jpg); */
   background-color: black;
    text-align: center;
    transition: 1s;
    /* border: 1px solid; */
}
li a{
   color: white;
  text-decoration: none;
}

li:hover{
  background-color: lightgrey;
}


</style>
