import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Pongporn Seetong",
    studentId: "650612091",
  });
};
