export const primerHeaders = {
  accept: "application/json",
  "content-type": "application/json",
  "X-API-KEY": Deno.env.get("PRIMER_API_KEY"),
  "X-API-VERSION": "2.2",
};

export const primerApiUrl = "https://api.sandbox.primer.io";
