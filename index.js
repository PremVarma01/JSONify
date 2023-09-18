


// Use fetch to load the header content
fetch('header.html')
    .then(response => response.text())
    .then(headerHtml => {
        document.getElementById('header-container').innerHTML = headerHtml;
        // Get the current page URL
        var currentURL = window.location.href;

        // Get all the navigation links
        var navLinks = document.querySelectorAll('.link-a');

        // Loop through the links and add the "active" class to the matching link
        navLinks.forEach(function (link) {
            if (link.href === currentURL) {
                link.classList.add('active');
            } else {
                link.classList.remove('active'); // Remove the class from other links
            }
        });
    });


function printTheJSONInPrettyFormat(content = undefined) {
    var badJSON = content ?? document.getElementById('input').value;
    try {
        var parseJSON = JSON.parse(badJSON);
        var JSONInPrettyFormat = JSON.stringify(parseJSON, undefined, 4);
        document.getElementById('output').value =
            JSONInPrettyFormat;
    } catch (e) {
        console.debug('Invalid JSON:', e.toString());
    }
}


// function hideToast() {
//     var toast = document.getElementById("toast")
//     toast.classList.remove("visible")
//     toast.classList.add("invisible")
// }

function showToast() {
    var toast = document.getElementById("toast")
    toast.classList.toggle("hidden");

    const clearToast = setTimeout(() => {
        toast.classList.toggle("hidden");
        clearTimeout(clearToast)
    }, 2000)


}

const textarea = document.getElementById("input");
textarea.addEventListener('paste', function (event) {
    const pastedContent = event.clipboardData.getData('text/plain');
    printTheJSONInPrettyFormat(pastedContent)
});

textarea.addEventListener('input', function () {
    const content = textarea.value;
    printTheJSONInPrettyFormat(content)
});


function copy() {
    var copyText = document.getElementById("output") ?? document.getElementById("compare-output");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    showToast()
}


function appendTextToKey(obj, keyToFind, textToAppend, append) {
    for (const prop in obj) {
        if (typeof obj[prop] === "object") {
            appendTextToKey(obj[prop], keyToFind, textToAppend, append);
        } else if (prop === keyToFind && !append) {
            obj[prop] = textToAppend;
        } else if (prop === keyToFind) {
            obj[prop] = obj[prop] + textToAppend;
        }
    }

    return obj;
}


function process() {
    const inputFields = document.querySelectorAll('#key-input');
    const inputFieldsAppendValue = document.querySelectorAll('#append-input');
    const dropdown = document.getElementById('dynamic-dropdown');
    inputFields.forEach((inputField, index) => {
        const json = document.getElementById("output");
        let jsonValue = json.value;
        const append = dropdown.options[index].textContent === "Append";
        printTheJSONInPrettyFormat(JSON.stringify(appendTextToKey(JSON.parse(jsonValue), inputFields[index].value, inputFieldsAppendValue[index].value, append)))
    });
}

// Compare JSON

function pretty(content = undefined, input_id = undefined, out_id = undefined) {
    var badJSON = content ?? document.getElementById(input_id).value;
    try {
        var parseJSON = JSON.parse(badJSON);
        var JSONInPrettyFormat = JSON.stringify(parseJSON, undefined, 4);
        document.getElementById(out_id).value =
            JSONInPrettyFormat;
    } catch (e) {
        console.log('Invalid JSON:', e.toString());
    }
}

function compareJSON(json1, json2) {
    const result = {};
    for (const key in json1) {
        if (json1.hasOwnProperty(key)) {
            if (json2.hasOwnProperty(key)) {
                if (typeof json1[key] === 'object' && typeof json2[key] === 'object') {
                    result[key] = compareJSON(json1[key], json2[key]);
                } else {
                    result[key] = json1[key] === json2[key] ? json1[key] : `<span class="mismatch">${json1[key]}</span>`;
                }
            } else {
                result[key] = `<span class="mismatch">${json1[key]}</span>`;
            }
        }
    }
    for (const key in json2) {
        if (json2.hasOwnProperty(key) && !json1.hasOwnProperty(key)) {
            result[key] = `<span class="mismatch">${json2[key]}</span>`;
        }
    }
    return result;
}


function compare() {
    var json1 = document.getElementById("compare-input");
    var json2 = document.getElementById("compare-output");

    const comparedJSON1 = compareJSON(json1.value, json2.value);
    const comparedJSON2 = compareJSON(json2.value, json1.value);

    // pretty(JSON.stringify(comparedJSON1), undefined, "compare-input");
    // pretty(JSON.stringify(comparedJSON2), undefined, "compare-output");


    const json1Container = document.getElementById('json1Container');
    const json1Output = document.getElementById('json1Output');
    json1Output.innerHTML = JSON.stringify(comparedJSON1, null, 2);

    const json2Container = document.getElementById('json2Container');
    const json2Output = document.getElementById('json2Output');
    json2Output.innerHTML = JSON.stringify(comparedJSON2, null, 2);

}

function downloadJSON() {
    const jsonDataDiv = document.getElementById("output") ?? document.getElementById("compare-output");
    const jsonData = jsonDataDiv.value;
    if (!jsonData) return alert("Json is empty");
    const blob = new Blob([jsonData], { type: "application/json" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "data.json"; // You can set the filename here

    a.style.display = "none"; // Hide the link
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

}





