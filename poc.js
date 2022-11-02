function main(){
    field = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.strokeRect(50, 50, 50, 50)
    ctx.moveTo(100,75);
    ctx.lineTo(250,75);
    ctx.stroke();
}

