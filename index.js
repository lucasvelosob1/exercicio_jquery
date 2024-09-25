$(document).ready(function() {
    $('#adicionarTarefa').click(function() {
        let tarefa = $('#tarefa').val();
        
        if (tarefa.trim() !== '') {
            $('#listaDeTarefas').append('<li>' + tarefa + '</li>');
            $('#tarefa').val('');
        }
    });
    
    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
