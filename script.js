function sendToDiscord() {
  const name = document.getElementById("name")?.value || "Nom";
  const gender = document.getElementById("gender")?.value || "Genre";
  const dob = document.getElementById("dob")?.value || "Date";
  const height = document.getElementById("height")?.value || "...";
  const weight = document.getElementById("weight")?.value || "...";
  const major = document.getElementById("major")?.value || "...";
  const greek = document.getElementById("greek")?.value || "...";
  const story = document.getElementById("story")?.value || "...";

  localStorage.setItem("rp_name", name);
  localStorage.setItem("rp_gender", gender);
  localStorage.setItem("rp_dob", dob);
  localStorage.setItem("rp_height", height);
  localStorage.setItem("rp_weight", weight);
  localStorage.setItem("rp_major", major);
  localStorage.setItem("rp_greek", greek);
  localStorage.setItem("rp_story", story);

  const webhookURL = "https://discord.com/api/webhooks/TON_WEBHOOK_ICI";
  const payload = {
    content: `📜 RP Profile\n👤 Name: ${name}\n⚧️ Gender: ${gender}\n🎂 DoB: ${dob}\n📏 Height: ${height}\n⚖️ Weight: ${weight}\n🎓 Major: ${major}\n🏛️ Greek House: ${greek}\n📖 Story: ${story}`
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
