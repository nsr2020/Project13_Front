deploy of the back is  https://project-13-back.vercel.app/api/v1/....
deploy of the front is narcisotrailersp13-nsr2020s-projects.vercel.app

Este proyecto está dividio en dos partes:

Back****
He realizado 3 colecciones que están conectadas entre sí, users, movies y platforms, dónde he realizado diferentes enrutados para luego poder usarlos en el front,
está el Crud completo en cada una de ellas y luego he ajustado algunos controladores a mis necesidades específicas de busqueda.
Básicamente este proyecto es de Trailer de Peliculas, dónde hay tres plataformas: Netflix, Hbo y Prime Video, se puede acceder a cada una de ellas y cada pelicula está 
clasificada por categoría(Acción, Comedia, Terror e Infantil)
En este caso en los users he creado tanto admin como users para la verificación, aunque solo me voy a enfocar en user para la experiencia del mismo.


Front****
Este proyecto simula una página de trailers para consultar los mismos y poder agregar las peliculas como vistas a tu perfil de usuario.
Está compuesto por 7 páginas:

**StartPage: **
Aquí te recibe con una pequeña pantalla dónde simula un cine y has de clicar start para pasar a los formularios de login y Register, tanto si tienes credenciales cómo 
sino puedes acceder, creando una cuenta (los formularios mediante un title te indican lo que necesitas de cada campo y en Register te indica en el placeHolder lo necesario
para userName y password), también el botón de enviar esta configurado para que sólo se active cuando los campos estén correctamente rellenados, en caso contrario no
te va a dejar clicarlo, luego en el login si el usuario no existe mediante un toast de Chakra te lo informa, al igual que si todo ha ido bien, y lo mismo para el
register.

**Platforms:**
Una vez registrados o logeados, se guarda en el localstorage nuestro user y token, con los cuales en cada página los usaremos para que en caso de que no haya seas 
rederigido a la página de inicio.
Este componente te recibe con tres imágenes de las 3 plataformas para que vayas a la que más te guste.
(En este componente cómo sólo usaba un useState no hice useReducer para esta página)

**Movies:**
En esta página se puede encontrar los films clasificados por categoría en cajas con overFlowX auto para que de sensación de que están dentro de la misma y los 
puedas deslizar.

En estos tarjetas hay una imagén que si clicas sobre ella te muestra el nombre de la pelicula en la parte superior derecha de la caja y en la izq la categoría.
También hay una icono de información que te lleva a la info en detalle de la pelicula.


En la parte de arriba hay un enlace de un Text de All Movies que te lleva a un buscador...

Hay un menú que si lo clicas te aparecen otra vez las diferentes plataformas para que puedas volcar las peliculas de cada una de ellas, si ya estás en la misma 
plataforma, te saldrá un toast informando de que ya te encuentras en esa plataforma.


**Movies_Search:**
Es un buscador de todas las peliculas de las tres plataformas, lo único que está ordeanda por plataformas, verás todas las peliculas de la plataforma en sí, también 
puedes cambiar en el menu, en caso de que no sea la misma y a la hora de buscar en el input te va a mostrar todas las peliculas que empiecen por la letra que pongas
de todas las plataformas.
También te da la opción de limpian el filtro de busqueda y en caso que de intentes borrar o buscar un espacio, no hará nada, lo gestioné con un return! Y si lo que buscas
no esta, te lo informará con un no Movies Found y volverá a cargar todas las peliculas otra vez!
Aquí tambien en cada carta de las peliculas si le das click a la imagén, te muestra la foto de la misma en un menu que se desliza de izq a derecha y también te deja ir
a Movie en detalle.

**Movie:**
En el detalle de cada pelicula, podrás ver la info de la misma, abajo del todo hay un boton para ver el Trailer.
Y en la parte del menu, si clicas, esta vez podrás ver tres opciones diferentes una para ver el trailer de la peli, otro para agregar esa pelicula como pelicula vista 
y una última opción para entrar en el area de información de usuario logeado.
Menu de Video: En caso de que la pelicula ya esté agregada, te informa y no te la agrega 2 veces,



User: En esta sección te lleva a una ficha de usuario, con tu foto, tu nombre, email y aquí es dónde podrás hacer logOut o cerrar sesion y también hay un acordeón que te
deja desplegar las peliculas vistas, en caso de que tengas sino te informa...(En esta parte puedes borrar la pelicula, en caso de que la hayas agregado por error o quieras quitarla)

**Trailer:**
En esta parte te deja ver el trailer de la pelicula en sí, navegando a otra página para ver el trailer de YouTube.

Para todos los componentes he usado para el responsive las medidas de Chakra para base, tablet y pc.

Por otro lado comentar que he usado 3 useReducer que eran en las páginas que había más de dos useState, y de esta forma tenerlo todo más controlado.
Estan los actions de cada página y las funciones están en utils divididas tb en carpetas, de modo que puedes acceder rápido a la info que necesites.

Espero que te guste el proyecto, en realidad me hubiera gustado coger los datos de Apis de trailers que ya tienen más peliculas y actualizadas, pero puedo usar el mismo 
para conectarme a cualquiera y así ya se me actualiza solo.






