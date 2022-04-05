<template>
    <div style="height:100vh; padding-top:4rem; padding-left:20px; padding-right:20px;">
        <Navbar />
        <div style="border-bottom:0.5px solid #999; padding-bottom:1rem;">
            <h1 class="title-home">Welcome Back, William!</h1>
            <p class="desc-home text-gray-400">Let's do the best today</p>
        </div>
        <router-view/>
    </div>
</template>

<script>
import Navbar from './../components/Navbar/Navbar.vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components: {
        Navbar
    }
}
</script>

<style scoped>
    .title-home {
        font-size: 40px;
    }
    .card-dashboard{
        height: 208px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
        column-gap: 0.875rem;
        cursor: pointer;
    }

    .icon-user{
        font-size: 34px;
        background-color: rgb(37 99 235);
        padding: 10px;
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
    }

    .icon-arrow{
        font-size: 20px;
    }

    .value-user{
        font-size: 40px;
    }

    .title-user{
        font-size: 18px;
    }
</style>