copy /y package.json .\publish\ 
start cmd /k "cd ./servers/relation/ && echo publish relation && publish.bat && EXIT"
start cmd /k "cd ./servers/hall/ && echo publish hall &&  publish.bat && EXIT"
start cmd /k "cd ./servers/gate/ && echo publish gate &&  publish.bat && EXIT"
start cmd /k "cd ./servers/game/ && echo publish game &&  publish.bat && EXIT"
