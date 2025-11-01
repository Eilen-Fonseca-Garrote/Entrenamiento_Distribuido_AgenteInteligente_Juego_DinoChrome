function showNumbers(){
	ctx.font = font;
	ctx.fillText("Puntaje: " + score, 20, 440);
	ctx.fillText("HIGH: " + highest, 20, 410);
	
	if(isReplay){
		ctx.fillText("recorrido: " + Math.round(speed * 10)/10, 20, 60);
		ctx.fillText("Recargando...", 730, 410);
		ctx.fillText("Alive: 1", 20, 30);
		ctx.fillText("Gen: " + replayGen, 750, 380);
	}else if(isBot){
		ctx.fillText("Recorrido: " + Math.round(speed * 10)/10, 20, 60);
		ctx.fillText("Hard-Coded Bot", 690, 410);
		ctx.fillText("Alive: 1", 20, 30);
		ctx.fillText("Gen: 0", 750, 380);
	}else{
		if(score >= targetScore){
			ctx.fillText("El puntaje ha sido alcanzado!!!", 480, 440);
		}else{
			ctx.fillText("El puntaje no ha sido alcanzado todavía ", 480, 440);
		}
		ctx.fillText("Recorrido: " + Math.round(speed * 10)/10, 20, 150);
		ctx.fillText("Evolucionando...", 730, 410);
		ctx.fillText("Vivos: " + stillAlive(), 20, 30);
		ctx.fillText("Porciento de vivos: " + Math.round(stillAlive() / popSize * 1000)/10 + "%", 20, 60);
		ctx.fillText("Generación: " + gen, 750, 380);
		ctx.fillText("Fitness promedio: " + Math.round(Math.sqrt(sum/popSize)), 20, 90);
		ctx.fillText("Mayor Puntaje: " + targetScore, 20, 120);
	}
}

function showBrain(inputHidden, hiddenOutput){
	var inputX = 450;
	var hiddenX = 600;
	var outputX = 750;
	var y = 30;
	var incrememt = 40;
	const neuronR = 12.5;

	ctx.font = "15px Arial";
	if(gen != 1){
		ctx.fillText("Cerebro del ultimo Campeon", 515, 25);
		for(var i = 0;i < inputHidden[0].length;i++){
			for(var j = 0;j < inputHidden.length;j++){
				ctx.beginPath();
				ctx.lineWidth = Math.abs(inputHidden[j][i]);
				if(inputHidden[j][i] > 0){
					ctx.strokeStyle = 'blue';
				}else{
					ctx.strokeStyle = 'red';
				}
				y = 30;
				ctx.moveTo(inputX + neuronR, y + neuronR + i*incrememt);
				y = 45;
				ctx.lineTo(hiddenX + neuronR, y + j*incrememt);
				ctx.closePath();
				ctx.stroke();
			}
		}
		for(var i = 0;i < hiddenOutput[0].length;i++){
			for(var j = 0;j < hiddenOutput.length;j++){
				ctx.beginPath();
				ctx.lineWidth = Math.abs(hiddenOutput[j][i]);
				if(hiddenOutput[j][i] > 0){
					ctx.strokeStyle = 'blue';
				}else{
					ctx.strokeStyle = 'red';
				}
				y = 35;
				ctx.moveTo(hiddenX + neuronR, y + neuronR + i*incrememt);
				y = 90;
				ctx.lineTo(outputX + neuronR, y + j*incrememt);
				ctx.closePath();
				ctx.stroke();
			}
		}
	}

    y = 30;
    for(var i = 0;i < inputNodes;i++){
		ctx.drawImage(neuron, inputX, y);
		y += incrememt;
	}
	
	y = 30;
	for(var i = 0;i < hiddenNodes;i++){
		ctx.drawImage(neuron, hiddenX, y);
		y += incrememt;
	}
	y = 80;
	for(var i = 0;i < outputNodes;i++){
		ctx.drawImage(neuron, outputX, y);
		y += incrememt;
	}
	
	ctx.fillText("Distancia proximo obstaculo", 275, 45);
	ctx.fillText("Altura del obstaculo", 320, 85);
	ctx.fillText("Longitud del obstaculo", 327, 125);
	ctx.fillText("Bird Height", 373, 165);
	ctx.fillText("Recorrido", 405, 205);
	ctx.fillText("Bias", 420, 245);

	ctx.fillText("Correr", 776, 100);
	ctx.fillText("Saltar", 777, 140);
	ctx.fillText("Duck", 777, 180);
}






