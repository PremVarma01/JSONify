var inputCount = 0;

function minify() {
    const textArea = JSON.stringify(JSON.parse(document.getElementById('output').value));
    document.getElementById("output").value =
        textArea;
}

function createTwoInput() {
    inputCount += 2;
    const inputContainer = document.getElementById('app');

    const inputElement = document.createElement('div');
    inputElement.setAttribute("id", "inputDiv")
    inputElement.classList.add('flex', 'items-center', 'my-2');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'key-input');
    input.setAttribute('name', 'key');
    input.setAttribute('value', 'lineDescription');
    input.setAttribute('placeholder', `Key`);
    input.classList.add('border', 'rounded', 'py-2', 'px-4', 'w-64');

    const input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.setAttribute('name', 'append');
    input2.setAttribute('value', '-AG1');
    input2.setAttribute('id', 'append-input');
    input2.setAttribute('placeholder', `Append Value`);
    input2.classList.add('border', 'rounded', 'py-2', 'px-4', 'w-64');

    inputElement.appendChild(input);
    inputElement.appendChild(input2);
    inputElement.innerHTML += `<div class="relative inline-block  border rounded ml-2 w-24">
                <select id="dynamic-dropdown"
                    class="appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="Append">Append</option>
                    <option value="Replace">Replace</option>
                    <!-- Add more options here dynamically with JavaScript -->
                </select>
                <div class="absolute right-2 top-[40%] pl-4">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xml:space="preserve">
                    <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                    </svg>
                </div>
            </div>`
    inputContainer.appendChild(inputElement);

    const inputElement2 = document.createElement('div');
    inputElement2.setAttribute("id", "inputDiv")
    inputElement.classList.add('flex', 'items-center', 'my-2');


    const input3 = document.createElement('input');
    input3.setAttribute('type', 'text');
    input3.setAttribute('id', 'key-input');
    input3.setAttribute('name', 'key');
    input3.setAttribute('value', 'receivableSuffix');
    input3.setAttribute('placeholder', `Key`);
    input3.classList.add('border', 'rounded', 'py-2', 'px-4', 'w-64');

    const input4 = document.createElement('input');
    input4.setAttribute('type', 'text');
    input4.setAttribute('name', 'append');
    input4.setAttribute('value', 'AG1');
    input4.setAttribute('id', 'append-input');
    input4.setAttribute('placeholder', `Append Value`);
    input4.classList.add('border', 'rounded', 'py-2', 'px-4', 'w-64');

    inputElement2.appendChild(input3);
    inputElement2.appendChild(input4);
    inputElement2.innerHTML += `<div class="relative inline-block  border rounded ml-2 w-24">
                <select id="dynamic-dropdown"
                    class="appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="Replace">Replace</option>
                    <option value="Append">Append</option>
                    <!-- Add more options here dynamically with JavaScript -->
                </select>
                <div class="absolute right-2 top-[40%] pl-4">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xml:space="preserve">
                    <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                    </svg>
                </div>
            </div>`
    inputContainer.appendChild(inputElement2);

}

function addInput() {
    inputCount++;
    const inputContainer = document.getElementById('app');

    const inputElement = document.createElement('div');
    inputElement.setAttribute("id", "inputDiv")
    inputElement.classList.add('flex', 'items-center', 'my-2');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'key-input');
    input.setAttribute('name', 'key');
    input.setAttribute('placeholder', `Key`);

    input.classList.add('border', 'rounded', 'py-2', 'px-4', 'w-64');

    const input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.setAttribute('name', 'append');
    input2.setAttribute('id', 'append-input');
    input2.setAttribute('placeholder', `Append Value`);
    input2.classList.add('border', 'rounded', 'py-2', 'px-4', 'w-64');

    inputElement.appendChild(input);
    inputElement.appendChild(input2);
    inputElement.innerHTML += `<div class="relative inline-block  border rounded ml-2 w-24">
                <select id="dynamic-dropdown" 
                    class="appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="Append">Append</option>
                    <option value="Replace">Replace</option>
                    <!-- Add more options here dynamically with JavaScript -->
                </select>
                <div class="absolute right-2 top-[40%] pl-4">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xml:space="preserve">
                    <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                    </svg>
                </div>
            </div>`
    inputContainer.appendChild(inputElement);
}

function removeInput() {
    const inputContainer = document.getElementById('app');
    const inputElements = inputContainer.querySelectorAll('#inputDiv');


    if (inputElements.length > 0) {
        inputContainer.removeChild(inputElements[inputElements.length - 1]);
        inputCount -= 1;
    }

}


function compareFile() {
    // compare-file.html
    const json1 = document.getElementById('input').value
    const json2 = document.getElementById('output').value
    sessionStorage.setItem("json1", json1)
    sessionStorage.setItem("json2", json2)
    window.location.href = './compare-file.html'
}