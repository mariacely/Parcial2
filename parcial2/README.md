# Instrucciones para la ejecución

1. Correr el back

2. Correr el font

3. En el main.ts

    3.1 Cambiarle el puesto de escucha a 2000
    3.2 Arreglar el error con app.enableCors();
    
 4. Ya que el boton no lo lleva a los libros es necesario que pong el /books
 5. No se puede ver el detalle por temas de string, pero se puede verificar que esta 											todo en el codigo

# Pasos Parcial
### Dependencias adicionales usadas

 1. Se hizo uso de Tailwind remplazando asi CSS y Bootstrap
 2. Se hizo uso de Axios para todo el tema de GET y POST 

### Estructura de la App

 1. Se tienen 3 paginas Login que es donde se tiene el formulario para que cada usuario inicie sesión, LandingPage que es donde se tienen las cards de los libros que estan ahi mediante el componente Cards y finalmente se tiene DetailPage que esta hecha mediante el componente Datail y se muestra el detalle de cada book de acuerdo a su id
 2. Se configuro en App.js con react-router-dom para la conexion entre las paginas ya mencionadas.
 3. Se configuro IntlProvider , se crearon es.json y en.json, para la internacionalización de la app.

