<template>
    <div class="container-user mx-auto detail-user_wrapper">
        <h1 class="title-detail_user">Detail User : #{{this.$route.params.id}}</h1>
        <div class="p-4">
            <div class="flex items-center justify-center">
                <div class="image-gallery_user">
                    <div class="image-cover">
                        <img :src="user.avatar" :alt="user.first_name" class="profile-image">
                    </div>
                </div>
            </div>

            <table class="mt-6 w-full" style="border-collapse:separate; border-spacing:0 15px;">
                <tr>
                    <td>Fullname</td>
                    <td>:</td>
                    <td>
                        <p class="user-name">
                            {{user.first_name}} {{user.last_name}}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td>
                        <p class="user-name">
                            {{user.email}}
                        </p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'DetailUser',
    computed: {
        ...mapGetters({
            user: 'user/getUser'
        })
    },
    created() {
        this.$store.dispatch("user/setUser",{id: this.$route.params.id});
    },
}
</script>

<style scoped>

    .title-detail_user{
        text-align: center;
        color: #F28F1D;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 1rem;
    }

    .detail-user_wrapper{
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .image-gallery_user{
        height: 100px;
        position: relative;
        border-radius: 50%;
    }

    .image-cover{
        width: 100px;
        height: 100%;
        position: relative;
        overflow: hidden;
        background-color: #999;
        border-radius: 50%;
    }

    .profile-image{
        width: 100px;
        height: 100px;
    }
</style>