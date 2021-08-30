(() => {


    function simulateAsyncAPI(text, timeout) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (text === 'C') return reject('error404');
                console.log(text);
                resolve();
            }, timeout);
        });
    }

    async function runAsynchronous(){
    }
    }

    function runPromise() {
    }
})();