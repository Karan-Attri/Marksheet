'use-strict';

document.addEventListener('readystatechange', function (event) {
    if (event.target.readyState == 'interactive')
        createTableFromJSON();
})
var physicsHighest = {};
var chemistryHighest = {};
var mathsHighest = {};
var output = {
    "students": [
        {
            "name": "sdsd",
            "rollno": "dsds",
            "subjects": [
                "Physics",
                "Maths",
                "Chemistry"
            ],
            "mark": {
                "Physics": {
                    "mark": 45,
                    "total": 45,
                    "grade": "Invalid"
                },
                "Maths": {
                    "mark": 45,
                    "total": 45,
                    "grade": "Invalid"
                },
                "Chemistry": {
                    "mark": 45,
                    "total": 45,
                    "grade": "Invalid"
                }
            },
            "total": 45,
            "average": 100,
            "result": "PASS",
            "grade": "Invalid"
        },
        {
            "name": "k",
            "rollno": "1",
            "subjects": [
                "Physics",
                "Maths",
                "Chemistry"
            ],
            "mark": {
                "Physics": {
                    "mark": 1,
                    "total": 100,
                    "grade": "RA"
                },
                "Maths": {
                    "mark": 2,
                    "total": 100,
                    "grade": "RA"
                },
                "Chemistry": {
                    "mark": 3,
                    "total": 100,
                    "grade": "RA"
                }
            },
            "total": 100,
            "average": 2,
            "result": "FAIL",
            "grade": "RA"
        },
        {
            "name": "a",
            "rollno": "2",
            "subjects": [
                "Physics",
                "Maths",
                "Chemistry"
            ],
            "mark": {
                "Physics": {
                    "mark": 6,
                    "total": 10,
                    "grade": "D"
                },
                "Maths": {
                    "mark": 7,
                    "total": 10,
                    "grade": "C"
                },
                "Chemistry": {
                    "mark": 8,
                    "total": 10,
                    "grade": "B"
                }
            },
            "total": 10,
            "average": 70,
            "result": "PASS",
            "grade": "C"
        },
        {
            "name": "r",
            "rollno": "3",
            "subjects": [
                "Physics",
                "Maths",
                "Chemistry"
            ],
            "mark": {
                "Physics": {
                    "mark": 5,
                    "total": 10,
                    "grade": "E"
                },
                "Maths": {
                    "mark": 7,
                    "total": 10,
                    "grade": "C"
                },
                "Chemistry": {
                    "mark": 8,
                    "total": 10,
                    "grade": "B"
                }
            },
            "total": 10,
            "average": 66.67,
            "result": "PASS",
            "grade": "D"
        },
        {
            "name": "u",
            "rollno": "4",
            "subjects": [
                "Physics",
                "Maths",
                "Chemistry"
            ],
            "mark": {
                "Physics": {
                    "mark": 9,
                    "total": 10,
                    "grade": "A"
                },
                "Maths": {
                    "mark": 4,
                    "total": 10,
                    "grade": "RA"
                },
                "Chemistry": {
                    "mark": 3,
                    "total": 10,
                    "grade": "RA"
                }
            },
            "total": 10,
            "average": 53.33,
            "result": "PASS",
            "grade": "E"
        }
    ]
}

