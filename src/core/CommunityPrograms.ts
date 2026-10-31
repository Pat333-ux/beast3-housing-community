export interface Program {
  id: string;
  title: string;
  description: string;
  participants: number;
}

export class CommunityPrograms {
  private programs: Program[] = [];

  createProgram(
    title: string,
    description: string
  ) {
    const program: Program = {
      id: crypto.randomUUID(),
      title,
      description,
      participants: 0,
    };

    this.programs.push(program);

    return program;
  }

  enroll(programId: string) {
    const program = this.programs.find(
      p => p.id === programId
    );

    if (program) {
      program.participants++;
    }

    return program;
  }

  getPrograms() {
    return this.programs;
  }
}

export const communityPrograms =
  new CommunityPrograms();
