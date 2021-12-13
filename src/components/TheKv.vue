<template>
    <div class="kv">
        <transition-group name="fade" tag="div" class="carousel">
            <div class="item" v-for="(obj, index) of carousel" v-show="index === show" :key="obj.id">
                <img :src="obj.src" :alt="obj.id" />
            </div>
        </transition-group>
    </div>
</template>

<script>
const interval = 5000
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
            show: 0,
        }
    },
    mounted() {
        setInterval(() => {
            this.setShow(this.show + 1)
        }, interval)
    },
    methods: {
        setShow(number) {
            const max = this.carousel.length - 1
            if (number < 0) {
                this.show = max
            } else if (number > max) {
                this.show = 0
            } else {
                this.show = number
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.kv {
    .carousel {
        position: relative;
        .item {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            img {
                width: 100%;
            }
        }
    }
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter-to,
.fade-leave {
    opacity: 1;
}
</style>

// 1083 129 656 646 65 660 777 778 // https://picsum.photos/id/1/1920/1280
