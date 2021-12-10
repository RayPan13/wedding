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
        a {
            display: block;
            padding: 4px 4px 8px;
        }
    }
    .menu-btn {
        width: 35px;
        padding: 4px;
        align-self: center;
        cursor: pointer;
        .line {
            width: 100%;
            height: 2px;
            background-color: #000;
            margin: 0 0 4px;
            &:last-child {
                margin: 0;
            }
        }
    }
}
</style>
