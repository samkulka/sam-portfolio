import type { Metadata } from "next"
import fs from "fs"
import path from "path"
import { Container } from "@/components/container"
import { ResumeContent } from "./resume-content"

export const metadata: Metadata = {
  title: "Resume",
  description: "Sam Kulka's professional resume and experience.",
}

function hasPdf() {
  return fs.existsSync(path.join(process.cwd(), "public/SamKulka_FullStackEngineer_Res.pdf"))
}

export default function ResumePage() {
  const pdfAvailable = hasPdf()

  return (
    <Container className="py-16 md:py-24">
      <ResumeContent pdfAvailable={pdfAvailable} />
    </Container>
  )
}
