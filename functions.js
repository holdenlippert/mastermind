function $(id) {
        return document.getElementById(id);
}

function search(key, list) {
        for (var i = 0; i < list.length; i++) {
                if (key == list[i])
                        return true;
        }
        return false;
}

function choice(list) {
        return list[Math.floor(Math.random() * list.length)];
}
