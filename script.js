function encrypt() {
    const password = prompt("Masukkan Password Untuk Lock:");

    if (!password) {
        alert("Password wajib diisi!");
        return;
    }

    const controlData = {
        lock: true,
        password: password
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(controlData));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", "control.json");
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();

    document.getElementById("status").textContent = "File control.json berhasil dibuat!";
}