<template>
  <div class="login-page">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4 login-page-title">
               <v-avatar size="100px">
                  <img  
                    :src="user_logo"
                  >
                </v-avatar>
              </div>
            </v-list-item-content>
          </v-list-item>
            <v-text-field
              v-model="email"                   
              label="Email"
              type="email"
              required
              class="login-page-text-field"
            ></v-text-field>
            <v-text-field
              v-model="password"          
              label="Password"
              type="password"
              required
               class="login-page-text-field"
            ></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              outlined  
              @click="Login()"
              color="primary"
              class="login-button"
            >
              Login
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
  </div>
</template>





<script>
   import user_logo from '../../assets/images/student.png'
   import { login } from "@/repositories/user.api";
export default {
    data(){
        return {
            user_logo,
            email: '',
            password: ''
     
        }
    },
    methods: {
      Login() {
          
                const login_data = {
                    email: this.email,
                    password: this.password
                }
              
                  login(login_data).then(({data}) => {
                      // this.$store.commit('login', data)
                      localStorage.setItem('token', data.access_token)
                      this.$router.push({ name: "dashboard"});
                  }).catch((errors)=> {
                      console.log(errors)
                      alert('Error Credentials')
                     
                  })
                        
                    

                // if(this.email == '123@12.com' && this.password == '123'){
                //   this.$router.push({ name: "dashboard" });
                // }
              
            },
       
    }
}



</script>

<style>
.login-page {
  padding-top : 10em;
}
.login-page-text-field{
  padding-right: 1em;
  padding-left: 1em;
  padding-top: 1em;
}
.login-page-text-button {
  padding-left: 3em;
  padding-right: 3em;
}
.login-page-title{
  padding-top: 3em;
  padding-left: 9em;
}

</style>
