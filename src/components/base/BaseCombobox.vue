<template>
    <select class="m-combobox m-combobox-search m-width-30" name="">
            <option value="">{{nameCombobox}}</option>
            <option value="">{{val1}}</option>
            <option value="">{{val2}}</option>
            <option value="">{{val3}}</option>
    </select>
</template>
<script>
export default {
    name:'combobox',
    props:{
        nameCombobox:{
            type:String,
            default:''
        },
        val1:{
            type:String,
            default:''
        },
        val2:{
            type:String,
            default:''
        },
        val3:{
            type:String,
            default:''
        },
    }
}
</script>