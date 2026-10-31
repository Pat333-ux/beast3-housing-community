export interface HousingCase {
  id: string;
  memberId: string;
  housingType: string;
  status: "active" | "pending" | "closed";
  createdAt: string;
}

export class HousingRegistry {
  private cases: HousingCase[] = [];

  createCase(
    memberId: string,
    housingType: string
  ): HousingCase {
    const housingCase: HousingCase = {
      id: crypto.randomUUID(),
      memberId,
      housingType,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    this.cases.push(housingCase);

    return housingCase;
  }

  getCases(): HousingCase[] {
    return this.cases;
  }

  getCase(id: string) {
    return this.cases.find(
      housingCase => housingCase.id === id
    );
  }
}

export const housingRegistry =
  new HousingRegistry();
