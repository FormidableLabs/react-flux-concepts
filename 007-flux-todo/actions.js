/** Actions */

var TodoActions = Flux.createActions({
    addRecipe: function(text){
       return {
          actionType: "ADD_TODO",
          text: text
       }
    },
    kittenLaunch: function(data){
        return {
            actionType: "KITTEN_LAUNCH",
            data: data
        }
    }
});