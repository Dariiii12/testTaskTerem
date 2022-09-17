$(document).ready(() => {
    $('#button').click(() => {
        const values = {}
        $('#form').serializeArray().forEach(element => {
            values[element.name] = element.value;
        });
        $('#form-result').text(JSON.stringify(values))
        $.get('/index.php', JSON.stringify(values), data => alert(data));
    });
});
