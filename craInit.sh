# this program make CRA app structure fancy
# before run this script, this script file must in root directory of CRA app

# run by command in terminal (be sure you're in root directory of CRA app)
# shell$ chmod 700 craInit.sh
# shell$ source craInit.sh

#!/bin/sh

echo "============================================================================"
echo "========This script change your directory structure more good to see========"
echo "============================================================================"

#make directory
echo "make directory src/pages"
mkdir src/pages
echo "make directory src/shared"
mkdir src/shared
echo "make directory src/lib"
mkdir src/lib
echo "make directory src/components"
mkdir src/components
echo "make directory src/client"
mkdir src/client
echo "make directory src/stylesheet"
mkdir src/stylesheet

#mv all css to src/stylesheet
echo "move *.css to src/stylesheet"
mv src/*.css src/stylesheet/

#mv App.js & App.test.js to src/shared
echo "move App.* & App.* to src/shared"
mv src/App.js src/shared/
mv src/App.test.js src/shared/

#add to .gitignore yarn.lock & package-lock.json 
echo "add to .gitignore yarn.lock & package-lock.json"
echo 'yarn.lock' >> .gitignore
echo 'package-lock.json' >> .gitignore

 



echo "============================================================================"
echo "=============================Created by HJ=================================="
echo "============================================================================"
