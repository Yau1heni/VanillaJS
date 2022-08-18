
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

const presetNormal = document.querySelector('.preset-normal')
const presetBlackWhite = document.querySelector('.preset-black-white')
const preset1977 = document.querySelector('.preset-1977')
const presetAmaro = document.querySelector('.preset-amaro')

presetNormal.addEventListener('click', resetFilter)
presetBlackWhite.addEventListener('click', function () {
    document.querySelector('html').removeAttribute('style');
    let grayscaleValue = document.getElementById('grayscale').value = 100;
    let brightnessValue = document.getElementById('brightness').value = 70;
    document.documentElement.style.setProperty("--grayscale", `${grayscaleValue}%`);
    document.documentElement.style.setProperty("--brightness", `${brightnessValue}%`);
})
preset1977.addEventListener('click', function () {
    document.querySelector('html').removeAttribute('style');
    let grayscaleValue = document.getElementById('saturate').value = 130;
    let brightnessValue = document.getElementById('brightness').value = 110;
    let contrastValue = document.getElementById('contrast').value = 110;
    document.documentElement.style.setProperty("--saturate", `${grayscaleValue}%`);
    document.documentElement.style.setProperty("--brightness", `${brightnessValue}%`);
    document.documentElement.style.setProperty("--contrast", `${contrastValue}%`);
})
presetAmaro.addEventListener('click', function () {
    document.querySelector('html').removeAttribute('style');
    let grayscaleValue = document.getElementById('saturate').value = 150;
    let brightnessValue = document.getElementById('brightness').value = 110;
    let contrastValue = document.getElementById('contrast').value = 90;
    document.documentElement.style.setProperty("--saturate", `${grayscaleValue}%`);
    document.documentElement.style.setProperty("--brightness", `${brightnessValue}%`);
    document.documentElement.style.setProperty("--contrast", `${contrastValue}%`);
})

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