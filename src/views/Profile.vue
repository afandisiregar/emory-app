<template>
    <div class="mt-6" style="padding-bottom:80px;">
        <h1 class="title-detail_user">Edit Profile</h1>
        <div class="flex items-center justify-center mb-4">
            <div class="image-gallery_user relative">
                <div class="image-cover">
                    <img :src="photo" alt="..." ref="photoProfile" class="shadow rounded-full max-w-full h-auto align-middle border-none" />
                </div>
                <button type="button" class="edit-user_wrapper bg-green-500 cursor-pointer" @click="handleButtonUpload">
                    <i class="ri-pencil-fill"></i>
                </button>
                <input type="file" style="display:none;" id="fileUpload" @change="handleUploadImage">
            </div>
        </div>
        <form @submit.prevent="handleSubmitProfile">
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="text" class="form-control" placeholder="Input your email" v-model="email"
                name="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" autocomplete="off">
                <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
            </div>
            <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" placeholder="Input your password" v-model="password"
                name="password" v-validate="'required|min:8'" :class="{'input': true, 'is-danger': errors.has('password') }" autocomplete="off">
                <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
            </div>
            <div class="form-group">
                <label for="password" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" placeholder="Input your confirm password" v-model="confirm_password"
                name="confirm password" v-validate="'required|confirmed:password'" :class="{'input': true, 'is-danger': errors.has('confirm password') }" autocomplete="off">
                <span v-show="errors.has('confirm password')" class="text-danger">{{ errors.first('confirm password') }}</span>
            </div>

            <div class="form-group">
                <button type="submit" class="btn-submit">Save</button>
                <button type="button" class="btn-danger" @click="$router.go(-1)">Back</button>
            </div>
        </form>

        <div class="card-user mt-10" @click="handleLogout">
            Logout
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert2'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Profile',
    data() {
        return {
            photo: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg',
            email: 'eve.holt@reqres.in',
            password: '',
            confirm_password: ''
        }
    },
    methods: {
        handleButtonUpload() {
            document.getElementById('fileUpload').click()
        },
        handleSubmitProfile() {
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

                    setTimeout(() => {
                        swal.close()
                        swal.hideLoading()
                        this.$store.dispatch('notification/success','Profile updated successfully')
                    }, 1000);
                }
            })
        },
        handleUploadImage(e){
            const fi = e.target.files[0]
            const file = Math.round(fi.size / 1024)
            if (file >= 800) {
                this.$store.dispatch('notification/error','File terlalu besar, harus dibawah 500kb')
            }

            const url = URL.createObjectURL(fi)
            swal.fire({
                title: '', // add html attribute if you want or remove
                text: 'Please wait',
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: function() {
                    swal.showLoading()
                }
            })

            setTimeout(() => {
                swal.close()
                swal.hideLoading()
                this.$refs.photoProfile.src = url
                this.$store.dispatch('notification/success','Image profiles updated successfully')
            }, 1000);
        },
        handleLogout() {
            swal.fire({
                title: '', // add html attribute if you want or remove
                text: 'Please wait',
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: function() {
                    swal.showLoading()
                }
            })

            setTimeout(() => {
                localStorage.removeItem('access_token')
                swal.close()
                swal.hideLoading()
                this.$router.push('/login')
            }, 2000);
        }
    }
}
</script>

<style scoped>
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
    .title-detail_user{
        text-align: center;
        color: #F28F1D;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 1rem;
    }

    .edit-user_wrapper{
        position: absolute;
        bottom: 0;
        right: -6px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: #FFF;
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