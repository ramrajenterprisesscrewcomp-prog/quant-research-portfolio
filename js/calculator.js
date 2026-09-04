/**
 * Interactive Trading Position Sizing & Risk Management Calculator
 * Supports INR (₹) and USD ($) multi-asset calculations
 */

function initCalculator() {
  let currency = "INR"; // 'INR' or 'USD'

  const inputs = {
    capital: document.getElementById("calcCapital"),
    riskPct: document.getElementById("calcRiskPct"),
    entry: document.getElementById("calcEntry"),
    stoploss: document.getElementById("calcStoploss"),
    target: document.getElementById("calcTarget"),
    lotSize: document.getElementById("calcLotSize")
  };

  const outputs = {
    positionQty: document.getElementById("resPositionQty"),
    riskAmount: document.getElementById("resRiskAmount"),
    targetAmount: document.getElementById("resTargetAmount"),
    rrRatio: document.getElementById("resRRRatio"),
    maxLossNotice: document.getElementById("resMaxLossNotice")
  };

  const currencyBtns = document.querySelectorAll(".currency-btn");

  currencyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currencyBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currency = btn.getAttribute("data-currency");
      
      // Adjust default presets if currency changes
      if (currency === "USD") {
        if (parseFloat(inputs.capital.value) > 100000) inputs.capital.value = "25000";
        if (parseFloat(inputs.entry.value) > 10000) {
          inputs.entry.value = "2500.00";
          inputs.stoploss.value = "2485.00";
          inputs.target.value = "2545.00";
          inputs.lotSize.value = "1";
        }
      } else {
        if (parseFloat(inputs.capital.value) < 100000) inputs.capital.value = "500000";
        inputs.entry.value = "24800";
        inputs.stoploss.value = "24740";
        inputs.target.value = "24980";
        inputs.lotSize.value = "25"; // Nifty lot size
      }
      calculate();
    });
  });

  // Calculate whenever inputs change
  Object.values(inputs).forEach(input => {
    if (input) {
      input.addEventListener("input", calculate);
    }
  });

  function calculate() {
    const capital = parseFloat(inputs.capital.value) || 0;
    const riskPct = parseFloat(inputs.riskPct.value) || 1;
    const entry = parseFloat(inputs.entry.value) || 0;
    const stoploss = parseFloat(inputs.stoploss.value) || 0;
    const target = parseFloat(inputs.target.value) || 0;
    const lotSizeMultiplier = Math.max(1, parseFloat(inputs.lotSize.value) || 1);

    const sym = currency === "INR" ? "₹" : "$";

    // Risk per trade in currency
    const maxRiskAmount = capital * (riskPct / 100);

    // Stop Loss Distance per unit
    const slDistance = Math.abs(entry - stoploss);
    const targetDistance = Math.abs(target - entry);

    if (slDistance <= 0 || capital <= 0) {
      if (outputs.positionQty) outputs.positionQty.textContent = "0";
      if (outputs.riskAmount) outputs.riskAmount.textContent = `${sym}0.00`;
      if (outputs.targetAmount) outputs.targetAmount.textContent = `${sym}0.00`;
      if (outputs.rrRatio) outputs.rrRatio.textContent = "1 : 0.00";
      return;
    }

    // Total raw units we can trade
    const totalUnits = maxRiskAmount / slDistance;
    
    // In terms of lots
    const numberOfLots = Math.floor(totalUnits / lotSizeMultiplier);
    const finalQty = numberOfLots > 0 ? numberOfLots * lotSizeMultiplier : Math.floor(totalUnits);

    const actualRisk = finalQty * slDistance;
    const actualProfit = finalQty * targetDistance;
    const rrRatio = targetDistance / slDistance;

    // Format outputs
    if (outputs.positionQty) {
      if (lotSizeMultiplier > 1) {
        outputs.positionQty.textContent = `${finalQty.toLocaleString()} units (${numberOfLots} Lots)`;
      } else {
        outputs.positionQty.textContent = `${finalQty.toLocaleString()} units`;
      }
    }

    if (outputs.riskAmount) {
      outputs.riskAmount.textContent = `${sym}${formatNum(actualRisk)}`;
    }

    if (outputs.targetAmount) {
      outputs.targetAmount.textContent = `${sym}${formatNum(actualProfit)}`;
    }

    if (outputs.rrRatio) {
      outputs.rrRatio.textContent = `1 : ${rrRatio.toFixed(2)}`;
    }

    if (outputs.maxLossNotice) {
      outputs.maxLossNotice.textContent = `Strict max drawdown rule: Risk is capped at ${riskPct}% (${sym}${formatNum(maxRiskAmount)})`;
    }
  }

  function formatNum(n) {
    return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  calculate();
}

document.addEventListener("DOMContentLoaded", initCalculator);
