<template>

  <div class="header">
  
    <form @submit.prevent="add" id="input">
        <h1>Jawa Tengah</h1>
        <input type="hidden" v-model="form.id " required>
        <label for="">Makanan</label><br>
        <input type="text" v-model="form.mkn2" required><br>
        
          <label for="">Tradisi</label><br>
          <input type="text" v-model="form.tradisi2" required><br>
          
            <label for="">Bahasa </label><br>
             <input type="text" v-model="form.bahasa2" required><br>

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
    <tr v-for="zex in zexs" :key="zex.id">
 
      <td>{{zex.mkn2}}</td> 
      <td>{{zex.tradisi2}}</td> 
      <td>{{zex.bahasa2}}</td> 
      <td><img :src="zex.image" alt="" width="150"></td>
      <td><a href="#input"><button @click="edit(zex)"><i class="fa-solid fa-file-pen"></i></button></a>  |
      |  <button @click="del(zex)"><i class="fa-sharp fa-solid fa-eraser"></i></button></td>
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
          mkn2: "",
            tradisi2: "",
              bahasa2: "",
                harga: "",
                image: "",
        },
        zexs: "",
        updateSubmit: false
    }
  },
  mounted(){
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/zexs').then(res => {
        this.zexs = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/zexs/', this.form).then(res => {
          this.load()
          this.form.mkn2 = " ";
          this.form.tradisi2 = " ";
          this.form.bahasa2 = " ";
          this.form.harga = " ";
           this.form.image = " ";
      })
 },
  edit(zex){ 
        this.updateSubmit = true
        this.form.id = zex.id 
        this.form.mkn2 = zex.mkn2 
         this.form.tradisi2 = zex.tradisi2 
          this.form.bahasa2 = zex.bahasa2 
           this.form.harga = zex.harga
             this.form.image = zex.image
    },
    update(form){ 
       return axios.put('http://localhost:3000/zexs/' + form.id , {mkn2: this.form.mkn2,tradisi2: this.form.tradisi2,bahasa2: this.form.bahasa2,harga: this.form.harga,image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.mkn2 = ''
         this.form.tradisi2 = ''
          this.form.bahasa2 = ''
           this.form.harga = ''
              this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
       },
       del(zex){
      axios.delete('http://localhost:3000/zexs/' + zex.id).then(res =>{
          this.load()
          let index = this.zexs.indexOf(form.mkn2)
          this.zexs.splice(index,1)
      })
    }
  }
}
  
  
</script>

<style scoped>
.header{
  text-align: center;
  margin-top: 0;
    margin-left: auto;
}
</style>




