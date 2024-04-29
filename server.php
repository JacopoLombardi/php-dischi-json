
<?php

   // importo come stringa nel file 'server.php' il file 'disk.json' 
   $str_disk_list = file_get_contents('disk.json');

   // codifico la stringa in un array di php
   $array_disk = json_decode($str_disk_list);




   // modifiche future all'array
   
   if(isset($_POST['newTitleDisk'])){
      $new_item = [
         'title' => $_POST['newTitleDisk'],
         'author' => $_POST['newArtistDisk'],
         'year' => $_POST['newYearDisk'],
         'poster' => $_POST['newThumbDisk'],
         'genre' => ''
      ];

      // pusho nell'array principale il nuovo disco
      $array_disk[] = $new_item;

      // trasformo l'array php in un array json e lo pusho dentro il file disk.json
      file_put_contents('disk.json', json_encode($array_disk));
   };




   if(isset($_POST['indexDiskToDel'])){
      $indexDelete = $_POST['indexDiskToDel'];
      
      array_splice($array_disk, $indexDelete, 1);

      // trasformo l'array php in un array json e lo pusho dentro il file disk.json
      file_put_contents('disk.json', json_encode($array_disk));
   };





   
   // codifico l'array php in un array json
   header('Content-Type: application/json');

   // ritrasformo l'oggetto in una stringa
   echo json_encode($array_disk);

?>