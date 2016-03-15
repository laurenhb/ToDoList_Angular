(function(){
    angular.module('routerApp')
    .controller('ToDo', ['Item', 'itemsList', toDoCtrl]);

    function toDoCtrl(Item, itemsList){
        var self = this;
        // LOCAL VARIABLES

        // BOUND FUNCTIONS
        self.addItem = addItem;
        self.deleteItem = deleteItem;
        self.editItem = editItem;
        self.saveEdit = saveEdit;
        self.noEditMode = noEditMode;

        // BOUND VALUES
        self.listArray = [];
        self.newListItem = {
            title: '',
            description: ''
        };
        self.editMode = null;
        self.editListItem = {
            id: '',
            title: '',
            description: ''
        };

        // BOUND FUNCTION IMPLEMENTATIONS

        // Item.list().then(function(response){
        //     self.listArray = response.data;
        // });

        self.listArray = itemsList.data;

        function addItem(){
            if (!self.newListItem.title || !self.newListItem.description){
                return;
            }
            Item.add({
                title: self.newListItem.title,
                description: self.newListItem.description
            }).then(function(response){
                self.newListItem.id = response.data;
                self.listArray.push(self.newListItem);
                self.newListItem = {
                    title: '',
                    description: ''
                };
            });

        }

        function deleteItem(id){
            Item.remove(id)
            .then(function(response){
                for (var i=0; i<self.listArray.length; i++){
                    if (self.listArray[i].id === id){
                        self.listArray.splice(i, 1);
                        break;
                    }
                }
                console.log(self.listArray);
            });
        }

        function editItem(item){
            self.editListItem.title = item.title;
            self.editListItem.description = item.description;
            self.editMode = item.id;
        }

        function noEditMode(){
            self.editMode = null;
        }

        function saveEdit(id){
            Item.edit(id, self.editListItem).then(function(response){
                for (var i=0; i<self.listArray.length; i++){
                    if (self.listArray[i].id === id){
                        self.listArray[i] = response.data;
                        self.listArray[i].id = id;
                        console.log(self.listArray);
                        self.editMode = null;
                        break;
                    }
                }
                self.editListItem = {
                    id: '',
                    title: '',
                    description: ''
                };
            });
        }
    }

        // HELPER FUNCTIONS

})();
