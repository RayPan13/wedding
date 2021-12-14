<template>
    <div class="kv">
        <transition-group name="fade" tag="div" class="carousel">
            <div class="item" v-for="(obj, index) of carousel" v-show="index === show" :key="obj.id">
                <img :src="obj.src" :alt="obj.id" />
            </div>
        </transition-group>
        <div class="control">
            <ul>
                <li
                    v-for="(obj, index) of carousel"
                    @click="setShow(index)"
                    :key="obj.id"
                    :class="{ active: index === show }"
                >
                    <div class="dot"></div>
                </li>
            </ul>
        </div>
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
            debounce: false,
        }
    },
    mounted() {
        setInterval(() => {
            this.debounce ? (this.debounce = false) : this.setShow(this.show + 1)
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
            this.debounce = true
        },
    },
}
</script>
<style lang="scss" scoped>
.kv {
    position: relative;
    .carousel {
        position: relative;
        padding-top: 66.7%;
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
    .control {
        position: absolute;
        top: 50%;
        left: 24px;
        transform: translateY(-50%);
        z-index: 2;
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        li {
            width: 30px;
            height: 30px;
            margin-bottom: 4px;
            position: relative;
            box-sizing: border-box;
            cursor: pointer;
            &::after {
                content: '';
                display: block;
                width: 2px;
                height: 16px;
                background-color: #000;
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
            }
            &:last-child {
                &::after {
                    display: none;
                }
            }
            &.active {
                .dot {
                    width: 100%;
                    height: 100%;
                    border-width: 6px;
                }
            }
            .dot {
                width: 60%;
                height: 60%;
                border-radius: 50%;
                border: 2px solid #000;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: width 0.5s, height 0.5s, border 0.1s;
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
