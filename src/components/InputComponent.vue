<template>
    <div class="form-group">
        <label v-if="is_input">{{ label }}</label>
        <input v-if="is_input" :type="type" :name="name" :id="name" :placeholder="placeholder"/>
        <textarea v-else :name="name" :placeholder="placeholder"></textarea>
    </div>
</template>

<script>
export default {
    name: "InputComponent",
    props:{
        is_input: Boolean,
        type: String,
        name: String,
        placeholder: String,
        label: String
    }
}
</script>

<style>
.form-group{
    width: 100%;
}

input{
width: 100%;
height: 40px;
border: 1px solid #ccc;
font-size: 16px;
padding-left: 4px;
}

textarea{
width: 100%;
height: 144px;
border: 1px solid #ccc;
font-size: 16px;
padding: 10px;
}

label{
width: 100%;
font-size: 16px;
}
</style>
