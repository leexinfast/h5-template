<template>
    <div class="app-contain">
        hello world
    </div>
</template>

<script>
    import Core from "../core/core";

    export default {
        name: 'dashboard',
        components: {

        },
        data() {
            return {
                Core: Core,
                list:[],
            }
        },
        mounted() {
            dd.biz.navigation.setTitle({
                title: '邮箱正文',
                onSuccess: function(data) {},
                onFail: function(error) {}
            })
        },
        filters: {},
        methods: {

        },
    }
</script>

<style lang="stylus" scoped>

</style>
