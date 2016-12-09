//Estas lineas de codigo permite que el usuario seleccione el checkbox creado previamente, y que al momento de darle un click con el plusor que se active o desactive al momento de seleccionarlo y este produce un efecto en cada acción//

function TodoCtrl($scope) {
  
  $scope.todos = [
    {text:'Learn AngularJS', done:false},         
    {text: 'Build an app', done:false}
  ];
  //identifica la acción y recibe o retorna datos//
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  //Toma datos capturados y los envia//
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  //Este es el codigo del boton que permite añadir un dato o captura ingresada//
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
}