const terceirizado = [
    {
        nome: "Maria Silva",
        valorHora: 80.0,
        horasTrabalhadas: 20,
        terceirizado: true,
    },
    {
        nome: "João Rocha",
        valorHora: 60.0,
        horasTrabalhadas: 25,
        terceirizado: false,
    },
    {
        nome: "Tiago James",
        valorHora: 80.0,
        horasTrabalhadas: 10,
        terceirizado: true,
    },
    {
        nome: "Ana Carla",
        valorHora: 70.0,
        horasTrabalhadas: 40,
        terceirizado: true,
    },
    {
        nome: "Pedro Paulo",
        valorHora: 50.0,
        horasTrabalhadas: 25,
        terceirizado: false,
    },
];

custoTotal = function (funcionariosTerceirizados) {
    let resultado = 0;
    funcionariosTerceirizados.forEach(funcionario => {
        resultado = resultado + (funcionario.valorHora * funcionario.horasTrabalhadas)
    });
    console.log(resultado)
};  

funcionariosTerceirizados = function (funcionarios) {
    let funcionariosTerceirizados = []
    funcionarios.forEach(funcionario => {
        if(funcionario.terceirizado){
            funcionariosTerceirizados.push(funcionario)
        }
    });
    custoTotal(funcionariosTerceirizados)
}

funcionariosTerceirizados(terceirizado)




