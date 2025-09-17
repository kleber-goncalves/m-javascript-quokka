const tasks = [
    {
        descricao: "acordar as 5 da manhã",
        prioridade: 1,
        status: "concluida",
    },
    {
        descricao: "ir na academia as 7 da manhã",
        prioridade: 1,
        status: "pedente",
    },
    {
        descricao: "levar a moto ao posto",
        prioridade: 2,
        status: "pedente",
    },
];


// ADICIONAR TAREFAS
tasks.push({ descricao: "cagar", prioridade: 2, status: "pedente" });
console.log(tasks)



//REMOVER TAREFAS
const rmvTasksClda = tasks.filter(({ status }) => status === "concluida");
console.log(rmvTasksClda);


//MARCAR TAREFAS CONCLUIDAS
const mrcTasksClda = tasks.map(tasks => ({ ...tasks, status: "concluida" }));
console.log(mrcTasksClda);


//ORDENAR TAREFAS POR PERIORIDADE
const ordTasks = tasks.sort((prevTask, currentTask) => prevTask.prioridade - currentTask.prioridade);
console.log(ordTasks);


//CONTAR TAREFAS PEDENTES
const cntTasksPnds = tasks.reduce((prev, next) => next.status === "pedente" ? prev + 1 : prev, 0);
console.log(cntTasksPnds);


//ENCONTRAR TAREFAS ESPECIFICAS
const enctrTasks = tasks.find(task => task.descricao === "ir na academia as 7 da manhã")
console.log(enctrTasks);


//VERIFICAR TAREFAS CONCLUIDAS
const vrfcTasksClda = tasks.every(tasks => tasks.status === "concluida")
console.log(vrfcTasksClda);
