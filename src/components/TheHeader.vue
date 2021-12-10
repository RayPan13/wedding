<template>
    <header>
        <div class="logo">
            <fa :icon="['fas', 'gem']" />
        </div>
        <the-nav />
    </header>
</template>
<script>
import TheNav from '@/components/TheNav.vue'
export default {
    components: { TheNav },
    name: 'TheHeader',
}
</script>
<style lang="scss" scoped>
.logo {
    font-size: 5rem;
}
</style>
