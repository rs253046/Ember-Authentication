export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  let pathLists = [
    'employee',

  ];

  
  pathLists.forEach((item) => {
   seedDatabase(server, item, 10);
  })

  server.createList('user' , 3);
 
}

function seedDatabase(server, path, count) {
  server.createList(path, count);
}
  