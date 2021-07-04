export function convertExpiresIn(time: string | number) {
  if (typeof time === 'number') {
    return time;
  } else {
    const num = time.replace(/\D+/g,"");
    const format = time.split(num)[1];
    
    switch(format) {
      case 's':
        return Number(num);
      case 'm':
        return Number(num) * 60;
      case 'h':
        return Number(num) * 3600;
      default:
        return Number(num);
    }
  }
}