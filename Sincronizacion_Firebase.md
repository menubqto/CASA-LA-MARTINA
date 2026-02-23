# Documentación de Sincronización y Caché - Firebase

Esta documentación detalla los problemas de conexión identificados y las soluciones implementadas para garantizar una carga rápida y fiable del menú digital en todos los dispositivos y navegadores.

## 1. Problemas Identificados

### A. Cuelgue en Conexión Inicial ("Race Condition")
**Problema**: Durante la primera carga del día o en conexiones frías, la aplicación se quedaba bloqueada indefinidamente en el estado "Conectando con el Menú...".
**Causa**: Había una "carrera de tiempos" (race condition) entre la inicialización de Firebase y la autenticación anónima. Si la respuesta de Firebase tardaba más de lo esperado, el flujo de la aplicación se rompía antes de alcanzar el estado de conexión exitosa.

### B. Retraso de 20 Segundos en Chrome iOS
**Problema**: Específicamente en navegadores Chrome para iPhone/iPad, la aplicación tardaba alrededor de 20 segundos en mostrar el menú, mientras que en otros navegadores era casi instantáneo.
**Causa**: Chrome en iOS tiene un rendimiento muy limitado con **IndexedDB** (la base de datos interna que usa Firebase para guardar datos localmente). Firebase intentaba inicializar un caché de ~40MB por defecto, lo que generaba ese retraso masivo.

---

## 2. Soluciones Implementadas

### A. Timeout y Recuperación Automática
- **Qué se hizo**: Se añadió un temporizador de **10 segundos** al inicio de la conexión.
- **Cómo**: Si Firebase no logra conectar en ese tiempo, se ejecuta `window.location.reload()`.
- **Para qué**: Evitar que el cliente vea una pantalla de carga infinita. Si la conexión falla o se queda "pegada", la app se reinicia sola para intentar una conexión limpia.

### B. Optimización Global del Caché (1MB)
- **Qué se hizo**: Se redujo el tamaño del caché de Firestore de 40MB a **1MB** para todos los navegadores.
- **Cómo**: Usando la función `initializeFirestore` con el parámetro `cacheSizeBytes: 1048576`.
- **Para qué**: 
    1. **Eliminar el delay en Chrome iOS**: Al reducir el caché, la inicialización de la base de datos interna es casi instantánea.
    2. **Consistencia**: Dado que el menú es un archivo pequeño (<100KB), 1MB es más que suficiente para guardar los datos localmente sin sacrificar rendimiento.

### C. Protocolo Long Polling
- **Qué se hizo**: Se forzó el uso de `experimentalForceLongPolling`.
- **Para qué**: Mejorar la estabilidad en redes móviles 4G/5G donde los WebSockets (protocolo por defecto) a menudo fallan o son bloqueados por operadores móviles, causando errores de conexión intermitentes.

### D. Mejora en el Flujo de Autenticación
- **Qué se hizo**: Se reemplazaron funciones `async/await` dentro de callbacks críticos por promesas estándar `.then()/.catch()`.
- **Para qué**: Garantizar la máxima compatibilidad con motores de búsqueda y navegadores antiguos o específicos (como WebViews de redes sociales o Chrome iOS) que a veces tienen problemas con el manejo de micro-tareas asíncronas en eventos de sistema.

---

## 3. Resumen Técnico de Cambios

| Característica | Configuración Anterior | Configuración Nueva | Objetivo |
| :--- | :--- | :--- | :--- |
| **Tiempo de Espera** | Infinito (Cuelgue) | 10 Segundos | Recarga automática si falla |
| **Tamaño de Caché** | ~40 MB | 1 MB | Eliminar delay en iOS Chrome |
| **Protocolo** | WebSockets | Long Polling | Estabilidad en redes móviles |
| **Compatibilidad** | Async/Await | Promesas Estándar | Funcionalidad en 100% de apps |

---
*Ultima actualización: Febrero 2026*
