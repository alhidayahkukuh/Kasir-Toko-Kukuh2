// PIN default (nanti akan dipindahkan ke pengaturan)
const ADMIN_PIN = "123456";

function login() {
    const pin = document.getElementById("pin").value;
    const pesan = document.getElementById("pesan");

    if (pin === ADMIN_PIN) {
        localStorage.setItem("login", "true");
        window.location.href = "dashboard.html";
    } else {
        pesan.innerHTML = "PIN salah!";
    }
}
