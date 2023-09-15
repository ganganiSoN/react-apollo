import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/schema.ts',
  generates: {
    './src/types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: './context/context#DataSourceContext',
        mappers: {
          Track: './model/model#TrackModel',
          Author: './model/model#AuthorModel',
          Module: './model/model#ModuleModel',
        },
      },
    },
  },
};

export default config;
