function calcularTiempo() {
    const inputDia = parseInt(document.querySelector('.date-1 input').value);
    const inputMes = parseInt(document.querySelector('.date-2 input').value);
    const inputAño = parseInt(document.querySelector('.date-3 input').value);
  
    if (!isNaN(inputDia) && !isNaN(inputMes) && !isNaN(inputAño)) {
      const fechaIngresada = new Date(inputAño, inputMes - 1, inputDia);
      const fechaActual = new Date();
  
      const diferenciaMilisegundos = fechaIngresada - fechaActual;
  
      const segundos = Math.floor(diferenciaMilisegundos / 1000);
      const minutos = Math.floor(segundos / 60);
      const horas = Math.floor(minutos / 60);
      const dias = Math.floor(horas / 24);
      const meses = Math.floor(dias / 30);
      const años = Math.floor(meses / 12);
  
      const diasRestantes = dias % 30;
      const mesesRestantes = meses % 12;
  
      const yearpos = Math.abs(años);
      const monthpos = Math.abs(diasRestantes);
      const daypos = Math.abs(mesesRestantes);
  
      const years = document.getElementById("years");
      const months = document.getElementById("months");
      const days = document.getElementById("days");
  
      years.textContent = yearpos;
      months.textContent = monthpos;
      days.textContent = daypos;
    }
  }

  document.getElementById('btn').addEventListener('click', function () {
    const dayInput = document.getElementById('day-input');
    const monthInput = document.getElementById('month-input');
    const yearInput = document.getElementById('year-input');
  
    const dayError = document.getElementById('day-error');
    const monthError = document.getElementById('month-error');
    const yearError = document.getElementById('year-error');
  
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // Months are 0-indexed
  
    const enteredDay = parseInt(dayInput.value, 10);
    const enteredMonth = parseInt(monthInput.value, 10);
    const enteredYear = parseInt(yearInput.value, 10);
  
    let isValid = true;
  
    if (enteredDay < 1 || enteredDay > 31 || isNaN(enteredDay)) {
      isValid = false;
      dayInput.classList.add('error');
      dayError.style.display = 'block';
    } else {
      dayInput.classList.remove('error');
      dayError.style.display = 'none';
    }
  
    if (enteredMonth < 1 || enteredMonth > 12 || isNaN(enteredMonth)) {
      isValid = false;
      monthInput.classList.add('error');
      monthError.style.display = 'block';
    } else {
      monthInput.classList.remove('error');
      monthError.style.display = 'none';
    }
  
    if (
      enteredYear < 1900 || // Change this if you have a different minimum year
      enteredYear > currentYear ||
      isNaN(enteredYear)
    ) {
      isValid = false;
      yearInput.classList.add('error');
      yearError.style.display = 'block';
    } else {
      yearInput.classList.remove('error');
      yearError.style.display = 'none';
    }
  
    if (isValid) {
      calcularTiempo();
    }
  });
  
  