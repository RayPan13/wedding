<template>
    <header :class="{ 'show-menu': showMenu }">
        <div class="container">
            <div class="logo">
                <a href="/">logo</a>
                <fa :icon="['fas', 'gem']" />
            </div>
            <the-nav />
        </div>
        <div class="menu-btn" @click="openMenu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </header>
</template>
<script>
import TheNav from '@/components/TheNav.vue'
export default {
    components: { TheNav },
    name: 'TheHeader',
    props: {
        showMenu: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        openMenu() {
            this.$emit('open')
        },
    },
}
</script>
<style lang="scss" scoped>
header {
    padding: 32px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    &.show-menu {
        display: none;
    }
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo {
        font-size: 3rem;
        position: relative;
        color: #000;
        a {
            display: block;
            font-size: 0;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
    .menu-btn {
        position: absolute;
        top: 50%;
        right: 32px;
        transform: translateY(-50%);
        width: 35px;
        padding: 4px;
        align-self: center;
        cursor: pointer;
        &:hover {
            .line {
                width: 50%;
                &:nth-child(2) {
                    margin-left: -10%;
                    width: 120%;
                }
            }
        }
        .line {
            width: 100%;
            height: 2px;
            background-color: #000;
            margin: 0 auto 4px;
            transition: width 0.5s;
            &:last-child {
                margin: 0 auto;
            }
        }
    }
}
</style>
