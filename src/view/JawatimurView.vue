<template>

  <div class="header">

    <form @submit.prevent="add" id="input">
          <h1>Jawa Timur</h1>
        <input type="hidden" v-model="form.id " required>
        <label for="">Makanan</label><br>
        <input type="text" v-model="form.mkn3" required><br>
        
          <label for="">Tradisi</label><br>
          <input type="text" v-model="form.tradisi3" required><br>
          
            <label for="">Bahasa </label><br>
             <input type="text" v-model="form.bahasa3" required><br>

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
    <tr v-for="nlp in nlps" :key="nlp.id">
 
      <td>{{nlp.mkn3}}</td> 
      <td>{{nlp.tradisi3}}</td> 
      <td>{{nlp.bahasa3}}</td> 
      <td><img :src="nlp.image" alt="" width="150"></td>
      <td> <a href="#input"><button @click="edit(nlp)"><i class="fa-solid fa-file-pen"></i></button></a> |
      |  <button @click="del(nlp)"><i class="fa-sharp fa-solid fa-eraser"></i></button></td>
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
          mkn3: "",
            tradisi3: "",
              bahasa3: "",
                harga: "",
                image: "",
        },
        nlps: "",
        updateSubmit: false
    }
  },
  mounted(){
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/nlps').then(res => {
        this.nlps = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/nlps/', this.form).then(res => {
          this.load()
          this.form.mkn3 = " ";
          this.form.tradisi3 = " ";
          this.form.bahasa3 = " ";
          this.form.harga = " ";
           this.form.image = " ";
      })
 },
  edit(nlp){ 
        this.updateSubmit = true
        this.form.id = nlp.id 
        this.form.mkn3 = nlp.mkn3 
         this.form.tradisi3 = nlp.tradisi3 
          this.form.bahasa3 = nlp.bahasa3 
           this.form.harga = nlp.harga
             this.form.image = nlp.image
    },
    update(form){ 
       return axios.put('http://localhost:3000/nlps/' + form.id , {mkn3: this.form.mkn3,tradisi3: this.form.tradisi3,bahasa3: this.form.bahasa3,harga: this.form.harga,image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.mkn3 = ''
         this.form.tradisi3 = ''
          this.form.bahasa3 = ''
           this.form.harga = ''
              this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
       },
       del(nlp){
      axios.delete('http://localhost:3000/nlps/' + nlp.id).then(res =>{
          this.load()
          let index = this.nlps.indexOf(form.mkn3)
          this.nlps.splice(index,1)
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




