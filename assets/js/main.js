// querySelector()
// addEventListener()
// let counter = 0;
// createElement()
// createTextNode()
// appendChild()
// classList

let button = document.querySelector('button');
let container = document.getElementsByClassName('umwickeln')[0];
console.log(container);


let count = 0;


button.addEventListener('click', () => {
    console.log('test');
    console.log(count);
    let interval = setInterval(function () {

        let wrapper = document.createElement('div');
        wrapper.textContent = count;
        if (count > 42) {
            clearInterval(interval);
        } else {
            if (count % 10 == 0) {
                wrapper.className = 'weiss';
            } else {
                wrapper.className = 'rechteck';
            }
            container.appendChild(wrapper);
            count++;
        }
    }, 1000);
})