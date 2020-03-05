# This is CS50 WEB @ 2020
# How computers communicate ?!
* TCP/IP (Transmission Control Protocol) / (Internet Protocol)
* IP addresses is the computer's addresses over the internet
* IPV4 is like #.#.#.# every part from 0 - 255 with total 32 bits (over 4 billion address) 
* IPV6 is the updated version with 128-bit addresses

# How computers know the type of data ?!
* Computer sends data like Email / Web-Page / File
* Each service has a number called port number
* FTP: 21 (Files)/ SMTP: 25 (Email)/ HTTP: 80 (Web-pages)
* Example: 10.10.10.25:80 IP + Protocol Port

# DNS (Domain Name Service or System)
* DNS is a mapping between URLs and corresponding IP addresses
* DNS resolve the URLs into IPs
* Browser checks for IP address for a web URL in order to establish a connection

# HTTP (HyperText Transfer Protocol)
HTTP request
* GET / HTTP / 1.1 => 1.1 is the version of HTTP
* Host: www.Test.com

HTTP response
* HTTP 1.1 200 ok => HTTP status code (200 meaning ok)
* Content-Type: text/html => the actual html page

HTTP Status Codes
* 200 => ok (everything is good)
* 301 => Moved Permanently (Moved somewhere else)
* 403 => Forbidden (can't access due to permission)
* 404 => Not Found
* 500 => Internal server error (maybe a bug in the server itself)