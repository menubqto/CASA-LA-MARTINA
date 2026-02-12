# Guía Técnica: Animación de Inicio (Splash Screen)

Esta guía explica el funcionamiento técnico de la animación de partículas que aparece al cargar la aplicación de **Estancia La Martina**.

## Componentes Principales

La animación se divide en dos partes: el procesamiento de datos (`logo_data.js`) y el renderizado en tiempo real (`index.html`).

### 1. Extracción de Datos (`logo_data.js`)
Antes de iniciar la animación, el sistema procesa la imagen del logo (`logo_new.png`) para convertirla en un mapa de partículas.

- **Procesamiento de Pixeles**: Utiliza un canvas oculto para "leer" la imagen.
- **Filtrado**: Solo extrae los pixeles que tienen una opacidad (alpha) superior a un umbral determinado (`config.threshold`).
- **Optimización**: No lee cada pixel (serían demasiados). Usa un `gap` (por defecto 2px) para saltar pixeles y mantener el rendimiento fluido.
- **Resultado**: Devuelve una lista de coordenadas `(x, y)` y el color `rgb` original de cada punto visible.

### 2. Renderizado de Animación (`SplashScreen` en React)
Una vez que el sistema tiene los puntos, utiliza un componente de React y la API de `requestAnimationFrame` para la animación.

#### Lógica Física
Cada partícula tiene:
- **Posición Destino**: Donde debe terminar (formando el logo).
- **Posición Actual**: Inicia en un punto aleatorio fuera de la pantalla.
- **Velocidad y Aceleración**: Calculadas dinámicamente en cada cuadro (frame).

```javascript
/* Ejemplo conceptual del movimiento */
const dx = p.targetX - p.currX;
const dy = p.targetY - p.currY;
p.vx = (p.vx + dx * 0.05) * 0.85; // Aceleración suave y fricción
p.vy = (p.vy + dy * 0.05) * 0.85;
p.currX += p.vx;
p.currY += p.vy;
```

### 3. Mecanismo de Fallback (Seguridad)
Si por alguna razón (bloqueo de CORS, error de carga o dispositivo antiguo) no se pueden extraer los puntos del canvas, el sistema tiene un "Plan B":
- Se desactiva la animación de partículas.
- Se muestra el logo estático con un efecto de `pulse` (latido) suave.
- Esto asegura que el usuario siempre pueda entrar al menú.

## Personalización
Puedes ajustar la calidad y velocidad en `logo_data.js`:
- `gap`: Aumentar este valor (ej. 3 o 4) genera menos partículas y hace la animación más ligera.
- `0.05` y `0.85`: Estos valores en la lógica física controlan la "elasticidad" y la "fricción" de las partículas al ensamblarse.
