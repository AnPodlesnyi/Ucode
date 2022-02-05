let alienSpecies = new Object();
alienSpecies.name = prompt('Name of the species?','Ba\'orian')
alienSpecies.leader = prompt('Name of the leader of the aliens?','The Great Kaijan of K\'anbula\n');
alienSpecies.resources = prompt('Resources. Enter resources separated by commas','sozellstone, Ke\'qun, coal, caak').split(",");
alienSpecies.resourcesCount = alienSpecies.resources.length;
alienSpecies.agenda = prompt('The goals and ideas of the aliens','They seek to colonize planets with water.');
alienSpecies.isHostile = new Boolean(true);
alert('Here\'s the alien species\n'
+ 'name - ' + alienSpecies.name
+ '\nleader - ' + alienSpecies.leader
+ 'resources - ' + alienSpecies.resources
+ '\nresourcesCount - ' + alienSpecies.resourcesCount
+ '\nagenda - ' + alienSpecies.agenda
+ '\nisHostile - ' + alienSpecies.isHostile);

