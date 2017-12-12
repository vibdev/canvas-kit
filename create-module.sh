#!/bin/bash

cat << EOM
This utility will walk you through creating a new canvas-kit module.
You will need to manually add dependencies after the fact.

After adding dependencies, use \`lerna bootstrap\` in the root of
the project to bootstrap all dependencies across all modules.

Press ^C at any time to quit.

EOM

# Colors
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Get module name
read -p "Module name (canvas-kit-<NAME>): " name

path="./modules/canvas-kit-$name"

if [ -d "$path" ]; then
	echo -e "${RED}Module with name 'canvas-kit-$name' already exists."
	exit 1
fi

# Get module info
read -p "Module description: " description
read -p "Author: " author
upperName="$(tr '[:lower:]' '[:upper:]' <<< ${name:0:1})${name:1}"

# Create module directory
echo -e "\nCreating ${CYAN}$path${NC}"
mkdir $path

# Create package.json
packageJson="$path/package.json"
echo -e "Creating ${CYAN}$packageJson${NC}"
cat > $packageJson << EOF
{
  "name": "@workday/canvas-kit-react-$name",
  "version": "1.0.0",
  "description": "$description",
  "homepage": "https://workdaydesign.com",
  "author": "$author",
  "license": "Apache-2.0",
  "style": "build/build.js",
  "main": "build/index.js",
  "repository": {
    "type": "git",
    "url": "https://ghe.megaleo.com/design/canvas-kit-css/tree/master/modules/canvas-kit-$name"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "primer-module-build index.scss"
  },
  "keywords": [
    "canvas",
    "canvas-kit",
    "react",
    "components",
    "workday",
    "$name"
  ]
}
EOF

# TODO: Add react files

# Create stories.js
storiesJs="$path/stories.js"
echo -e "Creating ${CYAN}$storiesJs${NC}"
cat > $storiesJs << EOF
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';

storiesOf('Canvas Kit/$upperName', module)
	.addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <h1 className="section-label">$upperName</h1>
    </div>
  ));

EOF

# Create README.md
readme="$path/README.md"
echo -e "Creating ${CYAN}$readme${NC}"
cat > $readme << EOF
# Canvas Kit $upperName
EOF

# Bootstrap Lerna
echo -e "\nInstalling dependencies\n"
`lerna bootstrap`
