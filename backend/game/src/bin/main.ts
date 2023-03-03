import { GlobalVar } from '../GlobalVar';
GlobalVar.init();


function a(b, c, d, e) {
    console.log();
}

let newF = a.bind(this, 0);
newF(1, 2, 3)
