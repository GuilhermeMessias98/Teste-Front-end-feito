function menuShow(){
    let menuMobile= document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }
} 

function exibirTelefone(){
    alert('Telefone: (99) 99999-9999')
}

function mascaraCPF(cpf) {
    cpf.value = cpf.value
        .replace(/\D/g, '') 
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function mascaraTelefone(telefone) {
    telefone.value = telefone.value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d{4})$/, '$1-$2');
}

function enviarMensagem() {
    alert('Mensagem enviada com sucesso!');

    document.getElementById('cpf').value = '';
    document.getElementById('telefoneInput').value = '';
    document.getElementById('assunto').value = '';
}

function calcular() {
    
    const valorA = parseFloat(document.getElementById('valorA').value) || 0;
    const valorB = parseFloat(document.getElementById('valorB').value) || 0;
    const valorC = parseFloat(document.getElementById('valorC').value) || 0;

    
    if (valorA === 0 || valorB === 0 || valorC === 0) {
        alert('Por favor, preencha todos os campos para o cálculo.');
        return;
    }

    
    const resultado = (valorC * valorB) / valorA;

    
    document.getElementById('resultado').value = resultado.toFixed(2); 
}

document.getElementById('capturarImagem').addEventListener('click', function() {
    console.log("Capturando imagem...");

    html2canvas(document.querySelector('#quadro4')).then(canvas => {
        
        let link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'imagem-quadro4.png';

        
        console.log("Link de download criado:", link.href);

        link.click();
    }).catch(err => {
        console.error("Erro ao capturar imagem:", err);
    });
});



document.getElementById('abrirModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
});


document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});