import { housingReport } from "../core/HousingReport";

export async function GET() {
  return Response.json({
    success: true,
    division: "Housing & Community Development",
    report: housingReport.generate(),
  });
}
