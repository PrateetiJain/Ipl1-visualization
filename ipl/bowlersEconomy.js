function bowlersEconomy(matches,deliveries){
    const names = {};
    const runs = {};
    
    for(let match of matches){
    
        const season = match.season;
        if(season == 2015){
            const matchId = match.id;
    
            for(let delv of deliveries){
    
                const delvId = delv.match_id;
                if(matchId == delvId){
                    const bowler = delv.bowler;
                    if(names[bowler]){
                        names[bowler]+=1;
                    }
                    else{
                        names[bowler]=1;
                    }
                    if(runs[bowler]){
                        runs[bowler]+=parseInt(delv.total_runs);
                    }
                    else{
                        runs[bowler]=1;
                    }
                }
            }
        
    
        }
    }
    let arr = Object.keys(names);
    for(let i =0;i<arr.length;i++){
        names[arr[i]]=names[arr[i]]/6;
    }
    
    let res=[];
    for(let j=0;j<arr.length;j++){
    res.push({"bowler":arr[j],"economy":(runs[arr[j]]/names[[arr[j]]]).toFixed(2)})
    }
    let newArr = res.sort(function(a, b) {
        return ((a.economy) - (b.economy));
    });
    return newArr.slice(0,10);
    }
    module.exports = bowlersEconomy;