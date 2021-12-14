<template>
    <div>
        <the-header />
        <slot></slot>
    </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
export default {
    components: { TheHeader },
}
</script>
