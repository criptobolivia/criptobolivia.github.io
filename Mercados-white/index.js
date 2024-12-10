

const init=async()=>{
    let data = await new Promise(resolve=>{
        fetch("https://ruddypazd.com/api/getCriptos", {
            method: 'post',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(res => res.json()).then(obj => {
            resolve(obj);
        });
    });

    let cuerpo = "";

    data.map(crip=>{
        cuerpo+="<div style='width: 120px; margin:20px; padding:10px; border:1px solid #fff; border-radius:10px;'>";
        cuerpo+="<div>"+crip.name+" ("+crip.symbol+")</div>";
        cuerpo+="<div style='margin-top:10px;'><img alt='"+crip.id+"' src='"+crip.image+"' style='width:35px;'/></div>";
        cuerpo+="<div> USD. "+crip.current_price.toFixed(3)+"</div>";
        cuerpo+="<div style='margin-top:10px; font-size:10px; color:#ffffff88;'>"+new Date(crip.last_updated).toLocaleString()+"</div>";
        cuerpo+="</div>";
    });

    document.getElementById("descMoneda").innerHTML=cuerpo;
    
};

init();

