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
