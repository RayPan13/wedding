<template>
    <div id="app">
        <the-menu :showMenu="showMenu" @close="closeMenu" />
        <the-header :showMenu="showMenu" @open="openMenu" />
        <main :class="{ 'show-menu': showMenu }">
            <the-kv />
            <the-about />
        </main>
    </div>
</template>

<script>
import TheMenu from '@/components/TheMenu.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheKv from '@/components/TheKv.vue'
import TheAbout from '@/components/TheAbout.vue'
export default {
    components: { TheMenu, TheHeader, TheKv, TheAbout },
    metaInfo: {
        title: 'index - Wedding | Girdsome',
        meta: [
            {
                name: 'title',
                content: 'index - Wedding | Girdsome',
            },
        ],
    },
    data() {
        return {
            showMenu: false,
        }
    },
    methods: {
        openMenu() {
            this.showMenu = true
        },
        closeMenu() {
            this.showMenu = false
        },
    },
}
</script>
<style lang="scss" scoped>
main {
    transform: translateY(0);
    transition: transform 0.5s;
    &.show-menu {
        transform: translateY(100vh);
    }
}
</style>
