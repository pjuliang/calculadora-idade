document.getElementById('calculate-btn').addEventListener('click', function() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    
    if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) {
      alert('Please enter a valid date.');
      return;
    }
    
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    const ageDiffMs = today - birthDate;
    const ageDate = new Date(ageDiffMs);
    
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
  
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
  });
  