// Fase 1 - Ir ou não ir? //

function escolha() {
    let respostaFase1 = prompt("Você escolhe a opção 1 ou 2?");

    if (respostaFase1 == 1) {
        alert("Numa terra onde termos como frutuoso e fértil já perderam sua conexão com a vivência e o imaginário de seus habitantes há gerações, oportunidades como a oferecida pelo vendedor são mais preciosas que qualquer bem material. O que quer que a espere pelo caminho, Milos está pronto para ir a Vama Veche.");
        location.assign("milos2.html");
    } else if (respostaFase1 == 2) {
        alert("Em tempos difíceis como este, devemos pesar os riscos a correr. Depois de ponderar por alguns momentos, Milos decide não dar ouvidos ao vendedor. Com isso, a aventura termina aqui, antes mesmo de seu início.");
        location.replace("index.html");
    } else {
        alert("Valor inválido, digite 1 ou 2.");
        escolha();
    }
}

// Fase 2 - Seguir ou não o atalho? //

function escolha2() {
    let respostaFase2 = prompt("Você escolhe a opção 1 ou 2?");

    if (respostaFase2 == 1) {
        alert("Entusiasmado com a ideia de chegar mais rápido a seu destino, Milos sequer percebe que está sendo observado por figuras que o esperam por parte do caminho. Um grupo de rebeldes completa sua emboscada a nosso protagonista distraído, marcando o fim de sua ambiciosa empreitada de maneira curta.");
        location.assign("index.html");
    } else if (respostaFase2 == 2) {
        alert("Confiar na memória é um grande risco para quem só tem uma chance de sucesso, então Milos decide seguir caminhando rumo a sudeste, seu destino final.");
        location.replace("milos3.html");
    } else {
        alert("Valor inválido, digite 1 ou 2.");
        escolha2();
    }
}

// Fase 3 - Consertar a ponte ou não? //

function escolha3() {
    let respostaFase3 = prompt("Você escolhe a opção 1 ou 2?");

    if (respostaFase3 == 1) {
        alert("Milos decide consertar a ponte, realizando a tarefa da maneira mais eficaz e rápida possível. Depois de checar algumas vezes, ele atravessa e segue seu caminho, já enxergando as instalações da comunidade de Vama Veche.");
        location.assign("milos4.html");
    } else if (respostaFase3 == 2) {
        alert("Nem a caminhada mais cuidadosa e o passo mais delicado foi capaz de prevenir a velha ponte de ruir sob o peso de Milos e sua mochila de artefatos. De maneira trágica, nosso viajante cai para seu fim, tão próximo do sucesso de sua jornada...");
        location.replace("index.html");
    } else {
        alert("Valor inválido, digite 1 ou 2.");
        escolha3();
    }
}

// Fase 4 - Entregar os pertences ou não? //

function escolha4() {
    let respostaFase4 = prompt("Você escolhe a opção 1 ou 2?");

    if (respostaFase4 == 1) {
        alert("Milos entrega seus pertences aos guardas, que o revistam. Após verificar que ele não representa ameaça – ao menos não imediata –, notificam os gestores do coletivo, que o convidam para fazer parte do convívio.");
        location.assign("milosfinal.html");
    } else if (respostaFase4 == 2) {
        alert("Observação ofuscada pelas promessas de uma vida melhor, a informação que os rumores sobre Vama Veche não contavam a seus ouvintes fala sobre a severidade de seu povo para proteger o espaço. Diante de qualquer represália, não demonstram misericórdia; e a resposta negativa de Milos foi recebida com violência por parte dos guardas, que tiraram sua mochila forçosamente e deixaram-no machucado e sem recursos, sem ter para onde ir.");
        location.replace("index.html");
    } else {
        alert("Valor inválido, digite 1 ou 2.");
        escolha4();
    }
}

// Botão início //

function inicio() {
    location.replace("index.html");
}