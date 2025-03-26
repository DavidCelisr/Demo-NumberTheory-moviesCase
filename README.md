# Recomendacion de contenido basado en numeros primos

Este proyecto explora un enfoque matemático innovador para la recomendación de ítems basado en la teoría de los números primos. A diferencia de los sistemas tradicionales que utilizan álgebra lineal y aprendizaje automático, este modelo emplea propiedades de los números primos para representar usuarios e ítems y calcular la compatibilidad mediante la divisibilidad y el Máximo Común Divisor (MCD).

# ¿Cómo Funciona?
Representación de Ítems y Usuarios

Cada ítem y usuario es representado por un identificador único, generado a partir de la multiplicación de números primos:

Ítems: Se representan con un identificador obtenido al multiplicar números primos asociados a sus características.

Usuarios: Su identificador se obtiene multiplicando números primos que representan sus intereses o los ítems consumidos.

# Compatibilidad por Divisibilidad
La compatibilidad entre un usuario y un ítem se evalúa mediante congruencia modular:
R(u,c) \equiv id(c_n) \mod id(u_m)
Si el residuo es cercano a cero, el ítem es altamente recomendable para el usuario.

# Nivel de Relevancia (MCD)
El grado de similitud entre el usuario y el ítem se mide con el Máximo Común Divisor:
NR(u_m, c_n) = MCD(id(u_m), id(c_n))
Un MCD alto indica una mayor afinidad entre el usuario y el ítem, lo que sugiere una mejor recomendación.

## 🚀 Casos de Uso

Este modelo puede aplicarse en diversos escenarios, como:

Sistemas de recomendación de películas, libros y música.

Plataformas de e-commerce para sugerir productos.

Personalización de contenido en redes sociales.