function createobj() {
    var obj = {};
    obj.name = marksheet[0].value;
    obj.rollno = marksheet[1].value;
    obj.subjects = ["Physics", "Maths", "Chemistry"];
    obj.mark = {
        "Physics": {
            "mark": Number(marksheet[3].value),
            "total": Number(marksheet[2].value),
            "grade": getGrade(Number(marksheet[3].value) * 100 / Number(marksheet[2].value))
        },
        "Maths": {
            "mark": Number(marksheet[4].value),
            "total": Number(marksheet[2].value),
            "grade": getGrade(Number(marksheet[4].value) * 100 / Number(marksheet[2].value))
        },
        "Chemistry": {
            "mark": Number(marksheet[5].value),
            "total": Number(marksheet[2].value),
            "grade": getGrade(Number(marksheet[5].value) * 100 / Number(marksheet[2].value))
        }
    }
    obj.total = Number(marksheet[2].value),
        obj.average = getAverage(obj);
    obj.result = getResult(obj);
    obj.grade = getGrade(getAverage(obj));
    output.students.push(obj);
    getHighestScorer();
    getPhysicsHighestScorer();
    getMathsHighestScorer();
    getChemistryHighestScorer();
    displayobj();

}
function displayobj() {

    document.getElementById("json").innerHTML = '<pre>' + JSON.stringify(output, undefined, 2) + '</pre>';
}
function getHighestScorer() {
    if (!output.hasOwnProperty('highest'))
        output.highest = output.students[output.students.length - 1];
    else {
        if (output.highest.average < output.students[output.students.length - 1].average)
            output.highest = output.students[output.students.length - 1];
    }
}
function getPhysicsHighestScorer() {
    if (!output.hasOwnProperty('physicsHighest'))
        output.physicsHighest = output.students[output.students.length - 1];
    else {
        if (output.physicsHighest.mark['Physics']['mark'] < output.students[output.students.length - 1].mark['Physics']['mark'])
            output.physicsHighest = output.students[output.students.length - 1];
    }
}
function getMathsHighestScorer() {
    if (!output.hasOwnProperty('mathsHighest'))
        output.mathsHighest = output.students[output.students.length - 1];
    else {
        if (output.mathsHighest.mark['Maths']['mark'] < output.students[output.students.length - 1].mark['Maths']['mark'])
            output.mathsHighest = output.students[output.students.length - 1];
    }
}
function getChemistryHighestScorer() {
    if (!output.hasOwnProperty('chemistryHighest'))
        output.chemistryHighest = output.students[output.students.length - 1];
    else {
        if (output.chemistryHighest.mark['Chemistry']['mark'] < output.students[output.students.length - 1].mark['Chemistry']['mark'])
            output.chemistryHighest = output.students[output.students.length - 1];
    }
}
function myfunc() {

    var count = 0;
    for (var i = 0; i < 6; i++) {
        if (document.getElementById("mark-" + i).value.length == 0) {

            count++;
            if (!document.getElementById("mark-" + i).classList.contains("error"))
                document.getElementById("mark-" + i).classList.add("error");
        }
        else {
            if (document.getElementById("mark-" + i).classList.contains("error"))
                document.getElementById("mark-" + i).classList.remove("error");
        }
        if (i == 1) {
            var form = document.getElementsByTagName('form')[0];
            var span = form.getElementsByTagName('span');
            if (span.length != 0)
                form.removeChild(span[0]);
            var array = output.students;
            for (var j = 0; j < array.length; j++) {
                if (array[j].rollno == marksheet[i].value) {
                    count++;
                    var txt = document.createTextNode("ROLL NO ALREADY EXISTS");
                    var span = document.createElement('span');
                    span.appendChild(txt);
                    document.getElementsByTagName('form')[0].appendChild(span);
                    return;
                }
            }
        }
        if (i == 3 || i == 4 || i == 5) {
            var form = document.getElementsByTagName('form')[0];
            var span = form.getElementsByTagName('span');
            if (span.length != 0)
                form.removeChild(span[0]);
            if (Number(marksheet[i].value) > Number(marksheet[2].value)) {
                count++;
                var txt = document.createTextNode("MARKS EXCEED TOTAL");
                var span = document.createElement('span');
                span.appendChild(txt);
                document.getElementsByTagName('form')[0].appendChild(span);

            }
        }



    }
    if (count == 0) {
        var form = document.getElementsByTagName('form')[0];
        var span = form.getElementsByTagName('span');
        if (span.length != 0)
            form.removeChild(span[0]);
        createobj();
        func(output.students[output.students.length - 1], output.students.length - 1);
    }
}

