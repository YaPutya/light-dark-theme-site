window.onload = function() {

	setTimeout(function() {

		document.body.classList.add('loaded')

		if (window.matchMedia('(min-width: 992px)').matches) { 

			Draggable.create('.photo', {
				bounds: 'body',
				inertia: true
			})
			
		}

	}, 200)

}