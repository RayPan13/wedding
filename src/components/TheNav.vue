<template>
    <nav>
        <ul>
            <li v-for="item of menu" :key="item.txt">
                <a :href="item.url">{{ item.txt }}</a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'TheNav',
    data() {
        return {
            menu: [
                { txt: 'HOME', url: '/' },
                { txt: 'ABOUT', url: '/' },
                { txt: 'RSVP', url: '/' },
                { txt: 'GALLERY', url: '/' },
                { txt: 'OUR STORY', url: '/' },
                { txt: 'REVIEWS', url: '/' },
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
nav {
    display: inline-flex;
    margin-right: 32px;
    @include media(768) {
        display: none;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
    }
    li {
        padding: 0 8px;
        font-size: 1.4rem;
        font-weight: 700;
        color: #000;
        a {
            display: block;
            padding: 4px;
            position: relative;
            &::after {
                content: '';
                display: block;
                width: 0;
                height: 2px;
                background-color: #000;
                position: absolute;
                left: 50%;
                bottom: -1px;
                transform: translateX(-50%);
                transition: width 0.5s;
            }
            &:hover {
                &::after {
                    width: 90%;
                }
            }
        }
    }
}
</style>
