function getClockAngle(hh_mm:string): number {
    // return the shorter angle between the hour and minute hands of the clock, in degree
    const [hourString, minuteString] = hh_mm.split(":");
    const [hour, minute] = [Number(hourString), Number(minuteString)];

    const shortNeedleAngle = (hour % 12) * 30 + minute/60 * 30;
    const longNeedleAngle = minute/60 * 360
    const angle = Math.abs(shortNeedleAngle - longNeedleAngle)
    const smallestAngle = Math.min(angle, 360 - angle)
    return smallestAngle
}
console.log(getClockAngle("09:00"));
console.log(getClockAngle("17:30"));
console.log(getClockAngle("00:00"));
console.log(getClockAngle("23:59"));