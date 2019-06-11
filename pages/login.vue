<template>
    <section>
        <div class="container">
            <div align="center">
                <div class="pb-5"></div>
                <b-form @submit="onSubmit" @reset="onReset">
                    <b-form-input class="col-5 mb-2" placeholder="nama" v-model="form.name"></b-form-input>
                    <b-button variant="primary" type="submit">login</b-button>
                </b-form>
            </div>
        </div>
    </section>
</template>

<script>
import cookie from 'js-cookie'


export default {
    data(){
        return{
            form:{
                name:'',
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault()
            sessionStorage.setItem('mycat',this.form.name)
            location.href = "/logout"
        },
        onReset(){

        }
    }
}
</script>
