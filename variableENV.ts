const HOME = Deno.env.get("HOME");

console.log('HOME ->', HOME);


import "https://deno.land/x/dotenv@v3.2.0/load.ts";

console.log('SECRET', Deno.env.get("SECRET"));