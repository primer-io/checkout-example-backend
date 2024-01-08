import "dotenv/config";
import fastify from "fastify";
import cors from "@fastify/cors";
import { randomUUID } from "node:crypto";

import { post } from "./utils/post.ts";
import { primerApiUrl, primerHeaders } from "./api/const.ts";

const app = fastify();
await app.register(cors, {
  origin: true,
});

app.get("/", () =>
  ["Available endpoints:", "", "  POST /client-session"].join("\n")
);

///////////////////////////////////////////
// Create a client session and send back the client token
///////////////////////////////////////////

app.post("/client-session", async (c) => {
  const res = await post<ClientSession>(
    `${primerApiUrl}/client-session`,

    // ✨ Feel free to update this 👇
    // Check the API reference here: https://apiref.primer.io/reference/create_client_side_token_client_session_post
    {
      orderId: randomUUID(),

      order: {
        // Line items for this session
        // If your checkout does not have line items:
        //  > Pass a single line item with the total amount!
        lineItems: [
          {
            itemId: "shoes-123",
            description: "Some nice shoes!",
            // Amount should be in minor units!
            amount: 2500,
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

    primerHeaders
  );

  return res;
});

type ClientSession = {
  clientToken: string;
};

///////////////////////////////////////////
// Serve
///////////////////////////////////////////

const port = 3000;

try {
  await app.listen({ port });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}

console.log("🚀 Server running on", `http://localhost:${port}`);
