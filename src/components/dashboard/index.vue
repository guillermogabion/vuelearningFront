<template>
    <div>
      <v-container class="grey lighten-5">
    <v-row >
      <v-col order="first">
        <v-card
          class="pa-6 ma-2"
          height="200px"
          outlined
          tile
          color="#81D4FA"
        >
          First,
        </v-card>
      </v-col>
      <v-col  cols="12" :lg="3" :sm="6" :xs="12" order="second">
        <v-card
          class="pa-4"
          height="200px"
          outlined
          tile
          color="#00897B"
        >
          Second, 
        </v-card>
      </v-col>
       <v-col order="third">
        <v-card
          class="pa-4"
          height="200px"
          outlined
          tile
          color="#A5D6A7"
        >
          Third,
        </v-card>
      </v-col>
      <v-col cols="12" :lg="3" :sm="6" :xs="12" order="last">
        <v-card
          class="pa-4"
          height="200px"
          outlined
          tile
          color="#E57373"
        >
         fourth,
        </v-card>
      </v-col>
    </v-row>
  </v-container>
    </div>
</template>

<style scoped>
.padding {
    padding: 1em;
}
</style>
