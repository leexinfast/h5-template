<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>

    export default {
        name: 'App',
        components: {

        },
        data() {
            return {

            }
        },
        created() {

        },
        methods: {

        }
    }
</script>

<style lang="stylus">
    html, body, #app
        background #F8F8F8
        margin 0
        height 100%
        font-family Consolas !important

    .loadStyle
        width 25%
        margin auto
        padding-top 60vw
</style>
