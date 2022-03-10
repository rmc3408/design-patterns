let metaData = {
    time: 0
};

function time() {
    fetch('https://lightning.warnermediacdn.com/cdp/psm/schemas/video/qos/0.0.4/config.json').then((res) => {
        metaData.time = res.json();
        //console.log(metaData.time);
    })
    console.log(metaData.time);
}
time();
console.log(metaData)

psm = {

}