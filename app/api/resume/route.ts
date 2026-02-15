import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "Sithija_Shehara_Resume.pdf",
    );
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Sithija_Shehara_Resume.pdf"',
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Resume file not found" },
      { status: 404 },
    );
  }
}
