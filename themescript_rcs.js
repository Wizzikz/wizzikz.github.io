function include(themescript)
{
	var head = document.getElementsByTagName('head')[0];
	
	script = document.createElement('https://wizzikz.github.io/themescript.js');
	script.src = filename;
	script.type = 'text/javascript';
	
	head.appendChild(script)
}

function include(rcs)
{
	var head = document.getElementsByTagName('head')[0];
	
	script = document.createElement('https://code.radiant.dj/rs.min.js');
	script.src = filename;
	script.type = 'text/javascript';
	
	head.appendChild(script)
}