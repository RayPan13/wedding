<template>
    <div class="kv">
        <div class="carousel">
            <div class="item" v-for="obj of carousel" :key="obj.id">
                <img :src="obj.src" :alt="obj.id" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheKv',
    data() {
        return {
            carousel: [
                {
                    id: 1,
                    src: 'https://picsum.photos/id/656/1920/1280',
                },
                {
                    id: 2,
                    src: 'https://picsum.photos/id/646/1920/1280',
                },
                {
                    id: 3,
                    src: 'https://picsum.photos/id/777/1920/1280',
                },
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
.kv {
    .carousel {
        .item {
            width: 100%;
            img {
                width: 100%;
            }
        }
    }
}
</style>

// 1083 129 656 646 65 660 777 778 // https://picsum.photos/id/1/1920/1280
