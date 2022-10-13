<template>

  <div class="header">
  
    <form @submit.prevent="add" id="input">
        <h1>Bali</h1>
        <input type="hidden" v-model="form.id " required>
        <label for="">Makanan</label><br>
        <input type="text" v-model="form.mkn4" required><br>
        
          <label for="">Tradisi</label><br>
          <input type="text" v-model="form.tradisi4" required><br>
          
            <label for="">Bahasa </label><br>
             <input type="text" v-model="form.bahasa4" required><br>

               <label for="">Image</label><br>
              <input type="text" v-model="form.image" required><br>
       
 
 
<button type="submit" v-show="!updateSubmit"><i class="fas fa-search-plus"></i> </button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button type="button" v-show="updateSubmit" @click="update(form)">Update</button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
    <table border="1" style="width:800px" >
<tr>
  <th>Makanan</th>
      <th>Tradisi</th>
      <th>Bahasa</th>
      <th>Monumen</th>
      <th>Action</th>
</tr>
    <tr v-for="star in stars" :key="star.id">
 
      <td>{{star.mkn4}}</td> 
      <td>{{star.tradisi4}}</td> 
      <td>{{star.bahasa4}}</td> 
      <td><img :src="star.image" alt="" width="150"></td>
      <td> <a href="#input"><button @click="edit(star)"><i class="fa-solid fa-file-pen"></i></button> </a>
      |  <button @click="del(star)"><i class="fa-sharp fa-solid fa-eraser"></i></button></td>
         </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
 data(){
    return{
        form: {
          id: "",
          mkn4: "",
            tradisi4: "",
              bahasa4: "",
                harga: "",
                image: "",
        },
        stars: "",
        updateSubmit: false
    }
  },
  mounted(){
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/stars').then(res => {
        this.stars = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/stars/', this.form).then(res => {
          this.load()
          this.form.mkn4 = " ";
          this.form.tradisi4 = " ";
          this.form.bahasa4 = " ";
          this.form.harga = " ";
           this.form.image = " ";
      })
 },
  edit(star){ 
        this.updateSubmit = true
        this.form.id = star.id 
        this.form.mkn4 = star.mkn4 
         this.form.tradisi4 = star.tradisi4 
          this.form.bahasa4 = star.bahasa4 
           this.form.harga = star.harga
             this.form.image = star.image
    },
    update(form){ 
       return axios.put('http://localhost:3000/stars/' + form.id , {mkn4: this.form.mkn4,tradisi4: this.form.tradisi4,bahasa4: this.form.bahasa4,harga: this.form.harga,image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.mkn4 = ''
         this.form.tradisi4 = ''
          this.form.bahasa4 = ''
           this.form.harga = ''
              this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
       },
       del(star){
      axios.delete('http://localhost:3000/stars/' + star.id).then(res =>{
          this.load()
          let index = this.stars.indexOf(form.mkn4)
          this.stars.splice(index,1)
      })
    }
  }
}
  
  
</script>

<style scoped>
.header{
  text-align: center;
  margin-left: auto;
  scroll-behavior: smooth;
}
button{
border: none;
}


</style>




