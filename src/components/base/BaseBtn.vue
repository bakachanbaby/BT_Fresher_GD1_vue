<template>
    <button id="m-btn-add-ele" class="m-btn" @click="BtnAddOnClick">
              <div class="m-btn-text">{{BtnText}}</div>
    </button>
</template>
<script>
export default {
    name:'btn',
    props:{
        BtnText:{
            type:String,
            default: ""
        },
        BtnAddOnClick:{
            type:Function,
            default: ()=> {}
        }
    }
}
</script>