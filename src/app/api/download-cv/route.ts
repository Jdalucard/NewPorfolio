import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "Jose_Martinez_FullStack_Mobile_Developer.pdf"
    );

    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Jose_Martinez_FullStack_Mobile_Developer.pdf"',
        "Content-Length": fileBuffer.byteLength.toString(),
      },
    });
  } catch {
    return new NextResponse("File not found", { status: 404 });
  }
}
