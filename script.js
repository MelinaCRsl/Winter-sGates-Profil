// 🎯 Envoi du profil RP vers Discord
// 🎬 Animation d’intro
document.addEventListener("DOMContentLoaded", () => {
  const blue = document.getElementById("imgBlue");
  const red = document.getElementById("imgRed");
  const fusion = document.getElementById("imgFusion");
  const content = document.getElementById("introContent");
  const sound = document.getElementById("introSound");

  if (blue && red && fusion && content) {
    // Intro animée uniquement si les éléments existent
    setTimeout(() => {
      blue.style.transform = "translateX(100%)";
      blue.style.opacity = "1";
      red.style.transform = "translateX(-100%)";
      red.style.opacity = "1";
    }, 500);

    setTimeout(() => {
      blue.style.opacity = "0";
      red.style.opacity = "0";
      fusion.style.opacity = "1";
    }, 2000);

    setTimeout(() => {
      content.style.opacity = "1";
      sound?.play().catch(e => console.log("Audio bloqué :", e));
    }, 3000);
  }
});

function sendToDiscord() {
  const fields = {
    name: "Nom",
    gender: "Genre",
    dob: "Date",
    height: "...",
    weight: "...",
    major: "...",
    greek: "...",
    story: "..."
  };

  // 🔄 Récupération des champs + sauvegarde locale
  for (const key in fields) {
    const value = document.getElementById(key)?.value || fields[key];
    localStorage.setItem(`rp_${key}`, value);
    fields[key] = value;
  }

  // 📤 Webhook Discord
  const webhookURL = "https://discord.com/api/webhooks/1424832477956018247/uMdgmPBJCIBlTxO6lCtAbm2pPemQcDEJstug2Nb77gDT9ZeErah0B1zrCeEOnADU8etp";
  const payload = {
    content: `📜 RP Profile\n👤 Name: ${fields.name}\n⚧️ Gender: ${fields.gender}\n🎂 DoB: ${fields.dob}\n📏 Height: ${fields.height}\n⚖️ Weight: ${fields.weight}\n🎓 Major: ${fields.major}\n🏛️ Greek House: ${fields.greek}\n📖 Story: ${fields.story}`
  };

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(() => {
    alert("Profile sent to Discord!");
    window.location.href = "profile.html";
  })
  .catch(err => alert("Error sending to Discord: " + err));
}

// 🔊 Lecture du son d’intro
document.addEventListener("DOMContentLoaded", () => {
  const sound = document.getElementById("introSound");
  setTimeout(() => {
    sound.play().catch(e => {
      console.log("Lecture audio bloquée par le navigateur :", e);
    });
  }, 500);
});

// 🔙 Bouton retour
function goBack() {
  window.history.back();
}
