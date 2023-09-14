import { CodegenConfig } from "@graphql-codegen/cli";
import { environment } from "./environment";

const config: CodegenConfig = {
    schema: environment.BACKEND_URL,
    documents: ["src/**/*.tsx"],
    generates: {
        "./src/__generated__/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql"
            }
        }
    },
    ignoreNoDocuments: true
};

export default config;