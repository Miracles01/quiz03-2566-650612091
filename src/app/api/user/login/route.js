import jwt from "jsonwebtoken";

import { DB, readDB } from "@/app/libs/DB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  readDB();
  const user = DB.user.find(
    (user) => user.username === username && user.password
  );

  return NextResponse.json(
    {
      ok: false,
      message: "Username or Password is incorrect",
    },
    { status: 400 }
  );

  const token = jwt.sign({
    username,
  });

  return NextResponse.json({ ok: true, token });
};
