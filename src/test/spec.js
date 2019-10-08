const sinon = require('sinon');
const tab = require('../js/tab');

describe('Tab Test', () => {

    it('should call removeActiveClass', () => {
        const tabs = sinon.spy(tab, 'removeActiveClass');
        tab.removeActiveClass();
        sinon.assert.calledOnce(tabs);
    });

    it('should add active class to clicked element', () => {

        // create html elements
        var navBar = document.createElement("div"),
            unorderedList = document.createElement("ul"),
            listItem = document.createElement("li"),
            linkTag = document.createElement("a"),
            contentDiv = document.createElement("div"),
            contentParagraph = document.createElement("p");

        // add attributes to html elements
        linkTag.setAttribute("href", "#test");
        linkTag.setAttribute("id", "#link");
        contentDiv.setAttribute("id", "test");

        // append all together
        listItem.appendChild(linkTag);
        unorderedList.appendChild(listItem);

        contentDiv.appendChild(contentParagraph);

        navBar.appendChild(unorderedList);
        navBar.appendChild(contentDiv);

        // attach event listener
        linkTag.onclick = function(event){
          tab.addActiveClass(event);
        }
        const tabs = sinon.spy(tab, 'addActiveClass');
        linkTag.click();

        sinon.assert.calledOnce(tabs);
        

    });

    
});