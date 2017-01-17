exports.capabilities = {}

var Element = function(context, tag) {
	this._context = context
}

Element.prototype.constructor = Element
Element.prototype.append = function(child) { }

var Backend = function(ctx) {
	ctx.element = new Element(ctx, ctx.getTag())
}

Backend.prototype.constructor = Backend

exports.Backend = Backend
//exports.Element = Element

exports.createElement = function(ctx, tag) {
	return new Element(ctx, tag)
}
