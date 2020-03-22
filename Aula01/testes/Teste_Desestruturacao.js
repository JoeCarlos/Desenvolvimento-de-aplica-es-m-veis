const VideoGame = {
    modelo: 'PlayStation',
    fabricante: 'Sony',
    midia: 'Blu-Ray',
    armazenamento: '1TB',
    controles: 2,
    preco: 'R$ 2000.00'
    }

    const valor_com_virgula = VideoGame.preco.replace('.',',');
    console.log(VideoGame.modelo + ' ' + valor_com_virgula);
    
    const {preco, modelo} = VideoGame;
    const valor_com_virgula2 = preco.replace('.',',');
    console.log(`${modelo} custa ${valor_com_virgula2}`); 