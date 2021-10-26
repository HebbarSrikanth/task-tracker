<template>
    <header>
        <h3>{{title}}</h3>
        <Button v-show="homePage"  @btn-click="$emit('toggle-add-task')"  
           :title="showAddToggle?'Close':'Add Task'" 
           :color="showAddToggle?'red':'green'"/>
    </header>
</template>

<script>
import Button from './Button.vue'
export default {
    name:'Header',
    props:{
        title:String,
        showAddToggle:Boolean
    },
    components:{
        Button
    },
    computed:{
        homePage(){
            if(this.$route.path==='/'){
                return true
            }else{
                return false
            }
        }
    }
}
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>