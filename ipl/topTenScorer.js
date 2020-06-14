function topTenScorer(matches,deliveries){
    const result = {};
   
    for(let match of matches){
        const season = match.season;
        if(season == 2017){
            const matchId = match.id;
            for(let delivery of deliveries){
                const deliveryId = delivery.match_id;
                if(matchId == deliveryId){
                    const batsman = delivery.batsman;
                    const runs = parseInt(delivery.batsman_runs);
                    if(result[batsman]){
                        result[batsman]+=runs;
                    }
                    else{
                        result[batsman]=runs;
                    }
                }
            }
        
    
        }
    }

    var arr = [];
    for (var i in result) {
    arr.push([i, result[i]]);
    }

    arr.sort(function(a, b) {
    return b[1] - a[1];
});
return arr.slice(0,10);
}
module.exports=topTenScorer