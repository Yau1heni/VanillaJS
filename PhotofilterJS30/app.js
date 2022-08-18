
const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

const reset = document.getElementById('reset');
const resetFilter = function () {
    document.querySelector('html').removeAttribute('style');
    document.getElementById('spacing').value = 0;
    document.getElementById('blur').value = 0;
    document.getElementById('base').value = '#51c70e';
    document.getElementById('grayscale').value = 0;
    document.getElementById('brightness').value = 100;
    document.getElementById('saturate').value = 100;
    document.getElementById('contrast').value = 100;
}

reset.addEventListener('click', resetFilter)


const load = document.querySelector('.load')

function previewFile() {
    let image = document.querySelector('.main-img');
    let file = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();

    function load() {
        image.src = reader.result;
    }
    reader.readAsDataURL(file);
    reader.addEventListener('loadend', load)
}
load.addEventListener('change', previewFile)


