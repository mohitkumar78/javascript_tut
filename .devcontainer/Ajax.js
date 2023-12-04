// Ajax stand for Asynchronous javascript xml
// It is Technique through which we can make or webpage dynamic and fast
// XmlHttpRequest is used for geting any type of data like json,xml etc from url without reload the hole page


//XmlHttpRequest difination
//XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.XMLHttpRequest can be used to retrieve any type of data, not just XML

//XMLHttpRequest()
//The constructor initializes an XMLHttpRequest. It must be called before any other method calls.


//The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.

// The XMLHttpRequest method send() sends the request to the server.

/*If the request is asynchronous (which is the default), this method returns as soon as the request is sent and the result is delivered using events. If the request is synchronous, this method doesn't return until the response has arrived.

send() accepts an optional parameter which lets you specify the request's body; this is primarily used for requests such as PUT. If the request method is GET or HEAD, the body parameter is ignored and the request body is set to null.

The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:


0	-   UNSENT  -	Client has been created. open() not called yet.
1	-   OPENED	-   open() has been called.
2	-   HEADERS_RECEIVED  -	send() has been called, and headers and status are available.
3	- LOADING	Downloading;- responseText holds partial data.
4	-  DONE	   -The operation is complet

*/
// Example




function loaddate() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'info.txt', true);
    xmlHttp.send();

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status == 200) {
                document.getElementsByClassName('demo-Ajax')[0].innerHTML = xmlHttp.responseText;
            } else if (xmlHttp.status == 404) {
                document.getElementsByClassName('demo-Ajax')[0].innerHTML = 'Page is not found';
            }
        }
    };
}


// Acess fake json data from internet
let jsonData;
     function loaddatejson() {
    const xmlJson = new XMLHttpRequest();
    xmlJson.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xmlJson.send()
    xmlJson.onreadystatechange = function () {
        if (xmlJson.readyState === 4) {
            if (xmlJson.status === 200) {
                // console.log(xmlJson.responseText);
                jsonData = JSON.parse(xmlJson.responseText);

                

            }
            else if (xmlJson.status === 404) {
                alert("file is not found");
            }
        }
    }
}




