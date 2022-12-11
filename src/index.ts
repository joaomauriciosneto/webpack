// observar como o prettier e o eslint trabalham no quesito de tipagem

const userList: { id: number; nome: string }[] = [];

const criar = (id: number, nome: string) => {
  for (const i in userList) {
    if (userList[i].id == id) {
      console.log('usuário já cadastrado');
      return 'tente outra vez!';
    }
  }
  const usuario = {
    id,
    nome,
  };
  userList.push(usuario);
  return usuario;
};
console.log(criar(1, 'xupetinha'));
console.log(criar(1, 'xupetinha'));
