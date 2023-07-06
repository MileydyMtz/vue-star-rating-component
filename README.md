# Documentacion del componente StarRating

## Descripcion:
El componente StarRating es un componente reutilizable de Vue.js que permite a los usuarios calificar proporcionando una interacción de tipo "calificación por estrellas". Los usuarios pueden seleccionar un número de estrellas para reflejar su calificación y ver su calificación seleccionada resaltada visualmente. Este componente es útil para recopilar comentarios de los usuarios en diversas aplicaciones, como sitios web de reseñas, tiendas en línea, y más.

## Tecnologias usadas
A continuación se enlistan las tecnologías y librerías utilizadas en el desarrollo de este componente:
* Vue 3 en Vite
* Preprocesador SCSS
* Vue Test Utils
* Vitest
    	
## Caracteristicas del componente
### CSS
- Los estilos de StarRating están definidos en la seccion de <style> y usan la extencion .scss.
- Se pueden modificar las variables *$star-color* y *$star-filled-color* para cambiar el color de las estrellas sin seleccionar y el color que obtienen despues de seleccionarlas o al pasar el cursor encima.
- Los estilos están "scoped", lo que significa que solo se aplicarán a este componente y no afectarán a otros componentes de la aplicación donde se reutilice.

### Notas
Este componente:
- Encapsula el estado: El estado de la calificación y las estrellas en las que el usuario se desplaza se almacenan y se manejan internamente dentro del componente. Esto significa que este componente no emite eventos ni acepta props, lo que simplifica su uso.
- El componente muestra cinco estrellas por defecto. Cada estrella representa una calificación que los usuarios pueden seleccionar.
- Las estrellas se agrandan y cambian de color al desplazarse y al seleccionar una calificación.

## Uso del componente
Para utilizar este componente, primero se debe descargar el archivo *StarRating.vue* que se encuentra dentro de *src/components* y agregarlo al proyecto donde se reutilizara. 
Dentro del proyecto se debe de importar e incluir en los componentes de la instancia de Vue, para posteriormente usar la etiqueta del componente dentro de la plantilla (template) de Vue, como se muestra a continuacion:

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

## Demostracion
Al importar y utilizar el componente de StarRating, se visualiza de la siguiente manera:

**Visualización de las estrellas vacias**

![stars](https://github.com/MileydyMtz/vue-star-rating-component/assets/85470047/46ebd468-bcbc-4db1-a4d3-226c0a576bb0)

**Estrellas al pasar el mouse sobre ellas**

![hover select stars](https://github.com/MileydyMtz/vue-star-rating-component/assets/85470047/215b462e-eead-4948-bf91-cb840d612a0b)

**Estrellas seleccionadas**

![selected stars](https://github.com/MileydyMtz/vue-star-rating-component/assets/85470047/d0046fab-cba5-49fa-b0dd-ab44f035c585)


## Pruebas
Las pruebas se han implementado utilizando vitest y vue-test-utils. 
A continuación se presentan las pruebas implementadas:
* **renders properly**: Verifica que el componente renderiza correctamente cinco estrellas que inicialmente no están llenas.
* **fills stars on click**: Asegura que al hacer clic en una estrella, todas las estrellas hasta esa estrella, inclusive, se llenan.
* **fills stars on hover**: Comprueba que al pasar el cursor sobre una estrella, todas las estrellas hasta esa estrella, inclusive, se llenan.

