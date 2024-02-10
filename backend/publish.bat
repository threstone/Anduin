copy /y anduin .\publish\ 
copy /y anduin.cmd .\publish\ 
copy /y package.json .\publish\ 
tsc -p tsconfig_dist.json
