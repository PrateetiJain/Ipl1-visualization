function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonPerYear(data.matchesWonPerYear);
  visualizeExtraRuns(data.extraRuns);
  visualizeBowlersEconomy(data.bowlersEconomy);
  visualizeTopTenScorer(data.topTenScorer);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  var container1 = new Highcharts.chart( {
    chart: {
      renderTo:"container1",
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}

function visualizeMatchesWonPerYear(matchesWonPerYear) {
  const seriesData = []
  const season = Object.keys(matchesWonPerYear).map((season)=>season);
  const teams = [];
  for(let s=0;s<season.length;s++){
    
    teams.push(Object.keys(matchesWonPerYear[season[s]]));
    
  }
  
  const teamNames = [...new Set([].concat.apply([],teams))];

  for(let i in teamNames){
    let won = [];
    for(let j in season){
      if(matchesWonPerYear[season[j]].hasOwnProperty(teamNames[i])){
        won.push(matchesWonPerYear[season[j]][teamNames[i]])
      }
      else{
        won.push(0);
      }
    }
    seriesData.push({name:teamNames[i],data:won})
  }
  var container2= new Highcharts.chart( {
    chart: {
      renderTo:'container2',
        type: 'column'
    },
    title: {
        text: 'Number of matches won by each team over all the year of IPL'
    },
    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
        categories:season,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches Won'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: seriesData
});
}

function visualizeExtraRuns(extraRuns) {
  const seriesData = [];
  for (let team in extraRuns) {
    seriesData.push([team, extraRuns[team]]);
  }

  var container3 = new Highcharts.chart( {
    chart: {
      renderTo:"container3",
      type: "column"
    },
    title: {
      text: "Extra runs conceded by each team in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData
      }
    ]
  });
}
function visualizeBowlersEconomy(bowlersEconomy) {
  const seriesData = [];
  var bowlers = Object.values(bowlersEconomy);
  bowlers.map((obj)=> seriesData.push([obj.bowler,parseFloat(obj.economy)]));

  var container4 = new Highcharts.chart( {
    chart: {
      renderTo:"container4",
      type: "column"
    },
    title: {
      text: "Top Economical Bowlers in 2015 season"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Bowlers",
        data: seriesData
      }
    ]
  });
}
function visualizeTopTenScorer(topTenScorer) {
  const seriesData = [];
  var scorer = Object.values(topTenScorer);
  scorer.map((obj)=> seriesData.push([obj[0],obj[1]]));

  var container5 = new Highcharts.chart( {
    chart: {
      renderTo:"container5",
      type: "column"
    },
    title: {
      text: "Top ten batsman in 2017 season"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Score"
      }
    },
    series: [
      {
        name: "Batsman",
        data: seriesData
      }
    ]
  });
}