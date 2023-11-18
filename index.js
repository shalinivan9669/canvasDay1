class LineDrawer {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.spacing = 10;
      this.canvas = document.createElement('canvas');
      this.canvas.width = 400;
      this.canvas.height = 400;
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.draw();
    }
  
    drawLine(x, y, x2, y2) {
      this.ctx.strokeStyle = 'white';
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
    }
  
    draw() {
      this.ctx.strokeStyle = 'white';
      if (Math.random() < 0.5) {
        this.drawLine(this.x, this.y, this.x + this.spacing, this.y + this.spacing);
      } else {
        this.drawLine(this.x, this.y + this.spacing, this.x + this.spacing, this.y);
      }
      this.x += this.spacing;
      if (this.x > this.canvas.width) {
        this.x = 0;
        this.y += this.spacing;
      }
      if (this.y < this.canvas.height) {
        requestAnimationFrame(() => this.draw());
      }
    }
  }
  
  const lineDrawer = new LineDrawer();
  