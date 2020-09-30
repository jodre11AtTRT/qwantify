((document, MutationObserver) => {
    const config = { childList: true, subtree: true };

    const mutated = (_, observer) => {
        observer.disconnect();

        setTimeout(() => {
                for (const addBlock of document.getElementsByClassName(`web_add_block`)) {
                    if (addBlock.style) {
                        if (addBlock.style.display !== `none`) {
                            addBlock.style.display = `none`;
                        }
                    }
                }
        
                observer.observe(main, config);
            },
            0);
    };


    const main = document.getElementById(`main`);
    if (!main)
    {
        return;
    }

    const observer = new MutationObserver(mutated);
    observer.observe(main, config);

})(document, MutationObserver)