<template>
    <div class="kv" :class="{ 'show-menu': showMenu }">
        <transition-group name="fade" tag="div" class="carousel">
            <div
                class="item"
                v-for="(obj, index) of carousel"
                v-show="index === show"
                :key="obj.id"
                :style="{ backgroundImage: 'url(' + obj.src + ')' }"
                @mousemove="mouseMove"
                @mouseleave="mouseLeave"
            >
                <div class="container">
                    <div class="txt">
                        <p
                            :style="{
                                transform: `translate3d(${-halfMoveObj.x}px, ${-halfMoveObj.y}px, 0px)`,
                                transition: `transform ${halfMoveObj.duration}s`,
                            }"
                        >
                            {{ title[0].toUpperCase() }}
                        </p>
                        <h1
                            :style="{
                                transform: `translate3d(${-moveObj.x}px, ${-moveObj.y}px, 0px)`,
                                transition: `transform ${moveObj.duration}s`,
                            }"
                        >
                            {{ title[1] }}
                        </h1>
                        <p
                            :style="{
                                transform: `translate3d(${-halfMoveObj.x}px, ${-halfMoveObj.y}px, 0px)`,
                                transition: `transform ${halfMoveObj.duration}s`,
                            }"
                        >
                            {{ title[2].toUpperCase() }}
                        </p>
                    </div>
                </div>
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
        <div class="scroll-btn">
            <fa :icon="['fas', 'angle-down']" />
        </div>
        <div class="social-media">
            <a :href="obj.url" v-for="obj of social" :key="obj.icon[1]">
                <fa :icon="[obj.icon[0], obj.icon[1]]" />
            </a>
        </div>
    </div>
</template>

<script>
const interval = 5000
export default {
    name: 'TheKv',
    props: {
        showMenu: {
            type: Boolean,
            required: true,
        },
    },
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
            social: [
                { url: '/', icon: ['fab', 'facebook-f'] },
                { url: '/', icon: ['fab', 'youtube'] },
                { url: '/', icon: ['fab', 'instagram'] },
            ],
            title: ['Happy Wedding', 'Isabella & Alex', 'We Are Getting Married'],
            show: 0,
            moveObj: { x: 0, y: 0, duration: 0 },
            debounce: false,
        }
    },
    computed: {
        halfMoveObj() {
            return { x: this.moveObj.x / 2, y: this.moveObj.y / 2, duration: 0 }
        },
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
        mouseLeave() {
            this.moveObj = { x: 0, y: 0, duration: 0.5 }
        },
        mouseMove(e) {
            let walk = 60
            let { offsetWidth: width, offsetHeight: height } = e.target
            let { offsetX: x, offsetY: y } = e
            this.moveObj.x = Math.round((x / width) * walk - walk / 2)
            this.moveObj.y = Math.round((y / height) * walk - walk / 2)
            this.moveObj.duration = 0
        },
    },
}
</script>
<style lang="scss" scoped>
.kv {
    position: relative;
    transform: translateY(-100vh);
    transition: transform 0.5s;
    &.show-menu {
        transform: translateY(0);
    }
    .carousel {
        position: relative;
        height: 100vh;
        .item {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.2);
            }
            .txt {
                width: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 2;
                text-align: center;
                color: #fff;
                pointer-events: none;
                p {
                    margin: 0;
                    font-size: 2rem;
                    font-weight: 500;
                    letter-spacing: 1px;
                    @include media(1024) {
                        font-size: 1.6rem;
                    }
                    @include media(768) {
                        font-size: 1.4rem;
                    }
                }
                h1 {
                    margin: 12px 0;
                    font-size: 8rem;
                    font-family: $cursive;
                    @include media(1024) {
                        font-size: 6rem;
                    }
                    @include media(768) {
                        font-size: 5rem;
                    }
                    @include media(480) {
                        font-size: 4rem;
                    }
                }
            }
        }
    }
    .control {
        position: absolute;
        top: 50%;
        left: 24px;
        transform: translateY(-50%);
        z-index: 2;
        @include media(768) {
            display: none;
        }
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
                background-color: #fff;
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
                border: 2px solid #fff;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: width 0.5s, height 0.5s, border 0.1s;
            }
        }
    }
    .scroll-btn {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #fff;
        border-radius: 50%;
        position: absolute;
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        cursor: pointer;
        svg {
            font-size: 2rem;
            color: #fff;
        }
    }
    .social-media {
        position: absolute;
        top: 50%;
        right: 24px;
        transform: translateY(-50%);
        color: #fff;
        font-size: 1.8rem;
        text-align: center;
        @include media(480) {
            display: none;
        }
        a {
            display: block;
            padding: 0 8px;
            margin: 0 0 12px;
            &:last-child {
                margin: 0 0 0;
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
