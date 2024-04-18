
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
            })
      },

      

      // funzione per aggiungere un nuovo disco
      addNewDisk(){

         // creo un form da inviare a php con i dati presi dagli input
         const data = new FormData();

         // inserisco i dati prelevati dagli input
         data.append('newTitleDisk', this.newDisk.title);
         data.append('newArtistDisk', this.newDisk.artist)
         data.append('newYearDisk', this.newDisk.year)

         console.log(data)

         // chiamata axios per mandare 'data' al server.php
         axios.post(this.apiUrl, data)
         
            // ricevo la lista di dischi aggiornata
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