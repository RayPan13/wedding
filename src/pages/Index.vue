<template>
    <div class="title">
        <fa :icon="['fab', 'facebook-f']" />
        <fa :icon="['fab', 'twitter']" />
        <fa :icon="['fab', 'google']" />
        <fa :icon="['fab', 'linkedin-in']" />
        <fa :icon="['fab', 'instagram']" />
        <fa :icon="['far', 'envelope']" />
        <h3>Our Wedding Collection</h3>
        <h1>Our Amazing Gallery</h1>
    </div>
</template>
<style lang="scss" scoped>
.title {
    text-align: center;
    padding-top: 24px;
    svg {
        font-size: 2.4rem;
    }
}
h1 {
    font-size: 5.6rem;
    font-family: $cursive;
    font-weight: 500;
    margin: 0;
}
h3 {
    font-size: 1.6rem;
    color: map-get($color, main);
    font-weight: 500;
    margin: 0 0 12px;
}
</style>
