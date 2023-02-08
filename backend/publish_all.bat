copy /y package.json .\publish\ 
start cmd /k "cd ./relation/ && echo publish relation && publish.bat && EXIT"
start cmd /k "cd ./hall/ && echo publish hall &&  publish.bat && EXIT"
start cmd /k "cd ./gate/ && echo publish gate &&  publish.bat && EXIT"
start cmd /k "cd ./game/ && echo publish game &&  publish.bat && EXIT"
