import { housingRegistry } from "./HousingRegistry";
import { communityPrograms } from "./CommunityPrograms";

export class HousingReport {
  generate() {
    return {
      activeCases: housingRegistry.getCases().length,
      programs: communityPrograms.getPrograms().length,
      generatedAt: new Date().toISOString(),
    };
  }
}

export const housingReport =
  new HousingReport();
