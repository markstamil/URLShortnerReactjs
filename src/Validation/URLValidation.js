export const urlValdiation = (url) => {
    var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
        || url.match(/^http:\/\/\w+(\.\w+)*(:[0-9]+)?\/?$/);
    if (res == null)
        return false;
    else
        return true;
}
