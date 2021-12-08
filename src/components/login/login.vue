<template>
  <div>
      login
      <input type="text" name="username" v-model="input.username" placeholder="Username">
      <input type="password" name="password" v-model="input.password" placeholder="Password">
      <button type="button" @click="login()">Login</button>
  </div>
</template>

<script>

export default {
    data(){
        return {
          input: {
            username: '',
            password: ''
          }
        }
    },
    methods: {
      login(){
        if(this.input.username == "admin" && this.input.password == "pass" ){
          this.$store.commit("setAuthentication", true);
          this.$router.replace({ name: "dashboard"});
        }else{
          console.log('Log in Failed')
        } 
      }
    }
}
</script>

<style>

</style>