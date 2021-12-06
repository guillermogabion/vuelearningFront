<template>
    <div>
        <!-- <v-navigation-drawer
        right
        v-model="drawer"
        fixed
        width="500"
        temporary
        >
           
        </v-navigation-drawer> -->
        <!-- <v-main style="margin: 10% 0;">
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm6 md4 lg3>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="white">
                                <v-spacer></v-spacer>
                                <v-toolbar-title>
                                    <v-img contain
                                        :src="logo"
                                        size="1"
                                        max-height="100"
                                        max-width="200"
                                        class="mx-auto"
                                    />
                                </v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        prepend-icon="mdi-account"
                                        color="orange"
                                        v-model="email"
                                        label="Email"
                                        class="pt-8"
                                        dense
                                        type="text"
                                        v-validate="'required'"
                                        :error-messages="errors.collect('Email')"
                                        data-vv-name="Email"
                                    />
                                    <v-text-field
                                        prepend-icon="mdi-lock"
                                        color="orange"
                                        v-model="password"
                                        class="pt-8"
                                        dense
                                        label="Password"
                                        type="password"
                                        v-validate="'required'"
                                        :error-messages="errors.collect('Password')"
                                        data-vv-name="Password"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                    color="orange"
                                    dark
                                    block
                                    @click="Login"
                                >Login</v-btn>
                            </v-card-actions>
                            <v-card-actions>
                                <v-btn
                                    v-if="on_menu"
                                    color="blue"
                                    dark
                                    block
                                    @click="createUser"
                                >Register</v-btn>
                            </v-card-actions>
                        </v-card>
                        <v-dialog
                            v-model="dialog"
                            width="300"
                        >
                            <v-card class="dialogMessage">
                                <v-card-title>
                                    Login Failed
                                </v-card-title>
                                <v-card-text>
                                    Invalid Account Credentials.
                                    Please try Again!
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="dialog = false"
                                    >Confirm</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>  
                            </v-card>
                        </v-dialog>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-main> -->
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.5 (413)
              </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
              $ • Italian, Cafe
            </div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2"
              text
              @click="reserve"
            >
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
    
    </div>
</template>
<script>
    // import axios from '@/plugins/axios'
    // // import RegisterUser from '../login/register.vue'
    // import logo from '@/assets/images/logo.png'
    // // import { login } from "@/repositories/user.api";
    // export default {
    //     data() {
    //         return {
    //             email : '',
    //             password: '',
    //             loading: false,
    //             logo,
    //             dialog: false,
    //             drawer:false,
    //             on_menu: true
    //         }
    //     },
    //     components:{
    //         // RegisterUser,
    //     },
    //     methods: {
    //         Login() {
    //             this.loading = true
    //             const login_data = {
    //                 email: this.email,
    //                 password: this.password
    //             }
    //             this.$validator.validateAll().then(result => {
    //                 if(result) {
    //                     login(login_data).then(({data}) => {
    //                         this.$store.commit('login', data)
    //                         localStorage.setItem('token', data.access_token)
    //                         this.$router.push({ name: "dashboard"})
    //                     }).catch((errors)=> {
    //                         console.log(errors)
    //                         this.dialog = true
    //                     })
    //                     .finally(() => {
    //                         this.loading = false
    //                     })
    //                 }
    //             })
    //         },
    //         create() {
    //             this.$validator.validateAll().then(result => {
    //                 if(result) {
    //                     axios.post('UserRegistration', this.formData).then(({data}) => {
    //                         console.log(data)
    //                         this.registerDialog = false
    //                         this. clearInput();
    //                     }).catch((error)=> {
    //                         console.log(error)
    //                         this.dialog_alert = true
    //                     });
    //                 }
    //             });
    //         },
    //         registerUser(){
    //             this.registerDialog = true
    //         },
    //         createUser() {
    //             this.drawer=true;
    //         },
    //         closeUserRegister() {
    //             this.drawer=false;
    //         },
    //         clearInput() {
    //             this.formData = {
    //             pic: '',
    //             first_name: '',
    //             last_name: '',
    //             email: '',
    //             mobile: '',
    //             username: '',
    //             password: '',
    //             confirm:''
    //             }
    //         }
    //     }
    // }
</script>
<style scoped>
    .text{
        padding-top: 0.5em;
        padding-left: 20em;
    }

    .formWrapper {
        padding: 2em;
    }

    .ss{
        color: red;
    }
</style>