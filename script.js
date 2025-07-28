
let currentTab = 'flight';

function showTab(tab) {
  currentTab = tab;
  document.getElementById('results').innerHTML = '';
}

function search() {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;

  let mockResults = '';
  if (currentTab === 'flight') {
    mockResults = `
      <div class="result-card">Air India: ${from} → ${to} on ${date} - ₹4500</div>
      <div class="result-card">IndiGo: ${from} → ${to} on ${date} - ₹4100</div>
    `;
  } else if (currentTab === 'train') {
    mockResults = `
      <div class="result-card">Rajdhani Express: ${from} → ${to} on ${date} - ₹1200</div>
      <div class="result-card">Shatabdi Express: ${from} → ${to} on ${date} - ₹1100</div>
    `;
  } else if (currentTab === 'bus') {
    mockResults = `
      <div class="result-card">VRL Travels: ${from} → ${to} on ${date} - ₹850</div>
      <div class="result-card">SRS Bus: ${from} → ${to} on ${date} - ₹800</div>
    `;
  }

  document.getElementById('results').innerHTML = mockResults;
}