function func(item, index) {
    var tabbody = document.getElementById("mytable").getElementsByTagName('tbody')[0];
    var row = document.createElement("tr");
    row.addEventListener('dragstart', dragStart, false);
    row.addEventListener('dragover', dragOver, false);
    row.addEventListener('drop', handleDrop, false);
    row.setAttribute("draggable", "true");
    row.setAttribute('data-index', index);
    for (var i = 0; i < 8; i++) {
        var td = document.createElement("td");
        var inp = document.createElement("input");
        switch (i) {
            case 0: inp.value = item.name;
                inp.setAttribute("type", "text");

                break;
            case 1: inp.value = item.rollno;
                inp.setAttribute("type", "text");
                row.setAttribute("id", "row-" + item.rollno);

                break;
            case 2: inp.value = item.total;
                inp.setAttribute("type", "text");

                break;
            case 3: inp.value = item.mark["Physics"]["mark"];
                inp.setAttribute("type", "number");

                break;
            case 4: inp.value = item.mark["Maths"]["mark"];
                inp.setAttribute("type", "number");

                break;
            case 5: inp.value = item.mark["Chemistry"]["mark"];
                inp.setAttribute("type", "number");

                break;
            case 6: inp.value = item.average;
                break;
            case 7: inp.value = item.grade;
                break;
            default: return;
        }
        inp.classList.add("no-border");
        inp.setAttribute("readonly", "true");


        td.appendChild(inp);
        row.appendChild(td);
    }


    var td = document.createElement("td");
    var edit = document.createElement("button");
    edit.setAttribute("data-id", item.rollno);

    var txt = document.createTextNode("EDIT");
    edit.appendChild(txt);
    td.appendChild(edit);
    row.appendChild(td);

    var td = document.createElement("td");
    var del = document.createElement("button");
    del.setAttribute("data-id", item.rollno);
    var txt = document.createTextNode("DEL");
    del.appendChild(txt);
    td.appendChild(del);
    row.appendChild(td);
    tabbody.appendChild(row);

    del.addEventListener('click', delRow, false);
    edit.addEventListener('click', editRow, false);

    document.marksheet.reset();
}

function delRow(e) {
    var ele = e.currentTarget;
    var p = e.currentTarget.closest('tr');
    if (e.currentTarget.textContent == "DEL") {

        var tab = e.currentTarget.closest('table');
        var roll = ele.getAttribute("data-id");
        var index = output.students.findIndex(function (element) {
            return (element.rollno == roll);
        });
        output.students.splice(index, 1);
        var h = getAllHighest();
        output.highest = h.highest;
        output.physicsHighest = h.physics;
        output.mathsHighest = h.maths;
        output.chemistryHighest = h.chemistry;
        displayobj();

        p.parentNode.removeChild(p);

        if (output.students.length == 0) {
            tab.parentNode.removeChild(tab);
        }
    }
    else if (e.currentTarget.textContent == "CANCEL") {
        var a = p.getElementsByTagName('input');
        p.cells[8].firstChild.textContent = "EDIT";
        p.cells[9].firstChild.textContent = "DEL";

        for (var i = 0; i < 6; i++) {
            a[i].setAttribute("readonly", "true")
            a[i].classList.remove("edit-features");
            a[i].classList.add("no-border");
        }
        a[0].blur();
    }



}
function editRow(e) {

    var p = e.currentTarget.closest("tr");
    var ele = e.currentTarget;

    var a = p.getElementsByTagName('input');
    if (e.currentTarget.textContent == "EDIT") {

        for (var i = 0; i < 6 && i != 1; i++) {
            a[i].removeAttribute("readonly");
            a[i].classList.add("edit-features");
            a[i].classList.remove("no-border");

        }
        a[0].focus();
        e.currentTarget.textContent = "SUBMIT";
        p.cells[9].firstChild.textContent = "CANCEL";
    }
    else if (e.currentTarget.textContent == "SUBMIT") {
        e.currentTarget.textContent = "EDIT";
        p.cells[9].firstChild.textContent = "DEL";


        var roll = ele.getAttribute("data-id");
        var index = output.students.findIndex(function (element) {
            return (element.rollno == roll);
        });
        var item = output.students[index];

        for (var i = 0; i < 6 && i != 1; i++) {
            a[i].setAttribute("readonly", "true")
            a[i].classList.remove("edit-features");
            a[i].classList.add("no-border");
            switch (i) {
                case 0: item.name = a[i].value;
                    break;
                case 1: item.rollno = a[i].value;
                    break;
                case 2:
                    break;
                case 3: item.mark["Physics"]["mark"] = a[i].value;
                    break;
                case 4: item.mark["Maths"]["mark"] = a[i].value;
                    break;
                case 5: item.mark["Chemistry"]["mark"] = a[i].value;
                    break;
                default: return;
            }
        }
        item.average = getAverage(item);
        a[6].value = item.average;
        a[7].value = getGrade(item.average);
        item.result = getResult(item);
        output.students[index - 1] = item;

        var h = getAllHighest();
        output.highest = h.highest;
        output.physicsHighest = h.physics;
        output.mathsHighest = h.maths;
        output.chemistryHighest = h.chemistry;
        a[0].blur();
        displayobj();

    }

}



