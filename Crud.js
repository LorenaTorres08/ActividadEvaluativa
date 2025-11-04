const url = "https://ndywtbbeahwohdthwvqq.supabase.co/rest/v1/Usuarios";
const API_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5keXd0YmJlYWh3b2hkdGh3dnFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNzg1MTUsImV4cCI6MjA3Nzg1NDUxNX0.8t7jg9pjt2ylTaYTG1LFJSz8zQZK9UXa2hogBOXUAOM';
//1. OBTENER TODOS LOS USUARIOS DE LA TABLA "USUARIOS"
console.log('Procesando punto 1. Obteniendo todos los datos de la tabla usuarios>>>>...');
fetch(url,{headers:{'apikey': API_KEY}})//fetch hace una petición HTTP a la url de mi supabase enviando también la clave de lectura
.then(r=>r.json())
.then(data=>console.log('todos los datos de la tabla usuarios esta asi',data))

// 2. SELECCIONAR USUARIO ID 3
console.log('n\=== 2. SELECCIONAR USUARIO ID 3 ===');
