class Hero {
    constructor(nome, idade, classe) {
      this.nome = nome;
      this.idade = idade;
      this.classe = classe;
    }

    atacar() {
      let ataque;
      switch (this.classe) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'atacou';
      }

      const mensagem = `O ${this.classe} ${this.nome} atacou usando ${ataque}`;
      return mensagem;
    }
  }

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementsByName('nome')[0].value;
    const idade = document.getElementsByName('idade')[0].value;
    const classe = document.getElementsByName('classe')[0].value;

    const heroi = new Hero(nome, idade, classe);
    const mensagem = heroi.atacar();

    document.getElementById('return').innerText = mensagem;

    document.getElementsByName('nome')[0].value = '';
    document.getElementsByName('idade')[0].value = '';
    document.getElementsByName('classe')[0].value = '';

  });