function getAllHighest() {
    var highest = {};
    var hi = output.students[0];
    var ph = output.students[0];
    var ma = output.students[0];
    var ch = output.students[0];
    output.students.forEach(function (o) {
        if (o.average > hi.average)
            hi = o;
        if (o.mark["Physics"]["mark"] > ph.mark["Physics"]["mark"])
            ph = o;
        if (o.mark["Maths"]["mark"] > ma.mark["Maths"]["mark"])
            ma = o;
        if (o.mark["Chemistry"]["mark"] > ch.mark["Chemistry"]["mark"])
            ch = o;
    });
    highest.highest = hi;
    highest.physics = ph;
    highest.maths = ma;
    highest.chemistry = ch;
    return highest;

}

function getGrade(percent) {
    switch (true) {
        case (percent < 50): return "RA";
        case (percent < 60): return "E";
        case (percent < 70): return "D";
        case (percent < 80): return "C";
        case (percent < 90): return "B";
        case (percent < 100): return "A";
        case (percent === 100): return "S";
        default: return "Invalid"
            break;
    }
}

function getAverage(obj) {
    var percent = (Number(obj.mark["Physics"]["mark"]) + Number(obj.mark["Maths"]["mark"]) + Number(obj.mark["Chemistry"]["mark"])) / 3;

    percent = percent * 100 / Number(obj.total);
    return Number(percent.toPrecision(4));

}


function getResult(obj) {
    if (obj.average >= 50)
        return "PASS";
    else
        return "FAIL";
}



