
const {createApp} = Vue;

createApp({

   data(){
      return{
         title: 'Lista di Dischi',
         apiUrl: 'server.php',
         diskList: [],
         x: false,

         newDisk: {
            title: '',
            artist: '',
            year: ''
         }
      };
   },
   
   methods:{

      // chiamata iniziale alla lista dei dischi
      getApi(){
         axios.get(this.apiUrl)
            .then(result => {
               this.diskList = result.data
               //console.log(this.diskList)
            })
      },

      

      // funzione per aggiungere un nuovo disco
      addNewDisk(){
         //console.log(this.newDisk)
         const data = new FormData();
         data.append('newTitleDisk', this.newDisk.title);


         // data.append('newArtistDisk', this.newDisk.artist)
         // data.append('newYearDisk', this.newDisk.year)

         console.log(data)


         axios.post(this.apiUrl, data)
            .then(result => {
               this.diskList = result.data
               console.log('array con dati aggiornati------', this.diskList)
            })
      }





   },

   mounted(){
      this.getApi();
   }

}).mount('#app');