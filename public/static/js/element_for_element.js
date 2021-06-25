function elementForEveryElement(e) {
    for (var t = document.getElementsByClassName(e), n = 0; n < t.length; n++) {
        var d = t[n].id.split("_");
        d = d[2].split("");
        var a = t[n].innerText.replace(d[0] + "." + d[1] + ") ", "");
        null != a && "" != a || (a = "Undefined Chapter"), d = d[0] + "." + d[1] + ")";
        var l = document.createElement("LI"),
            r = document.createElement("A"),
            c = document.createTextNode(d);
        r.appendChild(c), r.href = "#" + t[n].id, l.appendChild(r);
        var m = document.createTextNode(" " + a);
        l.appendChild(m), document.getElementById("article-contents").appendChild(l)
        var chapterMarker = document.createElement("A")
        chapterMarker.href = `#${t[n].id}`
        chapterMarker.innerText = `${d}`
        chapterMarker.style.marginRight = "5px"
        t[n].prepend(chapterMarker)
        // t[n].innerHTML =  chapterMarker + t[n].innerHTML
    }
}