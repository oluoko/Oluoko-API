import { NextRequest, NextResponse } from "next/server";
import { StreamClient, UserRequest } from "@stream-io/node-sdk";

const apiKey = process.env.API_GETSTREAM_PUBLISHABLE_KEY;
const secret = process.env.API_GETSTREAM_SECRET_KEY;

if (!apiKey || !secret) {
  throw new Error("Missing Stream API keys");
}

const client = new StreamClient(apiKey, secret);

export async function POST(req: NextRequest) {
  const { userId, name, image, email } = await req.json();

  const newUser: UserRequest = {
    id: userId,
    role: "user",
    name,
    image,
    custom: {
      email,
    },
  };

  await client.upsertUsers([newUser]);

  // validity is optional (by default the token is valid for an hour)
  const validity = 60 * 60;

  const token = client.generateUserToken({
    user_id: userId,
    validity_in_seconds: validity,
  });

  console.log(
    `Generated token::: ${token} for user with ID::: ${userId} with validity::: ${validity} seconds`
  );

  return NextResponse.json({
    token,
  });
}
