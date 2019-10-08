const tab = {

    // remove existing active class from first tab and panel
    removeActiveClass: () => {
        let activeTabs = document.querySelectorAll('.active');
        activeTabs.forEach(function(tab) {
            tab.className = tab.className.replace('active', '');
        })

    },
    addActiveClass : (event) => {
         // change the class of the link tab to active
         event.target.parentElement.className += ' active';
         // get the the id of the content through link anchor tag
         let id = event.target.href.split('#')[1];
             id = '#' + id;
         // use the id to add active class to the content
         document.querySelectorAll(id).forEach(function(content){
           content.className = content.className += ' active';
         })
    }
}

module.exports= tab;