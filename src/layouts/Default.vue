<template>
    <div>
        <v-app>
        <!-- <app-confirm ref="app_confirm" /> -->
            <Base/>
        </v-app>
  </div>
</template>
<script>
    import Base from './includes/Base'

    export default {
        components : {
        Base,
        
        },
        mounted(){
            // this.$root.$confirm = this.$refs.app_confirm.open
        },
    }
</script>