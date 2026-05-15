const calculatePercentage = (value, percentage) => {
  const percentageValue = (value / 100) * percentage;
  return percentageValue;
};

const calculateTip = (event) => {
  const tagTotalValue = document.getElementById("totalvalue");
  const tagTipValue = document.getElementById("tipvalue");
  const tagOriginalValue = document.getElementById("originalvalue");
  event.preventDefault(); 
  const formData = new FormData(event.target);
  const value = formData.get("value");
  const percentage = formData.get("percentage");
  const percentageValue = calculatePercentage(value, percentage);

  tagOriginalValue.textContent = value + " R$";
  tagTipValue.textContent = percentageValue + " R$";
  tagTotalValue.textContent = `${Number(value) + percentageValue} R$`;
};
