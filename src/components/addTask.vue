<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label>Task</label>
            <input type="text" v-model="title" placeholder="Task"/>
        </div>
        <div class="form-control">
            <label>Day & Time</label>
            <input type="text" v-model="day"  placeholder="Date"/>
        </div>
        <div class='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox" v-model="reminder"/>
        </div>
        <input type="submit" value="Save Task" class="btn btn-block"/>
    </form>
</template>

<script>
export default {
    name:'AddTask',
    data(){
        return{
            title:'',
            day:'',
            reminder:false
        }
    },
    methods:{
        onSubmit(e){
            e.preventDefault()
            if(this.title.trim()===''){
                alert('Please provide the task name')
                return
            }
            const newTask={
                title:this.title,
                day:this.day,
                reminder:this.reminder
            }

            this.$emit('add-task',newTask)

            this.title=''
            this.day=''
            this.reminder=''
        }
    }

}
</script>

<style>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>