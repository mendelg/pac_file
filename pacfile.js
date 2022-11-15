var normal = "DIRECT", blackhole = "PROXY 127.0.0.1:3421";

function FindProxyForURL(url, host) {
    
    if(/google.com.*/i.test(url)) {
        return blackhole;
    }
    return normal;
}
