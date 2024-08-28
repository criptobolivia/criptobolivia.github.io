(async ($)=> {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    let data = await new Promise(resolve=>{
        fetch("https://ruddypazd.com/api/initCripto", {
            method: 'post',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(res => res.json()).then(obj => {
            resolve(obj);
        });
    });
    document.getElementById("eth").innerText="ETH: $us. "+data.price.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    
    
})(jQuery);

