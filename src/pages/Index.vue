<template>
    <div id="app">
        <the-header />
        <the-kv />
    </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import TheKv from '@/components/TheKv.vue'
export default {
    components: { TheHeader, TheKv },
}
</script>
