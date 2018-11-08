const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = $('[name=character-id]').val()
    charactersAPI.getOneRegister(id)
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = $('[name=character-id-delete]').val()
    charactersAPI.deleteOneRegister(id)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    let name = $('#new-character-form [name=name]').val()
    let occupation = $('#new-character-form [name=occupation]').val()
    let weapon = $('#new-character-form [name=weapon]').val()
    let cartoon = $('#new-character-form [name=cartoon]').is(':checked')
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon)
  }
})
