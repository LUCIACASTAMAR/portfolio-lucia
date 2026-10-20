# Solicitudes y reuniones del portfolio

## Qué incluye
- Formulario público multilingüe (es, en, fr, de, it, pt, nl y ru) para presupuestos y peticiones de reunión.
- Guardado de solicitudes en Supabase.
- Aviso por email a la dirección configurada mediante Resend.
- Panel privado en `/admin`, con estado de cada solicitud y filtros.
- Las reuniones se guardan como solicitudes pendientes; no se bloquea un calendario ni se confirma una hora automáticamente.

## 1. Crear la base de datos
1. Crea un proyecto en Supabase.
2. Abre **SQL Editor**.
3. Ejecuta el contenido de `supabase/schema.sql`.
4. En Project Settings > API, copia la URL del proyecto y la clave **service_role**. No la pongas nunca en variables `NEXT_PUBLIC_*` ni en código del navegador.

## 2. Configurar el correo
1. Crea una cuenta en Resend y verifica un dominio remitente.
2. Crea una API key.
3. Configura `RESEND_API_KEY`, `RESEND_FROM_EMAIL` y `NOTIFICATION_EMAIL`. El remitente debe pertenecer a un dominio verificado en Resend.

## 3. Variables de entorno
Copia las variables de `.env.example` en Vercel > Project > Settings > Environment Variables. Define valores reales para:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `NOTIFICATION_EMAIL`
- `ADMIN_PASSWORD` (contraseña única y robusta para el panel)
- `SESSION_SECRET` (cadena aleatoria de al menos 32 caracteres)

Después de guardarlas, haz un nuevo deployment en Vercel. No compartas ni subas los secretos a GitHub.

## 4. Acceso y prueba
- Formulario: `/solicitudes?lang=es` (también `en`, `fr`, `de`, `it`, `pt`, `nl`, `ru`).
- Reunión: `/solicitudes?lang=es&type=meeting`.
- Panel privado: `/admin`.
- Envía una solicitud de prueba y comprueba que aparece en el panel y que llega el correo.

## Notas de seguridad
- El panel usa cookie HTTP-only, firma HMAC, expiración de siete días y comparación de contraseña en tiempo constante.
- La clave de Supabase se utiliza únicamente en rutas del servidor.
- La tabla no tiene políticas de lectura pública; no habilites acceso público a los datos.
- Antes de usarlo con clientes reales, configura protección adicional contra abuso (por ejemplo, Turnstile o rate limiting) y publica una política de privacidad y el aviso legal que correspondan a tu actividad.
