window.addEventListener("resize",resizeCanvas, false);
		window.addEventListener("DOMContentLoaded", onLoad, false);

		window.requestAnimationFrame = 
			window.requestAnimationFrame 		||
			window.webkitRequestAnimationFrame 	||
			window.mozRequestAnimationFrame 	||
			window.oRequestAnimationFrame		||
			window.msRequestAnimationFrame		||
			function (callback) {
				window.setTimeout(callback, 1000/60);
			}

		var canvas, ctx, w, h, particles = [] , probability = 0.04, xPoint, yPoint;

		function onLoad(){
			canvas = document.getElementById("canvas");
			ctx = canvas.getContext("2d");
			resizeCanvas();

			window.requestAnimationFrame(updateWorld);
		}

		function resizeCanvas(){
			if (!!canvas) {
				w = canvas.width = window.innerWidth;
				h = canvas.height = window.innerHeight;
			}
		}

		function updateWorld(){
			update();
			paint();
			window.requestAnimationFrame(updateWorld);
		}

		function update(){
			if (particles.length < 500 && Math.random() < probability){
				createFirework();
			}
			var alive = [];
			for (var i=0; i<particles.length; i++){
				if (particles[i].move()) {
					alive.push(particles[i]);
				}
			}
			particles = alive; 
		}

		function paint(){
			ctx.globalCompositeOperation = 'source-over';
			ctx.fillStyle = "rgba(10,10,10,0.88)";
			ctx.fillRect(0,0,w,h);
			ctx.globalCompositeOperation = 'lighter';
			for (var i = 0; i < particles.length; i++) {
				particles[i].draw(ctx);
			}
		}

		function createFirework(){
			xPoint = Math.random()*(w-200)+100;
			yPoint = Math.random()*(h-200)+100;
			var nFire = Math.random()*50+100;
			var c = "rgba("+(~~(Math.random()*200+55))+","+(~~(Math.random()*200+55))+","+(~~(Math.random()*200+55))+")";
			for (var i=0; i<nFire; i++){
				var particle = new Particle();
				particle.color = c;
				var vy = Math.sqrt(25-particle.vx*particle.vx);
				if (Math.abs(particle.vy) > vy) {
					particle.vy = particle.vy>0 ? vy: -vy;
				}
				particles.push(particle);
			}
		}

		function Particle(){
			this.w = this.h = Math.random()*4+1;

			this.x = xPoint-this.w/2;
			this.y = yPoint-this.h/2;

			this.vx = (Math.random()-0.5)*10;
			this.vy = (Math.random()-0.5)*10;

			this.alpha = Math.random()*.5+5;

			this.color;
		}

		Particle.prototype = {
			gravity: 0.05,
			move: function(){
				this.x += this.vx;
				this.vy += this.gravity;
				this.y += this.vy;
				this.alpha -= 0.01;
				if (this.x <= this.w || this.x >= window.innerWidth || this.y >= window.innerHeight || this.alpha <= 0) {
					return false;
				}
				return true;
			},
			draw: function(c){
				c.save();
				c.beginPath();
				c.translate(this.x+this.w/2,this.y + this.h/2);
				c.arc(0, 0, this.w, 0, Math.PI*2);
				c.fillStyle = this.color;
				c.globalAlpha = this.alpha;
				c.closePath();
				c.fill();
				c.restore();
			}
		}

window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  var imageObj = new Image();
  imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0);
    context.font = "40pt Poppins-Regular";
    context.fillText("Yaaay! You're In...", 100, canvas.height - 100);
  };

  imageObj.src = "images/bg-02.jpg";
};


// This is JavaScript code for creating a firework animation in a canvas element. 
// It starts by defining event listeners for the "resize" and "DOMContentLoaded" events of the window,
// and a cross-browser compatible requestAnimationFrame method. 
// Then, it defines functions for initializing the canvas, updating the world, painting the canvas, 
// creating a firework, and the particle prototype.
// When the DOM content is loaded, the canvas is initialized and the updateWorld function is called continuously using requestAnimationFrame. 
// The update function updates the state of the particles and the paint function paints the updated state of the particles to the canvas. 
// The createFirework function creates a random number of particles with random colors, positions, and velocities. 
// The Particle prototype has move and draw methods that determine how the particle moves and is drawn to the canvas.