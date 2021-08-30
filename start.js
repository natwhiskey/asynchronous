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
        try {
            await simulateAsyncAPI('A', 1000);
            await simulateAsyncAPI('B', 500);
            await simulateAsyncAPI('C', 100);
            
        } catch (error) {
          console.log(error);  
    }
    }

    function runPromise() {
    }
})();