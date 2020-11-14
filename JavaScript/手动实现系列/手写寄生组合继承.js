function inhire(subs,parent) {
    let prototype = Object.create(parent.prototype)
    prototype.constructor = subs
    subs.prototype = prototype
}


function Parent(name) {
    this.name = name
}
function Subs(age) {
    this.age = age
    Parent.call(this,name)
}

inhire(Subs,Parent)

function extend(subs ,parent) {
    var F = function () {}
    F.prototype = parent.prototype
    subs.prototype = new F()
    subs.prototype.constructor = subs
}