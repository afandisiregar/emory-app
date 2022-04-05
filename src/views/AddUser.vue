<template>
    <div class="container-user mx-auto mt-6">
        <form @submit.prevent="handleSubmitUser">
            <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" placeholder="Input your name" v-model="name"
                name="name" v-validate="'required|min:3'" :class="{'input': true, 'is-danger': errors.has('name') }" autocomplete="off">
                <span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
            </div>
            <div class="form-group">
                <label for="nob" class="form-label">Job</label>
                <input type="text" class="form-control" placeholder="Input your job" v-model="job"
                name="job" v-validate="'required|min:3'" :class="{'input': true, 'is-danger': errors.has('job') }" autocomplete="off">
                <span v-show="errors.has('job')" class="text-danger">{{ errors.first('job') }}</span>
            </div>

            <div class="form-group">
                <button type="submit" class="btn-submit" :disabled="name === '' || job === ''">Save</button>
                <button type="button" class="btn-danger" @click="$router.go(-1)">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return { 
            name: '',
            job: '',
            id: this.$route.params.id !== undefined ? this.$route.params.id : null
        }
    },
    created() {
        if (this.id !== null) {
            this.getDetailUser()
        }
    },
    methods: {
        getDetailUser() {
            this.$store.dispatch("user/setUser",{id: this.$route.params.id})
            .then(response => {
                this.name = response.first_name + ' ' + response.last_name
            })
        },
        handleSubmitUser() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    if (this.id === null ) {
                        this.$store.dispatch('user/postUser',{
                            name: this.name,
                            job: this.job
                        })
                        .then(() => {
                            this.$store.dispatch('notification/success','Successfully added')
                            this.$router.push('/')
                        })
                    }else{
                        this.$store.dispatch('user/putUser',{
                            name: this.name,
                            job: this.job
                        })
                        .then(() => {
                            this.$store.dispatch('notification/success','Successfully updated')
                            this.$router.push('/')
                        })
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
    .form-group{
        display: flex;
        flex-direction: column;
    }

    .form-label{
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    .form-control{
        border-radius: 6px !important;
        margin-bottom: 10px;
        width: 100% !important;
        padding: 0 10px !important;
        height: 48.41px;
        border: 0.5px solid #F2F2F2 !important;
        background: #F2F2F2 !important;
        transition: all .3s;
    }

    .form-control:active{
        outline-color: #F2F2F2;
    }

    .btn-submit{
        background-color: #F28F1D;
        width: 100%;
        padding: 1rem;
        color: #FFF;
        font-size: 16px;
        border-radius: 8px;
        margin: 1rem 0;
    }

    .btn-danger{
        background-color: #E0E0E0;
        width: 100%;
        padding: 1rem;
        color: #FFF;
        font-size: 16px;
        border-radius: 8px;
    }

    @media (max-width:480px){
        .form-label{
            font-size: 14px;
        }
        
        .btn-submit, .btn-danger{
            padding: .75rem;
        }
    }
</style>