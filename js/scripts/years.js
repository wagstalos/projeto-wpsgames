$(document).ready(function () {
  const yearsInMarket = document.getElementById("years-in-market");

  if (yearsInMarket) {
    const startDate = new Date("2011-01-01T00:00:00");
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();

    // Ajuste se ainda não chegou no dia 1 de Janeiro (embora improvável para o ano atual, mas bom por segurança)
    const month = today.getMonth();
    const day = today.getDate();

    if (month < 0 || (month === 0 && day < 1)) {
      years--;
    }

    yearsInMarket.textContent = `+${years} `;
  }
});
