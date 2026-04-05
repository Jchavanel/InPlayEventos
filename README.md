# InPlay Eventos · Web estática Fase 1.5

Versión estática revisada para cerrar mejor la Fase 1 del roadmap.

## Objetivo
Reforzar tres áreas antes de pasar a la inscripción real:
- propuesta de valor por tipo de usuario
- fichas de evento con más contenido
- sección pública de confianza

## Archivos
- `index.html`
- `styles.css`
- `script.js`
- `README.md`

## Publicación
Se puede publicar directamente en GitHub Pages o cualquier hosting estático.
No requiere Node, build ni dependencias.

## Próximo paso recomendado
Fase 2: páginas de detalle de evento + formulario real de inscripción.


## Supabase

Esta versión conecta la preinscripción directamente contra una tabla `preinscriptions` de Supabase usando la clave pública (`anon/publishable key`) en frontend.

Antes de publicar:
1. Crea la tabla y políticas con el SQL facilitado.
2. Verifica que RLS esté activado.
3. Publica la web en GitHub Pages o en cualquier hosting estático.


## Fase 2.1 incluida

Esta versión añade:
- preinscripción guardada en Supabase
- panel básico de revisión
- acceso admin mediante email + contraseña con Supabase Auth
- actualización de estado (`pending`, `reviewed`, `confirmed`, `cancelled`)
- confirmación por email asistida mediante `mailto:` desde el panel

### Importante sobre el email

La confirmación por email en esta fase no es un envío transaccional automático. Para automatizarlo de forma segura necesitas una Edge Function o un proveedor de email con secreto server-side.

### SQL adicional necesario

Debes permitir `select` y `update` a usuarios autenticados autorizados por email en las políticas RLS de `preinscriptions`.
