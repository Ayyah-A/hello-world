
function printPage() {
    let print = document.querySelector('#printBtn');
    window.print();
}

document.querySelector("#printBtn").addEventListener('click', printPage);