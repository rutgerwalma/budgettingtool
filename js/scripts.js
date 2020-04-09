function addTableRow(button){
  var table = $(button).parent().parent().find('table');
  table.append(
    '<tr>' + 
        '<td class="tg-0lax leftcell"><i class="fa fa-trash-alt" id="delete-icon" onclick="deleteTableRow(this);"></i><input type="text" class="leftinput" /></td>' +
        '<td class="tg-0lax rightcell"><i class="fas fa-euro-sign" id="euro-icon"></i><input type="text"class="rightinput"/></td>' +
    '</tr>'
  );
}

function deleteTableRow(button){
    $(button).closest('tr').remove();
}

$( document ).ready(function() {
    $('#date').text(moment().format('MMMM YYYY'));     
});

