<template>
    <div class="flex items-center nav-main-container">
        <div class="container mx-auto navbar-container">
            <a href="#">
                <h1 class="nav-brand">Emory App</h1>
            </a>
            <ul class="nav-link_wrapper">
                <li class="profile-image px-4" @click="$router.push('/profile')">
                    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." class="shadow rounded-full max-w-full h-auto align-middle border-none" />
                </li>
            </ul>    
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Navbar',
    data() {
        return {
            backgroundUrl: require('./../../assets/img/profile.jpg')
        }
    }
}
</script>

<style scoped>
    .nav-brand {
        font-size: 20px;
        font-weight: bold;
    }

    .nav-main-container{
        height: 64px;
        background-color: #FFF;
        border-bottom: 1px solid #e8e8e8;
        transition: .3s;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }

    .profile-image {
        width: 80px;
        cursor: pointer;
    }

    .nav-link{
        font-weight: 600;
        font-size: 14px;
    }

    .nav-link:hover{
        background-color: #FFF;
        border-color: 1px solid #1baa56;
    }
    
    .nav-link-login{
        background: none;
        border: 1px solid #1baa56;
        border-radius: 4px;
        color: #1baa56;
        font-size: 14px;
        font-weight: 700;
        height: 40px;
        justify-content: center;
        line-height: 16px;
        width: 82px;
        margin-left: 10px;
        padding: 10px 14px;
    }

    .nav-link_wrapper{
        display: flex;
    }

    .navbar-container{
        display: flex; 
        align-items: center; 
        justify-content: space-between;
    }
</style>
