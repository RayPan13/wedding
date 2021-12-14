<template>
    <div id="app">
        <Layout>
            <the-kv />
        </Layout>
    </div>
</template>
<script>
import TheKv from '@/components/TheKv.vue'
export default {
    components: { TheKv },
    metaInfo: {
        title: 'index - Wedding | Girdsome',
        meta: [
            {
                name: 'title',
                content: 'index - Wedding | Girdsome',
            },
        ],
    },
}
</script>
