<template>
    <div>
        <Sidebar/>
        <Header/>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
export default {
    components: {
        Sidebar,
        Header,
    }
}
</script>