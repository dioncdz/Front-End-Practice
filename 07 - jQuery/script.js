
$(document).ready(function() {

    var recipeBox =  $('#recipe_textbox');
    var addBtn = $('#add_btn');
    var cart = $('.cart');
    var deleteList = $('#delete_list')

    addBtn.on('click', ()=> {
        
        if(recipeBox.val().length > 0) {

            cart.append(`
            <div> Item List
                <p>Recipe: ${recipeBox.val()}<button class="delete_btn">Delete</button></p>
            <div>` )
            recipeBox.val('')
            
            $('.delete_btn').on('click', function() {
                // $(this).parent().parent().remove(); 
                // $(this).parents().remove() // removes everything
                $(this).parentsUntil(cart).remove() //removes everything until cart
            })

        } else {
            alert('required')
        }
    })

    // Delete items and other functions for selection
    deleteList.on('click', ()=> {

        // Change font color of children
        // $('#checklist').children().css({"color" : "red"})

        // Finds the element and do something
        // $('#checklist').find('.unq').css({"color" : "red", "font-size": "2rem"})

        //Filter = similar to find
        // $('#checklist > ul > li').filter('.unq').css({"color" : "lightblue", "font-size": "2rem"})

        //Not = everything except
        // $('#checklist > ul > li').not('.unq').css({"color" : "lightblue", "font-size": "2rem"})

        // Selects first element
        $('#checklist > ul > li').first().css({"color" : "blue", "font-size": "2rem"})
        
        // Selects last element
        $('#checklist > ul > li').last().css({"color" : "indianred", "font-size": "2rem"})
        
        //Select based on EQ -index
        $('#checklist > ul > li').eq(3).css({"color" : "teal", "font-size": "2rem"})
        
    })
})