import { Hono } from "hono/mod.ts";
import { cors } from "hono/middleware.ts";

import "std/dotenv/load.ts";
import { post } from "./utils/post.ts";
import { primerApiUrl, primerHeaders } from "./api/const.ts";

const app = new Hono();

app.use("/*", cors());

app.get("/", (c) =>
  c.text(["Available endpoints:", "", "  POST /client-session"].join("\n"))
);

///////////////////////////////////////////
// Create a client session and send back the client token
///////////////////////////////////////////

app.post("/client-session", async (c) => {
  const res = await post<ClientSession>(
    `${primerApiUrl}/client-session`,

    /* ✨ Feel free to update this 👇 */
    {
      orderId: crypto.randomUUID(),

      order: {
        // Line items for this session
        // If your checkout does not have line items:
        //  > Pass a single line item with the total amount!
        lineItems: [
          {
            itemId: "shoes-123",
            description: "Some nice shoes!",
            amount: 2500, // Amount should be in minor units!
            quantity: 1,
          },
        ],
      },

      currencyCode: "GBP",

      // emailAddress and billingAddress are required for 3DS
      customer: {
        emailAddress: "test@test.com",
        mobileNumber: "+6588889999",
        firstName: "John",
        lastName: "Smith",
        billingAddress: {
          firstName: "John",
          lastName: "Smith",
          postalCode: "CB94BQ",
          addressLine1: "47A",
          countryCode: "CL",
          city: "Cambridge",
          state: "Cambridgeshire",
        },
      },
    },
    /* */

    primerHeaders
  );

  return c.json(res);
});

type ClientSession = {
  clientToken: string;
};

///////////////////////////////////////////
// Serve
///////////////////////////////////////////

await Deno.serve(app.fetch);
