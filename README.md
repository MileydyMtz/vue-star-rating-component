# Documentación del componente StarRating

## Descripción:
El componente StarRating es un componente reutilizable de Vue.js que permite a los usuarios calificar proporcionando una interacción de tipo "calificación por estrellas". Los usuarios pueden seleccionar un número de estrellas para reflejar su calificación y ver su calificación seleccionada resaltada visualmente. Este componente es útil para recopilar comentarios de los usuarios en diversas aplicaciones, como sitios web de reseñas, tiendas en línea, y más.

## Tecnologías usadas
A continuación, se enlistan las tecnologías y librerías utilizadas en el desarrollo de este componente:
* Vue 3 en Vite
* Preprocesador SCSS
* Vue Test Utils
* Vitest
* Prettier
* ESLint
    	
## Características del componente
### Métodos
El componente StarRating maneja dos métodos:
* **setRating(rating)**: Este método se llama cuando un usuario hace clic en una estrella. Rellena todas las estrellas hasta la que el usuario ha seleccionado, estableciendo el estado de las estrellas en *true* hasta el índice seleccionado.
* **setHover(rating)**: Este método se llama cuando un usuario pasa el cursor sobre una estrella. Rellena temporalmente todas las estrellas hasta la que el usuario ha pasado el cursor, estableciendo el estado de *hoverStars* en *true* hasta el índice seleccionado. 
    
### Propiedad Computada
* **finalStars()**: Es una propiedad calculada que combina las matrices *stars* y *hoverStars*. Crea una nueva matriz donde cada elemento es verdadero si el elemento correspondiente en *stars* o *hoverStars* es verdadero. Esta matriz se usa para determinar qué estrellas se deben llenar en la plantilla.

### Notas
Este componente:
- Encapsula el estado: El estado de la calificación y las estrellas en las que el usuario se desplaza se almacenan y se manejan internamente dentro del componente. Esto significa que este componente no emite eventos ni acepta props, lo que simplifica su uso.
- El componente muestra cinco estrellas por defecto. Cada estrella representa una calificación que los usuarios pueden seleccionar.
- Las estrellas se agrandan y cambian de color al desplazarse y al seleccionar una calificación.

### CSS
- Los estilos de StarRating están definidos en la sección de <style> y usan la extensión .scss.
- Los estilos están "scoped", lo que significa que solo se aplicarán a este componente y no afectarán a otros componentes de la aplicación donde se reutilice.
- Se pueden modificar las variables *$star-color* y *$star-filled-color* para cambiar el color de las estrellas sin seleccionar y el color que obtienen después de seleccionarlas o al pasar el cursor encima.
- La clase *star--filled* se aplica si la estrella correspondiente en la matriz finalStars es verdadera.

## Uso del componente
Para utilizar este componente, primero se debe descargar el archivo *StarRating.vue* que se encuentra dentro de *src/components* y agregarlo al proyecto donde se reutilizara. 
Dentro del proyecto se debe de importar e incluir en los componentes de la instancia de Vue, para posteriormente usar la etiqueta del componente dentro de la plantilla (template) de Vue, como se muestra a continuación:

```vue
<template>
  <StarRating />
</template>

<script>
import StarRating from './components/StarRating.vue'

export default {
  components: {
    StarRating
  }
}
</script>
```

## Demostración
Al importar y utilizar el componente de StarRating, se visualiza de la siguiente manera:

**Visualización de las estrellas vacías**

![stars](https://github.com/MileydyMtz/vue-star-rating-component/assets/85470047/46ebd468-bcbc-4db1-a4d3-226c0a576bb0)

**Estrellas al pasar el mouse sobre ellas**

![hover select stars](https://github.com/MileydyMtz/vue-star-rating-component/assets/85470047/215b462e-eead-4948-bf91-cb840d612a0b)

**Estrellas seleccionadas**

![selected stars](https://github.com/MileydyMtz/vue-star-rating-component/assets/85470047/d0046fab-cba5-49fa-b0dd-ab44f035c585)


## Pruebas
Las pruebas se han implementado utilizando vitest y vue-test-utils. 
A continuación, se presentan las pruebas implementadas:
* **renders properly**: Verifica que el componente renderiza correctamente cinco estrellas que inicialmente no están llenas.
* **fills stars on click**: Asegura que, al hacer clic en una estrella, todas las estrellas hasta esa estrella, inclusive, se llenan.
* **fills stars on hover**: Comprueba que, al pasar el cursor sobre una estrella, todas las estrellas hasta esa estrella, inclusive, se llenan.

