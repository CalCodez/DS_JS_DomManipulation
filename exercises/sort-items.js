/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * "02 SortingNode.md"
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...
let allItems = document.querySelectorAll('.item');
console.log(allItems);

/**
 * @task
 * Sele;ct all sort buttons by class of "sortBtn" as a NodeList.
 * Store them in the sortBtn variable
 * Example: const sortBtn = <Your code>;
 */

// Your code goes here...
const sortBtn = document.querySelectorAll('.sortBtn');

/**
 * @task
 * Create a sortData function that follows the list of requirements:
 * * Takes an argument of the direction to sort as a string of 'asc' or 'desc'
 * * Defines a container variable to get the node by id of 'main'
 * * Uses the allItems variable as a source for the array of items to sort
 * * Sorts the items by id and appends them back to the main container in the sorted order.
 * Example: sortData('desc') => <reversed order of items in the main container>
 * Example: sortData('asc') => <a-z order of items in the main container>
 */

// Your code goes here...
const mainContainer = Array.from(allItems);
console.log(mainContainer)
const sortData = (asc, desc) => {
  if (asc.innerHtml < desc.innerHtml) return 1;
  else if (asc.inneerHtml > desc.inneerHtml) return -1;
  else return 0;

}
mainContainer.sort(sortData);

//mainContainer.forEach((item) => {
//  mainContainer.append(item);
//});




/**
 * @task
 * Iterate through the every item in sortBtn NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Make the sortData function call, assign the item's dataset sortdir property
 */

// Your code goes here...

for (const elm of sortBtn) {
  elm.addEventListener('click', function () {
    elm[0] = asc.inneerHtml.sortData();
    elm[1] = desc.innerHtml.sortData();
    sortData();
  });


}



//for (const elm of switcher) {
//  elm.addEventListener('click', function () {
//    const toggle = this.dataset.toggle;
//    //set active state
//    setActive(elm, switcherBtn);
//    setTheme(toggle);

//  })
//}