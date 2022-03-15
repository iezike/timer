const schedules = process.argv.slice(2);
const timer = function(schedules) {
  for (let time of schedules) {
    time = Number(time);
    if (time >= 0 && typeof time === 'number') {
      setTimeout(() => process.stdout.write('\x07'), time * 1000);
    }
  }
};
timer(schedules);

