function init()
{
		var w = 500;
		var h = 100;
		
		d3.csv("Task_2.7_data.csv").then(function(data)
		{
			console.log (data);
			wombatSightings = data;
			
			barChart(wombatSightings);
		});
		
		function barChart()
		{
			var barPadding = 1;
			var svg = d3.select("#chart")
			.append("svg")
			.attr("width", w)
			.attr("height", h);
			
			svg.selectAll("rect")
			.data(wombatSightings)
			.enter()
			.append("rect")
			.attr("fill", function(d)
			{
				return "rgb(0, 0, " + Math.round(d.wombats * 10) + ")";
			})
			.attr("x", function(d,i)
			{
				return i * (w / wombatSightings.length);
			})
			.attr("y", function(d)
			{
				return h - (d.wombats * 4);
			})
			.attr("width", w / wombatSightings.length - barPadding)
			.attr("height", function(d)
			{
				return (d.wombats * 4);
			});
		}
}
window.onload = init;