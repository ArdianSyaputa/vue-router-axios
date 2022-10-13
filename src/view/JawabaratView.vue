<template>

  <div class="header">
  
    <form @submit.prevent="add" id="input">
        <h1>Jawa Barat</h1>
        <input type="hidden" v-model="form.id" required>
        <label for="">Makanan</label><br>
        <input type="text" v-model="form.mkn" required><br>
        
          <label for="">Tradisi</label><br>
          <input type="text" v-model="form.tradisi" required><br>
          
            <label for="">Bahasa </label><br>
             <input type="text" v-model="form.bahasa" required><br>

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
    <tr v-for="ard in ards" :key="ard.id">
 
      <td>{{ard.mkn}}</td> 
      <td>{{ard.tradisi}}</td> 
      <td>{{ard.bahasa}}</td> 
      <td><img :src="ard.image" alt="" width="150"></td>
      <td> <a href="#input"><button @click="edit(ard)"><i class="fa-solid fa-file-pen"></i></button></a> |
      |  <button @click="del(ard)"><i class="fa-sharp fa-solid fa-eraser"></i></button></td>
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
          mkn: "",
            tradisi: "",
              bahasa: "",
                harga: "",
                image: "",
        },
        ards: "",
        updateSubmit: false
    }
  },
  mounted(){
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/ards').then(res => {
        this.ards = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/ards/', this.form).then(res => {
          this.load()
          this.form.mkn = " ";
          this.form.tradisi = " ";
          this.form.bahasa = " ";
          this.form.harga = " ";
           this.form.image = " ";
      })
 },
  edit(ard){ 
        this.updateSubmit = true
        this.form.id = ard.id 
        this.form.mkn = ard.mkn 
         this.form.tradisi = ard.tradisi 
          this.form.bahasa = ard.bahasa 
           this.form.harga = ard.harga
             this.form.image = ard.image
    },
    update(form){ 
       return axios.put('http://localhost:3000/ards/' + form.id , {mkn: this.form.mkn,tradisi: this.form.tradisi,bahasa: this.form.bahasa,harga: this.form.harga,image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.mkn = ''
         this.form.tradisi = ''
          this.form.bahasa = ''
           this.form.harga = ''
              this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
       },
       del(ard){
      axios.delete('http://localhost:3000/ards/' + ard.id).then(res =>{
          this.load()
          let index = this.ards.indexOf(form.mkn)
          this.ards.splice(index,1)
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




