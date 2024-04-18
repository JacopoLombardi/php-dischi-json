
<?php

   // importo come stringa nel file 'server.php' il file 'disk.json' 
   $str_disk_list = file_get_contents('disk.json');

   // codifico la stringa in un array di php
   $array_disk = json_decode($str_disk_list);




   // modifiche future all'array
   
   if(isset($POST['newTitleDisk'])){
      $new_item = [
         'title' => $_POST['newTitleDisk'],
         'author' => '',
         'year' => '',
         'poster' => '',
         'genre' => ''
      ];

      $array_disk[] = $new_item;

     

      file_put_contents('disk.json', json_encode($array_disk));
   }












   
   // codifico l'array php in un array json
   header('Content-Type: application/json');

   // ritrasformo l'oggetto in una stringa
   echo json_encode($array_disk);

?>