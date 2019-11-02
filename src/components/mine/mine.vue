

<template><div>
    <div class="mineG" v-if="isShow">
        <userlogin></userlogin>
         <HotSearch></HotSearch>
    </div>
    <div v-if="!isShow">
        <me></me>
    </div>
  </div>
</template>
<script>
import HotSearch from "./hotSearch/hotSearch.vue"
import userlogin from "./components/userlogin"
import me from "./components/me.vue"
export default {
    data(){
        return{
         isShow:true
        }
    },
    components:{
         userlogin,
          HotSearch,
          me,
    },
    created(){
      if(window.localStorage.getItem("isLogin") == "true") {
          this.$router.replace("/me");
        }
        else{
           this.$router.replace("/userlogin");
        }
    }
}
</script>
<style lang="less" scoped>
    
</style>