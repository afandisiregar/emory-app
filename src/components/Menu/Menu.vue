<template>
    <div class="nav-bottom">
        <router-link to="/" class="menu-bottom">
            <i class="ri-home-8-fill"></i>
            <span class="menu-title">Home</span>
        </router-link>
        <div class="menu-bottom">
            <i class="ri-user-2-fill"></i>
            <span class="menu-title">User</span>
        </div>
        <div class="menu-bottom">
            <i class="ri-notification-fill"></i>
            <span class="menu-title">Notification</span>
        </div>
        <div class="menu-bottom">
            <i class="ri-login-box-fill"></i>
            <span class="menu-title">Profile</span>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Menu'
}
</script>

<style scoped>
    .nav-bottom{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60px;
        z-index: 1024;
        background-color: #ffffff;
        box-shadow: rgb(108 114 124 / 16%) 0px -2px 4px 0px;
        padding: 0px;
        margin-left: auto;
        margin-right: auto;
        display: none;
        align-items: center;
        justify-content: space-between;
    }

    .menu-bottom{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 8px;
        width: 20%;
    }

    .menu-title{
        font-size: 14px;
        font-weight: 400;
    }

    @media (max-width:480px){
        .nav-bottom{
            display: flex;
        }
    }
</style>
