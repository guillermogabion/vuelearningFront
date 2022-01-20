<template>

  <v-card
    
    flat
  >
    <v-card
      elevation="12"
      width="256"
    >
        <div id="nav">
          <v-navigation-drawer
            :value="drawer"
            :clipped="$vuetify.breakpoint.lgAndUp"
            app
            floating
            permanent
            style="top:8px !important; min-height:100vh !important;"
          >
          <v-img contain
            :src="logo"
            size="1"
            max-height="75"
            max-width="150"
            class="mx-auto"
            />
            <v-list
              dense
            
            >
            
            
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link :to="item.url"
                  style="height: 45px;"
              >
              
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content >
                  <v-list-item-title style="font-size: 15px; padding-left: 0.3em">{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
              <template v-slot:append>
                <div class="pa-2">
                    <!-- <template v-if="drawer">
                        <v-btn icon @click.stop="logout()">
                            <v-icon>mdi-logout-variant</v-icon>
                        </v-btn>
                    </template> -->
                    <!-- <template v-else> -->
                      <template >
                        <v-btn block @click.stop="logout">
                          Logout
                        </v-btn>
                    </template>
                </div>
            </template>
          </v-navigation-drawer>
        </div>
    </v-card>
  
  </v-card>
  

</template>


<script>
import logo from '@/assets/images/student.png'
  export default {
      props: {
      source: String,
    },
    computed : {
        drawer() {
            return this.$store.state.sidebar
        }   
    },
    data () {
      return {
          logo,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', url:"/dashboard" },
          { title: 'Students', icon: 'mdi mdi-account-group', url:'/students' },
          { title: 'Instructors', icon: 'mdi mdi-account-star', url:'/instructors' },
          { title: 'Subjects', icon: 'mdi mdi-book-open-page-variant', url:'/subjects' },
          { title: 'Grades', icon: 'mdi mdi-chart-box-outline', url:'/grades' },
          { title: 'Announcements', icon: 'mdi-forum', url:'/announcements' },
         
        ],
      }
    },

    methods: {
       logout() {
        localStorage.setItem('token', '')
        location.reload();
      },
    }
  }
</script>