function allSort(e) {
    var th = e.currentTarget;
    var list = e.currentTarget.closest('tr').getElementsByTagName('th');
    var index = th.cellIndex;


    switch (index) {
        case 0: if (th.dataset.toggle == "true") {
            output.students.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });

        }
        else if (th.dataset.toggle == "false") {
            output.students.sort(function (a, b) {
                return b.name.localeCompare(a.name);
            });

        }
            break;
        case 1: if (th.dataset.toggle == "true") {
            output.students.sort(function (a, b) {
                return a.rollno.localeCompare(b.rollno);
            });

        }
        else if (th.dataset.toggle == "false") {
            output.students.sort(function (a, b) {
                return b.rollno.localeCompare(a.rollno);
            });

        }
            break;
        case 2: if (th.dataset.toggle == "true") {
            output.students.sort(function (a, b) {
                return a.total - b.total;
            });

        }
        else if (th.dataset.toggle == "false") {
            output.students.sort(function (a, b) {
                return b.total - a.total;
            });

        }
            break;
        case 3: if (th.dataset.toggle == "true") {
            output.students.sort(function (a, b) {
                return a.mark["Physics"]["mark"] - b.mark["Physics"]["mark"];
            });

        }
        else if (th.dataset.toggle == "false") {
            output.students.sort(function (a, b) {
                return b.mark["Physics"]["mark"] - a.mark["Physics"]["mark"];
            });

        }
            break;
        case 4: if (th.dataset.toggle == "true") {
            output.students.sort(function (a, b) {
                return a.mark["Maths"]["mark"] - b.mark["Maths"]["mark"];
            });

        }
        else if (th.dataset.toggle == "false") {
            output.students.sort(function (a, b) {
                return b.mark["Maths"]["mark"] - a.mark["Maths"]["mark"];
            });

        }
            break;
        case 5: if (th.dataset.toggle == "true") {
            output.students.sort(function (a, b) {
                return a.mark["Chemistry"]["mark"] - b.mark["Chemistry"]["mark"];
            });

        }
        else if (th.dataset.toggle == "false") {
            output.students.sort(function (a, b) {
                return b.mark["Chemistry"]["mark"] - a.mark["Chemistry"]["mark"];
            });
        }
            break;
        case 6: if (th.dataset.toggle == "true") {
            output.students.sort(function (a, b) {
                return a.average - b.average;
            });

        }
        else if (th.dataset.toggle == "false") {
            output.students.sort(function (a, b) {
                return b.average - a.average;
            });

        }
            break;
        case 7: if (th.dataset.toggle == "true") {
            output.students.sort(function (a, b) {
                return a.grade - b.grade;
            });

        }
        else if (th.dataset.toggle == "false") {
            output.students.sort(function (a, b) {
                return b.grade - a.grade;
            });

        }
            break;
    }
    for (var j = 0; j < list.length; j++) {
        list[j].classList.remove("uparrow");
        list[j].classList.remove("downarrow");
    }
    if (th.dataset.toggle == "true") {
        th.classList.add("uparrow");
        th.setAttribute("data-toggle", "false");
    }
    else if (th.dataset.toggle == "false") {
        th.classList.add("downarrow");
        th.setAttribute("data-toggle", "true")
    }
    displaysort();

}
function displaysort() {
    var table = document.getElementById("mytable");
    var tablebody = table.getElementsByTagName('tbody')[0];
    table.removeChild(tablebody);
    createTableFromJSON();



}
function createTableFromJSON() {
    if (document.getElementById("mytable").rows.length == 0) {
        var tr = document.createElement("tr");
        tr.setAttribute("draggable", "true");

        var thead = document.createElement('thead');
        for (var i = 0; i < 9; i++) {

            var arr = ["Name", "Rollno", "Total", "Physics", "Maths", "Chemistry", "Average", "Grade", "Action"];
            var txt = arr[i];
            var txtnode = document.createTextNode(txt);

            var td = document.createElement("th");

            if (i == 8)
                td.setAttribute("colspan", "2");
            else {
                td.classList.add("cursorhand");
                td.addEventListener('click', allSort, false);
                td.setAttribute("data-toggle", "true");
            }

            td.appendChild(txtnode);
            tr.appendChild(td);
            thead.appendChild(tr);
        }

        document.getElementById("mytable").appendChild(thead);

    }
    var tablebody = document.createElement('tbody');
    document.getElementById("mytable").appendChild(tablebody);

    for (var i = 0; i < output.students.length; i++) {
        func(output.students[i], i);
    }
}

function dragStart(e) {

    e.dataTransfer.setData('text', e.currentTarget.getAttribute('data-index'));

    e.target.effectAllowed = 'move';

}
function dragOver(e) {
    e.preventDefault();
    return false;
}
function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    var indexRemove = Number(e.dataTransfer.getData('text'));
    var indexAdd = Number(e.currentTarget.getAttribute('data-index'));
    var tbody = e.currentTarget.parentElement;

    var arr = output.students.splice(indexRemove, 1)[0];
    output.students.splice(indexAdd, 0, arr);
    var table = document.getElementById('mytable');
    var p = table.getElementsByTagName('tbody')[0];
    table.removeChild(p);
    createTableFromJSON();
    return false;
}


