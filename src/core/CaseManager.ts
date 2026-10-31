export interface HousingAction {
  id: string;
  caseId: string;
  action: string;
  createdAt: string;
}

export class CaseManager {
  private actions: HousingAction[] = [];

  addAction(
    caseId: string,
    action: string
  ): HousingAction {
    const record: HousingAction = {
      id: crypto.randomUUID(),
      caseId,
      action,
      createdAt: new Date().toISOString(),
    };

    this.actions.push(record);

    return record;
  }

  getActions(caseId: string) {
    return this.actions.filter(
      action => action.caseId === caseId
    );
  }
}

export const caseManager =
  new CaseManager();
