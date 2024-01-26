export const primerHeaders = {
  accept: 'application/json',
  'content-type': 'application/json',
  'X-API-KEY': process.env.PRIMER_API_KEY || '',
  'X-API-VERSION': '2.2',
  'Legacy-Workflows': 'false',
};

export const primerApiUrl = 'https://api.sandbox.primer.io';
