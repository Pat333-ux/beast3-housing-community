export interface CommunityResource {
  id: string;
  category: string;
  name: string;
  description: string;
}

export class ResourceLocator {
  private resources: CommunityResource[] = [];

  addResource(
    category: string,
    name: string,
    description: string
  ) {
    const resource: CommunityResource = {
      id: crypto.randomUUID(),
      category,
      name,
      description,
    };

    this.resources.push(resource);

    return resource;
  }

  getResources() {
    return this.resources;
  }
}

export const resourceLocator =
  new ResourceLocator();
