<template>
    <div class="container-user mx-auto mt-4" style="padding-bottom:30px;">
        <div class="button-add_wrapper flex items-center justify-end">
            <button type="button" class="add-button p-2" @click="$router.push('/users/add')">Add User</button>
        </div>
        <router-link :to="`/users/${user.id}`" class="card-user" style="height: 80px;" v-for="(user,index) in users" :key="index">
            <div class="image-gallery_user">
                <div class="image-cover">
                    <img :src="user.avatar" :alt="user.first_name" class="profile-image">
                </div>
            </div>
            <div class="ml-2">
                <p class="user-name">
                    {{user.first_name}} {{user.last_name}}
                </p>
                <p class="user-email">{{user.email}}</p>
            </div>
            <div class="edit-user_wrapper bg-green-500" @click.prevent="$router.push(`/users/${user.id}/edit`)">
                <i class="ri-pencil-fill"></i>
            </div>
        </router-link>
        <paginate
        :pageCount="totalPage"
        :clickHandler="handlePagination"
        :prevText="'Prev'"
        :nextText="'Next'"
        :prev-class="'prevClass'"
        :next-class="'nextClass'"
        :page-class="'bulletClass'"
        :containerClass="'pagination-wrapper'">
        </paginate>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'User',
    data() {
        return {
            page: 1
        }
    },
    computed: {
        ...mapGetters({
            users: 'user/getUsers',
            totalPage: 'user/getTotalPage'
        })
    },
    created() {
        this.$store.dispatch("user/getUsers", { self: this });
    },
    methods: {
        handlePagination(page) {
            const url = new URL(window.location.href);
            const params = new URLSearchParams(url.search);
            params.append('page',page)
            this.$store.dispatch("user/getUsers", params.toString())
        }
    }
}
</script>

<style scoped>
    .button-add_wrapper{
        margin-bottom: 2rem;
    }

    .card-user{
        display: flex;
        flex-direction: row;
        background-color: #FFF;
        margin-bottom: 1rem;
        border: 0.5px solid #E0E0E0 !important;
        border-radius: 8px !important;
        padding: 1rem 1rem;
        cursor: pointer;
        transition: all .3s;
        position: relative;
    }

    .card-user:hover{
        background-color: #F28F1D;
        color: #FFF;
    }

    .add-button{
        background-color: #F28F1D;
        border-radius: 8px;
        color: #FFF;
        font-size: 14px;
    }

    .pagination-wrapper{
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-top: 1px solid #E0E0E0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }

    .edit-user_wrapper{
        position: absolute;
        top: -10px;
        right: -6px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: #FFF;
    }
</style>