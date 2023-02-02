<template>
    <div id="photo">{{photo}}</div>
</template>

<script>
    import request from "@/network/request";

    export default {
        name: "photo",
        data(){
            return {
                photo:null
            }

        },
        mounted() {
            request({
                url: '/doctor/getphoto'
            }).then(res => {
                this.photo = res.data.data;
            })
        }
    }
</script>

<style scoped>

</style>