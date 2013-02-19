/*
 * This wont work in all browser,
 * see: http://caniuse.com/#search=matchMedia%20
 * could use a pollyfill like: https://github.com/paulirish/matchMedia.js/
 *
 * Defines the media attribute.
 * This toggles the element based on media query.
 * not by using display... it toggles between being a comment
 */
 angular.module('ui.directives').directive('media', [function () {
 	return {
 		transclude: 'element',
 		priority: 1000, // high prio, runs before it loads ng-src, ng-include etc
 		terminal: true,
 		restrict: 'A', // watch on attributes

 		compile: function (element, attr, linker) {
 			return function (scope, iterStartElement, attr) {
 				iterStartElement[0].doNotMove = true;
 				var lastElement, lastScope, expression;

 				expression = function(){
					return window.matchMedia(attr.media).matches; // boolen
				};

				// This is the magic part that makes everything works when resizing
				window.matchMedia(attr.media).addListener(scope.$apply);

				// Removes the element before if the expression is false
				// And appends the toggle it back if expression is true
				scope.$watch(expression, function (newValue) {
					if (lastElement) {
						lastElement.remove();
						lastElement = null;
					}
					if (lastScope) {
						lastScope.$destroy();
						lastScope = null;
					}
					if (newValue) {
						lastScope = scope.$new();
						linker(lastScope, function (clone) {
							lastElement = clone;
							iterStartElement.after(clone);
						});
					}
				});
			};
		}
	};
}]);