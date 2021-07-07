import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

import { GeneratorOptions } from './schema';

export default async function (host: Tree, schema: GeneratorOptions) {
  await libraryGenerator(host, { name: `${schema.name}-${schema.type}` });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}

// yarn nx workspace-generator my-generator delete
