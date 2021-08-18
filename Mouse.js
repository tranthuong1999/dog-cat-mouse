function Mouse(name ){
	this.name = name ;
	this.dead = false 
}
Mouse.prototype.did = function(){
	this.dead = true
};
module.exports = Mouse ;