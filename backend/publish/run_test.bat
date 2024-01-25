start cmd /k "cd ./servers/relation/src/bin && call node main.js"
start cmd /k "cd ./servers/hall/src/bin && call node main.js"
start cmd /k "cd ./servers/gate/src/bin && call node main.js nodeId=gate1 env=dev"
start cmd /k "cd ./servers/game/src/bin && call node main.js"