
const {createApp} = Vue;

createApp({

   data(){
      return{
         title: 'Lista di Dischi',
         apiUrl: 'server.php',
         diskList: [],
         x: false
      };
   },
   
   methods:{
      getApi(){
         axios.get(this.apiUrl)
            .then(result => {
               this.diskList = result.data
               console.log(this.diskList)
            })
      }
   },

   mounted(){
      this.getApi();
   }

}).mount('#app');