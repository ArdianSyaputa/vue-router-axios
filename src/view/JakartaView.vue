<template>
  <div class="header">
   
    <form @submit.prevent="add" id="input">
       <h1>Jakarta</h1>
        <input type="hidden" v-model="form.id" required>
        <label for="">Makanan</label><br>
        <input type="text" v-model="form.name" required><br>
        
          <label for="">Tradisi</label><br>
          <input type="text" v-model="form.khas" required><br>
          
            <label for="">Bahasa </label><br>
             <input type="text" v-model="form.bahan" required><br>

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
    <tr v-for="user in users" :key="user.id">
 
      <td>{{user.name}}</td> 
      <td>{{user.khas}}</td> 
      <td>{{user.bahan}}</td> 
      <td><img :src="user.image" alt="" width="150"></td>
      <td> <a href="#input"><button @click="edit(user)"><i class="fa-solid fa-file-pen"></i></button></a> |
      |  <button @click="del(user)"><i class="fa-sharp fa-solid fa-eraser"></i></button></td>
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
          name: "",
            khas: "",
              bahan: "",
                harga: "",
                image: "",
        },
        users: "",
        updateSubmit: false
    }
  },
  mounted(){
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/users').then(res => {
        this.users = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/users/', this.form).then(res => {
          this.load()
          this.form.name = " ";
          this.form.khas = " ";
          this.form.bahan = " ";
          this.form.harga = " ";
           this.form.image = " ";
      })
 },
  edit(user){ 
        this.updateSubmit = true
        this.form.id = user.id 
        this.form.name = user.name 
         this.form.khas = user.khas 
          this.form.bahan = user.bahan 
           this.form.harga = user.harga
             this.form.image = user.image
    },
    update(form){ 
       return axios.put('http://localhost:3000/users/' + form.id , {name: this.form.name,khas: this.form.khas,bahan: this.form.bahan,harga: this.form.harga,image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.name = ''
         this.form.khas = ''
          this.form.bahan = ''
           this.form.harga = ''
              this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
       },
       del(user){
      axios.delete('http://localhost:3000/users/' + user.id).then(res =>{
          this.load()
          let index = this.users.indexOf(form.name)
          this.users.splice(index,1)
      })
    }
  }
}
  
  
</script>

<style scoped>
.header{
  text-align: center;
  margin-left: auto;
}
</style>




