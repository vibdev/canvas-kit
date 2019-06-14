#!/bin/bash

cat << EOM
This utility will walk you through creating a new canvas-kit module.

Press ^C at any time to quit.

EOM

# Colors
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Get module name
read -p "Module name (@workday/canvas-kit-react-<NAME>): " name

path="./modules/$name"
reactPath="$path/react"

if [ -d "$path" ]; then
  echo -e "${RED}Module with name '$name' already exists."
  exit 1
fi

# Get module info
read -p "Module description: " description
read -p "Author: " author
upperName="$(tr '[:lower:]' '[:upper:]' <<< ${name:0:1})${name:1}"

# Create module directory
echo -e "\nCreating ${CYAN}$path${NC}"
mkdir $path
mkdir $reactPath

# Create package.json
packageJson="$reactPath/package.json"
echo -e "Creating ${CYAN}$packageJson${NC}"
cat > $packageJson << EOF
{
  "name": "@workday/canvas-kit-react-$name",
  "version": "0.0.0",
  "description": "$description",
  "homepage": "https://workdaydesign.com",
  "author": "$author",
  "license": "Apache-2.0",
  "main": "dist/commonjs/index.js",
  "module": "dist/es6/index.js",
  "sideEffects": false,
  "types": "dist/es6/index.d.ts",
  "repository": {
    "type": "git",
    "url": "https://ghe.megaleo.com/design/canvas-kit-react/tree/master/modules/$name"
  },
  "files": [
    "dist/",
    "lib/",
    "index.ts"
  ],
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "clean": "rimraf dist && rimraf .build-info && mkdirp dist",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:es6": "tsc -p tsconfig.es6.json",
    "build:rebuild": "npm-run-all clean build",
    "build": "npm-run-all --parallel build:cjs build:es6"
  },
  "keywords": [
    "canvas",
    "canvas-kit",
    "react",
    "components",
    "workday",
    "$name"
  ],
  "peerDependencies": {
    "react": ">= 15 < 17"
  }
}
EOF

# Create lib/MyComponent.tsx
mkdir "$reactPath/lib"
componentTsx="$reactPath/lib/MyComponent.tsx"
echo -e "Creating ${CYAN}$componentTsx${NC}"
cat > $componentTsx << EOF
import * as React from 'react'

export default class MyComponent extends React.Component {
  public render() {
    return (
      <div>
        MyComponent
      </div>
    )
  }
}

EOF

# Create index.ts
indexTs="$reactPath/index.ts"
echo -e "Creating ${CYAN}$indexTs${NC}"
cat > $indexTs << EOF
import MyComponent from './lib/MyComponent';

export default MyComponent;
export {MyComponent};
export * from './lib/MyComponent';

EOF

# Create stories.tsx
mkdir "$reactPath/stories"
storiesJs="$reactPath/stories/stories.tsx"
echo -e "Creating ${CYAN}$storiesJs${NC}"
cat > $storiesJs << EOF
/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import MyComponent from '../index';
import README from '../README.md';

storiesOf('Canvas Kit/$upperName', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <MyComponent />
    </div>
  ));

EOF

# Create README.md
readme="$reactPath/README.md"
echo -e "Creating ${CYAN}$readme${NC}"
cat > $readme << EOF
# Canvas Kit $upperName
EOF

# Create tsconfig.json
tsconfig="$reactPath/tsconfig.json"
echo -e "Creating ${CYAN}$tsconfig${NC}"
cat > $tsconfig << EOF
{
  "extends": "../../../tsconfig.json",
  "exclude": ["node_modules", "ts-tmp", "dist", "spec", "stories"]
}
EOF

# Create tsconfig.cjs.json
tsconfig="$reactPath/tsconfig.cjs.json"
echo -e "Creating ${CYAN}$tsconfig${NC}"
cat > $tsconfig << EOF
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "module": "commonjs",
    "outDir": "dist/commonjs",
    "skipLibCheck": true,
    "tsBuildInfoFile": "./.build-info/tsconfig.cjs.tsbuildinfo"
  }
}
EOF

# Create tsconfig.es6.json
tsconfig="$reactPath/tsconfig.es6.json"
echo -e "Creating ${CYAN}$tsconfig${NC}"
cat > $tsconfig << EOF
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "outDir": "dist/es6",
    "tsBuildInfoFile": "./.build-info/tsconfig.es6.tsbuildinfo"
  }
}
EOF

# Create .npmignore
npmignore="$reactPath/.npmignore"
echo -e "Creating ${CYAN}$npmignore${NC}"
cat > $npmignore << EOF
tsconfig.json
yarn.lock

EOF

# Install deps using Yarn workspaces (instead of Lerna bootstrap)
echo -e "\nInstalling dependencies\n"
yarn
