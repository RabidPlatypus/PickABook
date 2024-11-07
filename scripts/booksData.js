const books =  [
{"title": "White Fang","image": "../Images/WhiteFang.jpg","author": "J. London","age_range": "Middle School","tags": ["Adventure", "Nature"]},
{"title": "Harry Potter","image": "../Images/HarryPotter.jpg","author": "J.K. Rowling","age_range": "Middle School","tags": ["Fantasy", "Magic"]},
{"title": "To Kill A Mockingbird","image": "../Images/Mockingbird.jpeg","author": "H. Lee","age_range": "High School","tags": ["Historical", "Social Justice"]},
{"title": "Jurrasic Park","image": "../Images/Jurrasic.jpg","author": "M. Crichton","age_range": "Adult","tags": ["Science Fiction", "Adventure"]},
{"title": "The Hunger Games","image": "../Images/Hunger.jpg","author": "S.Collins","age_range": "High School","tags": ["Dystopian", "Adventure"]},
{"title": "The Great Gatsby","image": "../Images/Gatsby.jpg","author": "F.S. Fitzgerald","age_range": "High School","tags": ["Classic", "Drama"]},
{"title": "1984","image": "../Images/1984.jpg","author": "G. Orwell","age_range": "High School","tags": ["Dystopian", "Political"]},
{"title": "The Hobbit","image": "../Images/Hobbit.jpg","author": "J.R.R Tolkien","age_range": "Middle School","tags": ["Fantasy", "Adventure"]},
{"title": "Catcher In The Rye","image": "../Images/Catcher.jpg","author": "J.D. Salinger","age_range": "High School","tags": ["Drama", "Coming-of-Age"]},
{"title": "Lord of the Rings","image": "../Images/LOTR.jpg","author": "J.R.R. Tolkien","age_range": "High School","tags": ["Fantasy", "Epic"]},
{"title": "Pride and Prejudice","image": "../Images/Pride.jpg","author": "J. Austen","age_range": "Adult","tags": ["Romance", "Classic"]},
{"title": "The Lightning Thief","image": "../Images/Lightning.jpeg","author": "R. Riordan","age_range": "Middle School","tags": ["Fantasy", "Adventure"]},
{"title": "Fahrenheit 451","image": "../Images/451.jpg","author": "R. Bradbury","age_range": "High School","tags": ["Dystopian", "Science Fiction"]},
{"title": "Charlotte's Web","image": "../Images/Charlotte.jpg","author": "E.B. White","age_range": "Elementary","tags": ["Friendship", "Nature"]},
{"title": "The Outsiders","image": "../Images/Outsiders.jpeg","author": "S.E. Hinton","age_range": "Middle School","tags": ["Coming-of-Age", "Drama"]},
{"title": "The Old Man and the Sea","image": "../Images/OMAS.jpeg","author": "E. Hemmingway","age_range": "Adult","tags": ["Classic", "Adventure"]},
{"title": "The Help","image": "../Images/Help.jpeg","author": "K. Stockett","age_range": "Adult","tags": ["Historical", "Social Justice"]},
{"title": "Where the Crawdads Sing","image": "../Images/Crawdads.jpeg","author": "D. Owens","age_range": "Adult","tags": ["Mystery", "Nature"]},
{"title": "Matilda","image": "../Images/Matilda.jpeg","author": "R. Dahl","age_range": "Elementary","tags": ["Fantasy", "Humour"]},
{"title": "The BFG","image": "../Images/BFG.jpeg","author": "R. Dahl","age_range": "Elementary","tags": ["Fantasy", "Adventure"]},
{"title": "The Cat in the Hat","image": "../Images/CITH.jpeg","author": "D. Seuss","age_range": "Elementary","tags": ["Humour", "Classic"]},
{"title": "Post Office","image": "../Images/Post.jpeg","author": "C. Bukowski","age_range": "Adult","tags": ["Humour", "Drama"]},
{"title": "Slughterhouse Five","image": "../Images/Slaughterhouse.jpeg","author": "K. Vonnegut","age_range": "Adult","tags": ["Science Fiction", "War"]},
{"title": "Cat's Cradle","image": "../Images/Cats.jpeg","author": "K. Vonnegut","age_range": "Adult","tags": ["Science Fiction", "Satire"]},
{"title": "The Sleepover","image": "../Images/Thesleepover.jpg","author": "M. Regina","age_range": "Middle School","tags": ["Graphic Novel", "Magical Realism"]},
{"title": "The Witch Boy ","image": "../Images/Thewitchboy.jpg","author": "M. Ostertag","age_range": "Middle School","tags": ["Fantasy", "Young Adult"]},
{"title": "Fearless","image": "../Images/Fearless.jpg","author": "K. Porter","age_range": "Middle School","tags": ["Superhero", "Action"]},
{"title": "Turtle In Paradise","image": "../Images/TIP.jpg","author": "J. Holm","age_range": "Middle School","tags": ["Historical Fiction", "Family"]},
{"title": "Hotel Magnifique","image": "../Images/Hotelmag.jpg","author": "E. Taylor","age_range": "High School","tags": ["Dark Fantasy", "Young Adult Fiction"]},
{"title": "The Twisted Ones","image": "../Images/thetwistedones.jpg","author": "S. Cawthon","age_range": "High School","tags": ["Horror", "Thriller"]},
{"title": "As Old As Time: A Twisted Tale","image": "../Images/aoattwistedtales.jpg","author": "L. Braswell","age_range": "High School","tags": ["Fantasy", "Fairy Tale"]},
{"title": "Crime and Punishment","image": "../Images/CAP.jpg","author": "F. Dostoyevsky","age_range": "Adult","tags": ["Classic Literature", "Psychological Fiction"]},
{"title": "The Dead Girls of Hysteria Hall","image": "../Images/DGoHH.jpg","author": "K. Alender","age_range": "High School","tags": ["Young Adult", "Paranormal"]},
{"title": "Don't Turn Out the Lights","image": "../Images/dontturnoutthelights.jpg","author": "J. Maberry","age_range": "Middle School","tags": ["Young Adult", " Urban Legends"]},
{"title": "Dragon Ball","image": "../Images/Dragonballfullcolorvol2.jpg","author": "A. Toriyama","age_range": "High School","tags": ["Manga", "Action"]},
{"title": "Drama","image": "../Images/Drama.jpg","author": "R. Telgemeier","age_range": "Middle School","tags": ["Friendship", "Inclusivity"]},
{"title": "The Last Kids on Earth","image": "../Images/TLKOE.jpg","author": "M. Brallier","age_range": "High School","tags": ["Friendship", "Fantasy"]},
{"title": "Long Way Down","image": "../Images/Longwaydown.jpg","author": "J. Reynolds","age_range": "High School","tags": ["Novel in Verse", "Social Justice"]},
{"title": "My Neighbor Seki","image": "../Images/myneighbor.jpg","author": "T. Morishige","age_range": "Middle School","tags": ["Manga", "Comedy"]},
{"title": "New Kid","image": "../Images/newkid.jpg","author": "J. Craft","age_range": "Middle School","tags": ["School Life", "Diversity"]},
{"title": "Shallow Graves","image": "../Images/Shallowgraves.jpg","author": " K. Wallace","age_range": "High School","tags": ["Young Adult", "Paranormal"]},
{"title": "Shuri","image": "../Images/Shuri.jpg","author": "N. Stone","age_range": "Middle School","tags": ["Science Fiction", "Superheroes"]},
{"title": "Splatoon","image": "../Images/SplatoonV1.jpg","author": "S. Hinodeya","age_range": "Middle School","tags": ["Action", "Adventure"]},
{"title": "Sunkissed ","image": "../Images/Sunkissed.jpg","author": "S. Hinodeya","age_range": "Middle School","tags": ["Manga", "Humor"]},
{"title": "This is our rainbow","image": "../Images/ThisisourRainbow.jpg","author": "K. Locke and N. Melleby.","age_range": "Middle School","tags": ["LGBTQ+ Representation", "Anthology"]},
{"title": "You Hear Me?","image": "../Images/Youhearme.jpg","author": "y B. Franco","age_range": "High School","tags": ["Poetry", "Identity"]},
{"title": " Bloom","image": "../Images/bloom.jpg","author": " K. Oppel","age_range": "High School","tags": ["Young Adult Fiction", "Science Fiction"]},
{"title": "City Spies","image": "../Images/CitySpies.jpg","author": "J. Ponti ","age_range": "Middle School","tags": ["Adventure", "Spy Thriller"]},
{"title": "Darkness Creeping","image": "../Images/DarknessCreeping.jpg","author": "N. Shusterman","age_range": "High School","tags": ["Horror", "Psychological Horror"]},
{"title": "Dead Flip","image": "../Images/Deadflip.jpg","author": "S. Farizan","age_range": "High School","tags": ["1990s Nostalgia", "Mystery"]},
{"title": "Divergent","image": "../Images/Divergent.jpg","author": "V. Roth","age_range": "High School","tags": ["Dystopian", "Female Protagonist"]},
{"title": "Dog Man","image": "../Images/DogMan.jpg","author": "D. Pilkey","age_range": "Elementary","tags": ["Graphic Novel", "Superheroes"]},
{"title": "Dragon Ball Z","image": "../Images/DragonBallFullcolorvol2.jpg","author": "A. Toriyama","age_range": "Middle School","tags": ["Manga", "Action"]},
{"title": "The Graveyard Book","image": "../Images/GraveyardBook.jpg","author": "N. Gaiman","age_range": "Middle School","tags": ["Fantasy", "Coming of Age"]},
{"title": "Guest","image": "../Images/Guest.jpg","author": "M. Hahn","age_range": "Middle School","tags": ["Folklore", "Fairy Tale"]},
{"title": "A Heart Like Ringo Starr","image": "../Images/AheartlikeRingostarr.jpg","author": "L. Oatman High","age_range": "High School","tags": ["Young Adult", "1960s Nostalgia"]},
{"title": "Mystery and Madness","image": "../Images/EdgarAllanPoe.jpg","author": "E. Poe","age_range": "High School","tags": ["Classic Literature", "Gothic Fiction"]},
{"title": "The Hidden Oracle","image": "../Images/pjhiddenO.jpg","author": "R. Riordan","age_range": "Middle School","tags": ["Mythology (Greek and Roman)", "Gods and Demigods"]},
{"title": "Hooky","image": "../Images/hooky.jpg","author": "M. Bonastre Tur","age_range": "High School","tags": ["Magic", "Adventure"]},
]; 
// This script saves the book data in localStorage
