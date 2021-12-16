<template>
    <div class="menu">
        <div class="close-btn"></div>
        <div class="container">
            <div class="logo">
                <a href="/">logo</a>
                <fa :icon="['fas', 'gem']" />
            </div>
            <ul>
                <li v-for="item of menu" :key="item.txt">
                    <a :href="item.url">{{ item.txt }}</a>
                </li>
            </ul>
            <div class="footer">
                <div class="social">
                    <span v-for="obj of social" :key="obj.icon[1]">
                        <a :href="obj.url"></a>
                        <fa :icon="[obj.icon[0], obj.icon[1]]" />
                    </span>
                </div>
                <div class="copyright">© 2021 Raka. Made With Love by Abusayed Shuvo</div>
            </div>
        </div>
    </div>
</template>
<script>
import TheNav from '@/components/TheNav.vue'
export default {
    components: { TheNav },
    name: 'TheMenu',
    data() {
        return {
            menu: [
                { txt: 'Home', url: '/' },
                { txt: 'About', url: '/' },
                { txt: 'Rsvp', url: '/' },
                { txt: 'Gallery', url: '/' },
                { txt: 'Our Story', url: '/' },
                { txt: 'Reviews', url: '/' },
            ],
            social: [
                { icon: ['fab', 'facebook-f'], url: 'javascript:;' },
                { icon: ['fab', 'instagram'], url: 'javascript:;' },
                { icon: ['fab', 'twitter'], url: 'javascript:;' },
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
.menu {
    width: 100%;
    height: 100vh;
    padding: 24px;
    z-index: 9;
    .close-btn {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 24px;
        right: 24px;
        z-index: 2;
        cursor: pointer;
        &::after,
        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 3px;
            background-color: #000;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
            transform-origin: center;
        }
        &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }
    .container {
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .logo {
        position: relative;
        font-size: 5rem;
        a {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            font-size: 0;
            z-index: 1;
        }
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li {
        font-size: 1.8rem;
        font-weight: 500;
        margin-bottom: 24px;
        a {
            display: inline-block;
            position: relative;
            &::after {
                content: '';
                display: block;
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 0%;
                height: 2px;
                background-color: #000;
                transition: width 0.5s;
            }
            &:hover {
                &::after {
                    width: 100%;
                }
            }
        }
    }
    .footer {
        font-size: 1.2rem;
        .social {
            margin-bottom: 24px;
            span {
                position: relative;
                margin-right: 24px;
                font-size: 2rem;
                &:last-child {
                    margin-right: 0;
                }
                a {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    display: block;
                }
            }
        }
        .copyright {
            font-weight: 500;
        }
    }
}
</style>
