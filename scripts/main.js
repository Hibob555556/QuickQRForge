document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => loader.remove(), 500);
    }

    // fetch PyPI metadata for QuickQRForge and update heading
    fetch('https://pypi.org/pypi/QuickQRForge/json')
        .then(resp => resp.json())
        .then(data => {
            const name = data.info.name;
            const version = data.info.version;
            const heading = document.getElementById('qrf-heading');
            if (heading) {
                heading.textContent = `${name} v${version} - URL-to-QR-code generator (Python)`;
            }
        })
        .catch(err => {
            console.warn('could not load PyPI info', err);
        });
});