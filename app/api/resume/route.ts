import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { PERSONAL } from "@/app/data/constants";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      PERSONAL.resumeFilename,
    );
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          `attachment; filename="${PERSONAL.resumeFilename}"`,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Resume file not found" },
      { status: 404 },
    );
  }
}
