$(document).ready(function() {
	   $('#pagepiling').pagepiling({
		sectionsColor: ['#000', '#AFCBB7', '#AFCBB7', '#AFCBB7','#AFCBB7','#AFCBB7','#AFCBB7','#AFCBB7'],
	    navigation: {
			'position': 'right',
			'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4','Pgae 5','Pgae 6','Pgae 7','Pgae 8']
			  }
			});
	   $("#infoToggler").hover(function() {
	    	$(this).find('img').toggle();
	    });
	   $("#infoToggler2").hover(function() {
	    	$(this).find('img').toggle();
	    });
	  
	    });
 