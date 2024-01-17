# lol-in-a-nutshell

## Inicio del Servidor

Para iniciar el servidor, sigue estos pasos:

1. Ejecuta el siguiente comando en tu terminal:

   ```bash
   dotnet run --launch-profile https

2. Verifica que el servidor se ha iniciado correctamente accediendo a la siguiente dirección en tu navegador:

   ```bash
   https://localhost:<puerto>
   
   Generalmente el puerto es 7224 para HTTPS o 5037 para HTTP

3. Si no encuentras ningún endpoint en esta dirección, asegúrate de visitar la interfaz Swagger para explorar la documentación y endpoints disponibles:

    ```bash
   https://localhost:<puerto>/swagger/index.html