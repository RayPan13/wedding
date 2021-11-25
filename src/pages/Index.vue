<template>
    <h1>Gridsome !!</h1>
</template>
<style lang="scss" scoped>
h1 {
    color: map-get($color, main);
    @include media(768) {
        font-size: 3.5rem;
    }
    @include media(480) {
        font-size: 5.5rem;
    }
}
</style>
