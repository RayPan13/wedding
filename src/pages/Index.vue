<template>
    <div id="app">
        <the-menu :showMenu="showMenu" />
        <the-header :showMenu="showMenu" />
        <the-kv :showMenu="showMenu" />
    </div>
</template>

<script>
import TheKv from '@/components/TheKv.vue'
import TheMenu from '@/components/TheMenu.vue'
import TheHeader from '@/components/TheHeader.vue'
export default {
    components: { TheKv, TheMenu, TheHeader },
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
}
</script>
