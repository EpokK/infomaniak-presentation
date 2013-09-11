Reveal.initialize({
	// Display controls in the bottom right corner
	controls: true,
	// Display a presentation progress bar
	progress: true,
	// Enable keyboard shortcuts for navigation
	keyboard: true,
	// Loop the presentation
	loop: true,
	// Transition style
	transition: 'linear', // default/cube/page/concave/zoom/linear/fade/none
	// The "normal" size of the presentation, aspect ratio will be preserved
	// when the presentation is scaled to fit different resolutions. Can be
	// specified using percentage units.
	width: 960,
	height: 700,

	// Factor of the display size that should remain empty around the content
	margin: 0.1,

	// Bounds for smallest/largest possible scale to apply to content
	minScale: 0.2,
	maxScale: 1.0,
	// Dependencies
	dependencies: [
	   // Interpret Markdown in <section> elements
	   { src: '../plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
	   { src: '../plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
	   // Syntax highlight for <code> elements
	   { src: '../plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
	   // Zoom in and out with Alt+click
	   { src: '../plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
	]
});