var speedLim50 = [[51, 59, 1000],[60, 64, 1500],[65, 69, 2500],[70, 79, 3000],[80, 84, 3500],[85, 89, 4000],[90, 94, 5000],[95, 99, 5500],[100, 101, 6000]];
var speedLim80 = [[81, 85, 1000],[86, 103, 1500],[104, 111, 2500],[112, 127, 3000],[128, 135, 3500],[136, 139, 4000],[140, 143, 5000],[144, 145, 5500],[150, 151, 6000],[152, 159, 7000],[160, 161, 8000]];
var speedLim110 = [[111, 131, 1000],[132, 139, 1500],[140, 142, 2500],[143, 149, 3000],[150, 153, 3500],[154, 164, 4500],[165, 169, 5000],[170, 175, 5500],[176, 179, 6000],[180, 186, 6500],[187, 189, 7500],[190, 197, 8000],[198, 199, 8500],[200, 208, 9000],[209, 209, 10500],[210, 219, 11000],[220, 220, 12500]];
var speedLim130 = [[131, 139, 1000],[140, 149, 2000],[150, 155, 2500],[156, 159, 3000],[160, 168, 3500],[169, 169, 4000],[170, 179, 4500],[180, 181, 5000],[182, 189, 5500],[190, 194, 6000],[195, 199, 7500],[200, 200, 7000]];
var speedPer = 0;
var speedCon = '';
var speedMinMaxInt = 0;
var speedMin = 0;
var speedMax = 0;

function speedCal(speedLim = 80, speedCur = 80, roadwork = false) {
    speedPer = (speedCur - speedLim) / speedLim * 100;
    speedPer = speedPer.toFixed(0);

    if(speedCur > speedLim && speedPer <= 30 && speedCur < 160) {
        speedCon = 'Fartbøde';
    } else if(speedPer > 30 && speedPer <= 60 && speedCur < 160) {
        speedCon = 'Klip i kortet samt bøde';
    } else if(speedPer > 60 && speedPer <= 100 && speedCur < 200 || speedCur >= 160 && speedCur < 200 && speedPer <= 100) {
        speedCon = 'Betinget frakendelse af kørekortet og bøde';
    } else if(speedCur >= 200 || speedPer >= 100) {
        speedCon = 'Ubetinget frakendelse af kørekortet og bøde';
    } else if(speedCur <= speedLim) {
        speedCon = 'Du kører som du må'; 
    }

    if(speedLim == 50 && speedCur >= 51 && speedCur <= 101) {
        speedLim50.forEach(function() {
            speedMin = speedLim50[speedMinMaxInt][0];
            speedMax = speedLim50[speedMinMaxInt][1];
            if(speedCur >= speedMin && speedCur <= speedMax && roadwork == false) {
                speedCon += ' på ' + speedLim50[speedMinMaxInt][2];
            } else if(speedCur >= speedMin && speedCur <= speedMax && roadwork == true) {
                speedCon += ' på ' + speedLim50[speedMinMaxInt][2] * 2;
            }
            speedMinMaxInt++;
        });
    }

    if(speedLim == 80 && speedCur >= 81 && speedCur <= 161) {
        speedLim80.forEach(function() {
            speedMin = speedLim80[speedMinMaxInt][0];
            speedMax = speedLim80[speedMinMaxInt][1];
            if(speedCur >= speedMin && speedCur <= speedMax && roadwork == false) {
                speedCon += ' på ' + speedLim80[speedMinMaxInt][2];
            } else if(speedCur >= speedMin && speedCur <= speedMax && roadwork == true) {
                speedCon += ' på ' + speedLim80[speedMinMaxInt][2] * 2;
            }
            speedMinMaxInt++;
        });
    }

    if(speedLim == 110 && speedCur >= 111 && speedCur <= 220) {
        speedLim110.forEach(function() {
            speedMin = speedLim110[speedMinMaxInt][0];
            speedMax = speedLim110[speedMinMaxInt][1];
            if(speedCur >= speedMin && speedCur <= speedMax && roadwork == false) {
                speedCon += ' på ' + speedLim110[speedMinMaxInt][2];
            } else if(speedCur >= speedMin && speedCur <= speedMax && roadwork == true) {
                speedCon += ' på ' + speedLim110[speedMinMaxInt][2] * 2;
            }
            speedMinMaxInt++;
        });
    }

    if(speedLim == 130 && speedCur >= 111 && speedCur <= 220) {
        speedLim130.forEach(function() {
            speedMin = speedLim130[speedMinMaxInt][0];
            speedMax = speedLim130[speedMinMaxInt][1];
            if(speedCur >= speedMin && speedCur <= speedMax && roadwork == false) {
                speedCon += ' på ' + speedLim130[speedMinMaxInt][2];
            } else if(speedCur >= speedMin && speedCur <= speedMax && roadwork == true) {
                speedCon += ' på ' + speedLim130[speedMinMaxInt][2] * 2;
            }
            speedMinMaxInt++;
        });
    }

    console.log(speedCon);
}

speedCal(110,2000,false);