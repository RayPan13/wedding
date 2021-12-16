<template>
    <div class="menu">
        <div class="container">
            <div class="logo">
                <a href="/">logo</a>
                <fa :icon="['fas', 'gem']" />
            </div>
            <the-nav class="menu" />
        </div>
    </div>
</template>
<script>
import TheNav from '@/components/TheNav.vue'
export default {
    components: { TheNav },
    name: 'TheMenu',
}
</script>
<style lang="scss" scoped>
.menu {
    width: 100%;
    height: 100vh;
}
</style>
