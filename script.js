function ac() {
    document.getElementById('display').value = '';
}

function print(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    var display = document.getElementById('display').value;
    if (display.includes('%')) {
        var p = display.split('%');
        if (p.length == 2) {
            var per = parseFloat(p[0]);
            var tv = parseFloat(p[1]);
            var v = (per*tv) / 100;
            document.getElementById('display').value = v;
            return;
        }
    }
    try {
        var r = eval(display);
        document.getElementById('display').value = r;
    } catch (error) {
        document.getElementById('display').value = 'error';
    }
}

function del() {
    var display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}