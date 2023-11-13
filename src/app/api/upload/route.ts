import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const token = await getToken({ req: request });
  if (!token?.user) {
    return NextResponse.json(
      {
        error: "NO_AUTH",
        message: "UploadErrors.NO_AUTH",
        description: "Forbidden access",
      },
      { status: 403 }
    );
  }
  const data = await request.formData();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}pruebas`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.user.IdToken}`,
      },
      body: data,
    });
    const json = await res.json();
    return NextResponse.json({
      data: json,
    });
  } catch (error) {
    console.log("Error", error);
  }
}
