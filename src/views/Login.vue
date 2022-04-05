<template>
    <div>
        <div class="navbar-login_wrapper">
            <div class="container mx-auto container-login">
                <div class="w-full">
                    <h6 class="title-navbar_login">Login</h6>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Enter your account</h6>
            </div>
            <div class="card-body">
                <form @submit.prevent="handleSubmitLogin">
                    <div class="form-group mb-6">
                        <label for="email" class="form-label">
                            <i class="ri-user-line"></i>
                        </label>
                        <input type="text" class="form-control" placeholder="Email" v-model="email"
                        name="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" autocomplete="off"
                        >
                        <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
                    </div>
                    <div class="form-group mb-6">
                        <label for="password" class="form-label">
                            <i class="ri-key-line"></i>
                        </label>
                        <input type="password" class="form-control" placeholder="Password" v-model="password"
                        name="password" v-validate="'required|min:8'" :class="{'input': true, 'is-danger': errors.has('password') }" autocomplete="off"
                        >
                        <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
                    </div>
                    <div>
                        <button type="submit" class="btn-login">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert2'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleSubmitLogin() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    swal.fire({
                        title: '', // add html attribute if you want or remove
                        text: 'Please wait',
                        allowOutsideClick: false,
                        showConfirmButton: false,
                        didOpen: function() {
                        swal.showLoading()
                        }
                    })
                    this.$store.dispatch('account/login',{
                        email: this.email,
                        password: this.password
                    })
                    .then(() => {
                        window.location.reload()

                        swal.close()
                        swal.hideLoading()
                    })
                }
            })
        }
    }
}
</script>

<style scoped>
    .navbar-login_wrapper{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        height: 80px;
    }

    .navbar-login_wrapper::after{
        content: '';
        display: block;
        width: 480px;
        height: 80px;
        background: linear-gradient(
        82.01deg
        , #F28F1D -6.66%, #FFBD72 105.53%);
        position: absolute;
        top: 0;
    }

    .container-login{
        display: flex;
        align-items: center;
        z-index: 100;
        padding: 0 .75rem;
    }
    
    .title-navbar_login{
        font-size: 16px;
        font-weight: bold;
        color: #FFFFFF;
    }

    .card{
        background-color: #FFF;
        border: 1px solid #E0E0E0 !important;
        border-radius: 8px !important;
        margin: 1rem .75rem;
        padding: 1rem;
    }

    .card-header{
        margin-bottom: 1rem;
    }

    .card-title{
        font-size: 16px;
        font-weight: bold;
        color: #4F4F4F;
    }

    .form-group{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        width: 100%;
    }

    .form-label{
        display: flex;
        align-items: center;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: center;
        white-space: nowrap;
        background: #F2F2F2 !important;
        border-top-left-radius: 100px !important;
        border-bottom-left-radius: 100px !important;
        border: 0.5px solid #F2F2F2 !important;
    }

    .form-control{
        display: block;
        width: 90%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        height: 48.41px;
        border: 0.5px solid #F2F2F2 !important;
        background: #F2F2F2 !important;
        border-top-right-radius: 100px !important;
        border-bottom-right-radius: 100px !important;
        font-size: 14px;
    }

    .btn-login{
        color: #FFF;
        font-size: 16px;
        font-weight: bold;
        background-color: #F28F1D;
        border-color: #F28F1D;
        width: 100%;
        border-radius: 100px;
        padding: .75rem;
    }
</style>