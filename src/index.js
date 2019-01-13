const _images = [
    require('./image/head1.png'),
    require('./image/head2.png'),
    require('./image/head3.png'),
    require('./image/head4.png'),
    require('./image/head5.png'),
    require('./image/head6.png'),
    require('./image/head7.png'),
    require('./image/head8.png'),
    require('./image/head9.png'),
];

export default {
    images: _images,
    get: _get,
}

function _get(empCode) {
    if (empCode && empCode.length > 0) {
        let tempCode = '';
        if (empCode.length > 4) {
            tempCode = empCode.slice(-4);
        } else {
            tempCode = empCode;
        }
        let hash = 0;
        for (let i = 0; i < tempCode.length; i++) {
            const code = tempCode.charCodeAt(i);
            hash = Math.abs(13 * hash + code);
        }
        return _images[hash % 9];
    } else {
        return _images[0];
    }
}