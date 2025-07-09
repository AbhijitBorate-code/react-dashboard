const express = require("express");
const axios = require("axios");
const app = express();

const PORT = 5000;

const investments = [
  {
    fundName: "Nippon India Large Cap Fund - Growth",
    investedAmount: 35998,
    purchaseNAV: 94.0392,
    schemeCode: "118632" // from AMFI
  },
  {
    fundName: "Motilal Oswal Small Cap Fund - Growth",
    investedAmount: 48998,
    purchaseNAV: 13.9999,
    schemeCode: "152237"
  }
];

// 📡 Function to get latest NAV from AMFI API
async function getLatestNAV(schemeCode) {
  try {
    const response = await axios.get(`https://www.amfiindia.com/spages/NAVAll.txt`);
    const lines = response.data.split("\n");
    for (let line of lines) {
      if (line.includes(schemeCode)) {
        const parts = line.split(";");
        const nav = parseFloat(parts[4]);
        return nav;
      }
    }
    return null;
  } catch (err) {
    console.error("NAV fetch error:", err.message);
    return null;
  }
}

app.get("/api/mf-tracking", async (req, res) => {
  const result = [];

  for (let inv of investments) {
    const latestNAV = await getLatestNAV(inv.schemeCode);
    if (!latestNAV) {
      result.push({ fundName: inv.fundName, error: "NAV not found" });
      continue;
    }

    const units = inv.investedAmount / inv.purchaseNAV;
    const currentValue = units * latestNAV;
    const profitLoss = currentValue - inv.investedAmount;

    result.push({
      fundName: inv.fundName,
      investedAmount: inv.investedAmount,
      currentNAV: latestNAV,
      currentValue: currentValue.toFixed(2),
      profitLoss: profitLoss.toFixed(2),
      units:units
    });
  }

  res.json(result);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
