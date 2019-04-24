## Archivo ocupado para instalación
  E: No se pudo bloquear /var/lib/dpkg/lock - open (11: Recurso
  no disponible temporalmente)
  E: No se pudo bloquear el directorio de administración (/var/lib/dpkg/),
  ¿quizás haya algún otro proceso utilizándolo?
  
    $ sudo fuser -vki  /var/lib/dpkg/lock

  Las opciones utilizadas en el comando sirven para:

    -v activa el modo verbose, para los que nos gusta ver en todo momento lo que está haciendo.
    -k mata el proceso que mantiene el fichero ocupado.
    -i pide confirmación para matar al proceso.

  Una vez terminado con el bloqueo, ejecutamos el siguiente comando para reparar los posibles paquetes rotos.

    $ sudo dpkg --configure -a
    
  Terminado este último paso, ya podemos volver a instalar. Acaba la instalación ejecutamos el siguiente comando para eliminar paquetes que ya no sirvan o se hayan quedado “colgando” y listo.

    $ sudo apt-get autoremove
