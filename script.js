"use strict";
/* Estimate calculator + enquiry form. No framework, no network calls —
   the page stays instant (good INP) and works fully offline. */

const GROUP_DISCOUNT = 0.05;   // 5% off on 10+ cups
const GROUP_MIN_QTY = 10;
const KULHAD_PRICE = 5;
const SHOP_WHATSAPP = "919000000000"; // sample number — replaced per client

function computeEstimate(rate, qty, withKulhad) {
  let total = rate * qty;
  if (withKulhad) total += KULHAD_PRICE * qty;
  if (qty >= GROUP_MIN_QTY) total = Math.round(total * (1 - GROUP_DISCOUNT));
  return total;
}

function initEstimate() {
  const item = document.getElementById("item");
  const qty = document.getElementById("qty");
  const kulhad = document.getElementById("kulhad");
  const out = document.getElementById("estimate-out");
  if (!item || !qty || !out) return;
  const update = () => {
    const q = Math.max(1, Math.min(500, Number(qty.value) || 1));
    const total = computeEstimate(Number(item.value), q, kulhad.checked);
    out.innerHTML = "Estimate: <strong>₹" + total.toLocaleString("en-IN") + "</strong>";
  };
  [item, qty, kulhad].forEach((el) => el.addEventListener("input", update));
  update();
}

function initEnquiry() {
  const form = document.getElementById("enquiry-form");
  if (!form) return;
  const err = document.getElementById("form-error");
  const ok = document.getElementById("form-ok");
  const wa = document.getElementById("wa-link");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const msg = document.getElementById("msg").value.trim();
    let problem = "";
    if (name.length < 2) problem = "Naam sahi se likho (kam se kam 2 akshar).";
    else if (!/^[0-9]{10}$/.test(phone)) problem = "Phone 10 digit ka hona chahiye.";
    else if (msg.length < 5) problem = "Enquiry me thodi detail likho.";
    if (problem) {
      err.textContent = problem;
      err.hidden = false;
      ok.hidden = true;
      wa.hidden = true;
      return;
    }
    err.hidden = true;
    const text = encodeURIComponent(
      "Namaste! Main " + name + " (" + phone + "). " + msg);
    wa.href = "https://wa.me/" + SHOP_WHATSAPP + "?text=" + text;
    wa.hidden = false;
    ok.hidden = false;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initEstimate();
  initEnquiry();
});
