function getAjax() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } 
    return new ActiveXObject("Microsoft.XMLHTTP");
}
function createRequest(metodo, url, body) {
    return new Promise(function(resolve, reject) {
        let ajax = getAjax();
        
        ajax.open(metodo, url, true);
        ajax.setRequestHeader("Access-Control-Allow-Origin", "*");
        ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


        ajax.onload = function() {
            if (this.status == 200) {
                resolve(ajax.response)
            } else {
                reject({
                    status: this.status,
                    message: ajax.statusText
                })
            }
        };
        ajax.onerror = function() {
            reject({
                status: this.status,
                message: ajax.statusText
            })
        };
        ajax.send(body)
    });
    

}