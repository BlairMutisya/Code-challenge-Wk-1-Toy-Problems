function checkSpeed() {
    let speed = parseInt(document.getElementById('car-speed').value);
    let points = Math.floor((speed - 70) / 5);
    
    if (speed <= 70) {
      document.getElementById('speed-output').textContent = 'Ok';
    } else if (points >= 12) {
      document.getElementById('speed-output').textContent = `Points: ${points}, License suspended`;
    } else {
      document.getElementById('speed-output').textContent = `Points: ${points}`;
    }
  }
  