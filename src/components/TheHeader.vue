<template>
    <header>
        <div class="logo">
            <fa :icon="['fas', 'gem']" />
        </div>
    </header>
</template>
<script>
export default {
    name: 'TheHeader',
}
</script>
<style lang="scss" scoped>
.logo {
    font-size: 5rem;
}
</style>
