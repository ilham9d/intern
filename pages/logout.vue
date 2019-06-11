<template>
    <section>
        
        <div class="container">
            <div align="center">
                <div class="pb-5"></div>
                    <b-button variant="danger" @click="onSubmit">logout</b-button>
                
            </div>
        </div>
    </section>
</template>

<script>
export default {

    methods: {
        onSubmit(evt){
            evt.preventDefault()
            sessionStorage.removeItem('mycat')
            location.href="/login"
        }
    }
}
</script>
