import { serve } from "https://deno.land/std@0.136.0/http/server.ts";

serve(() => new Response("Hello from United UI Community \n"));

console.log("http://localhost:8000/");