// Даний масив постів. Намалюйте ці пости на екран у контейнер з класом .container
// як картки, у картки має бути дизайн - рамка, відступи, зміна стилю при наведенні (напишіть стилі самі).

// Розв'яжіть задачу двома способами - використовуючи createElements і insertAdjacentHTML

// Додаткове завдання - по кліку на постову картку він повинен ставати прочитаним - стилі повинні змінитися.
// Підказка
//elem.onclick = function() {
// пишемо що відбувається на кліку
//};


const posts = [{
	id: 1,
	userId: 1,
	title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
	body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}, {
	id: 2,
	userId: 1,
	title: "qui est esse",
	body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
}, {
	id: 3,
	userId: 1,
	title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
	body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
}, {
	id: 4,
	userId: 1,
	title: "eum et est occaecati",
	body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
}, {
	id: 5,
	userId: 1,
	title: "nesciunt quas odio",
	body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
}, {
	id: 6,
	userId: 1,
	title: "dolorem eum magni eos aperiam quia",
	body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
}, {
	id: 7,
	userId: 1,
	title: "magnam facilis autem",
	body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
}, {
	id: 8,
	userId: 1,
	title: "dolorem dolore est ipsam",
	body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
}, {
	id: 9,
	userId: 1,
	title: "nesciunt iure omnis dolorem tempora et accusantium",
	body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
}, {
	id: 10,
	userId: 1,
	title: "optio molestias id quia eum",
	body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
}, {
	id: 11,
	userId: 2,
	title: "et ea vero quia laudantium autem",
	body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
}, {
	id: 12,
	userId: 2,
	title: "in quibusdam tempore odit est dolorem",
	body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
}, {
	id: 13,
	userId: 2,
	title: "dolorum ut in voluptas mollitia et saepe quo animi",
	body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
}, {
	id: 14,
	userId: 2,
	title: "voluptatem eligendi optio",
	body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
}, {
	id: 15,
	userId: 2,
	title: "eveniet quod temporibus",
	body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
}, {
	id: 16,
	userId: 2,
	title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
	body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
}, {
	id: 17,
	userId: 2,
	title: "fugit voluptas sed molestias voluptatem provident",
	body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
}, {
	id: 18,
	userId: 2,
	title: "voluptate et itaque vero tempora molestiae",
	body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
}, {
	id: 19,
	userId: 2,
	title: "adipisci placeat illum aut reiciendis qui",
	body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
}, {
	id: 20,
	userId: 2,
	title: "doloribus ad provident suscipit at",
	body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
}, {
	id: 21,
	userId: 3,
	title: "asperiores ea ipsam voluptatibus modi minima quia sint",
	body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
}, {
	id: 22,
	userId: 3,
	title: "dolor sint quo a velit explicabo quia nam",
	body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
}, {
	id: 23,
	userId: 3,
	title: "maxime id vitae nihil numquam",
	body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
}, {
	id: 24,
	userId: 3,
	title: "autem hic labore sunt dolores incidunt",
	body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
}, {
	id: 25,
	userId: 3,
	title: "rem alias distinctio quo quis",
	body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
}, {
	id: 26,
	userId: 3,
	title: "est et quae odit qui non",
	body: "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero"
}, {
	id: 27,
	userId: 3,
	title: "quasi id et eos tenetur aut quo autem",
	body: "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
}, {
	id: 28,
	userId: 3,
	title: "delectus ullam et corporis nulla voluptas sequi",
	body: "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum"
}, {
	id: 29,
	userId: 3,
	title: "iusto eius quod necessitatibus culpa ea",
	body: "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores"
}, {
	id: 30,
	userId: 3,
	title: "a quo magni similique perferendis",
	body: "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
}, {
	id: 31,
	userId: 4,
	title: "ullam ut quidem id aut vel consequuntur",
	body: "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
}, {
	id: 32,
	userId: 4,
	title: "doloremque illum aliquid sunt",
	body: "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
}, {
	id: 33,
	userId: 4,
	title: "qui explicabo molestiae dolorem",
	body: "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod"
}, {
	id: 34,
	userId: 4,
	title: "magnam ut rerum iure",
	body: "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
}, {
	id: 35,
	userId: 4,
	title: "id nihil consequatur molestias animi provident",
	body: "nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit"
}, {
	id: 36,
	userId: 4,
	title: "fuga nam accusamus voluptas reiciendis itaque",
	body: "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore"
}, {
	id: 37,
	userId: 4,
	title: "provident vel ut sit ratione est",
	body: "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui"
}, {
	id: 38,
	userId: 4,
	title: "explicabo et eos deleniti nostrum ab id repellendus",
	body: "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
}, {
	id: 39,
	userId: 4,
	title: "eos dolorem iste accusantium est eaque quam",
	body: "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex"
}, {
	id: 40,
	userId: 4,
	title: "enim quo cumque",
	body: "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam"
}, {
	id: 41,
	userId: 5,
	title: "non est facere",
	body: "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe"
}, {
	id: 42,
	userId: 5,
	title: "commodi ullam sint et excepturi error explicabo praesentium voluptas",
	body: "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut"
}, {
	id: 43,
	userId: 5,
	title: "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
	body: "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis"
}, {
	id: 44,
	userId: 5,
	title: "optio dolor molestias sit",
	body: "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae"
}, {
	id: 45,
	userId: 5,
	title: "ut numquam possimus omnis eius suscipit laudantium iure",
	body: "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem"
}, {
	id: 46,
	userId: 5,
	title: "aut quo modi neque nostrum ducimus",
	body: "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
}, {
	id: 47,
	userId: 5,
	title: "quibusdam cumque rem aut deserunt",
	body: "voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate"
}, {
	id: 48,
	userId: 5,
	title: "ut voluptatem illum ea doloribus itaque eos",
	body: "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit"
}, {
	id: 49,
	userId: 5,
	title: "laborum non sunt aut ut assumenda perspiciatis voluptas",
	body: "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut"
}, {
	id: 50,
	userId: 5,
	title: "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
	body: "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
}, {
	id: 51,
	userId: 6,
	title: "soluta aliquam aperiam consequatur illo quis voluptas",
	body: "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem"
}, {
	id: 52,
	userId: 6,
	title: "qui enim et consequuntur quia animi quis voluptate quibusdam",
	body: "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum"
}, {
	id: 53,
	userId: 6,
	title: "ut quo aut ducimus alias",
	body: "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique"
}, {
	id: 54,
	userId: 6,
	title: "sit asperiores ipsam eveniet odio non quia",
	body: "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia"
}, {
	id: 55,
	userId: 6,
	title: "sit vel voluptatem et non libero",
	body: "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit"
}, {
	id: 56,
	userId: 6,
	title: "qui et at rerum necessitatibus",
	body: "aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi"
}, {
	id: 57,
	userId: 6,
	title: "sed ab est est",
	body: "at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est"
}, {
	id: 58,
	userId: 6,
	title: "voluptatum itaque dolores nisi et quasi",
	body: "veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam"
}, {
	id: 59,
	userId: 6,
	title: "qui commodi dolor at maiores et quis id accusantium",
	body: "perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt"
}, {
	id: 60,
	userId: 6,
	title: "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
	body: "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis"
}, {
	id: 61,
	userId: 7,
	title: "voluptatem doloribus consectetur est ut ducimus",
	body: "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit"
}, {
	id: 62,
	userId: 7,
	title: "beatae enim quia vel",
	body: "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio"
}, {
	id: 63,
	userId: 7,
	title: "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
	body: "enim adipisci aspernatur nemo\nnumquam omnis facere dolorem dolor ex quis temporibus incidunt\nab delectus culpa quo reprehenderit blanditiis asperiores\naccusantium ut quam in voluptatibus voluptas ipsam dicta"
}, {
	id: 64,
	userId: 7,
	title: "et fugit quas eum in in aperiam quod",
	body: "id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui"
}, {
	id: 65,
	userId: 7,
	title: "consequatur id enim sunt et et",
	body: "voluptatibus ex esse\nsint explicabo est aliquid cumque adipisci fuga repellat labore\nmolestiae corrupti ex saepe at asperiores et perferendis\nnatus id esse incidunt pariatur"
}, {
	id: 66,
	userId: 7,
	title: "repudiandae ea animi iusto",
	body: "officia veritatis tenetur vero qui itaque\nsint non ratione\nsed et ut asperiores iusto eos molestiae nostrum\nveritatis quibusdam et nemo iusto saepe"
}, {
	id: 67,
	userId: 7,
	title: "aliquid eos sed fuga est maxime repellendus",
	body: "reprehenderit id nostrum\nvoluptas doloremque pariatur sint et accusantium quia quod aspernatur\net fugiat amet\nnon sapiente et consequatur necessitatibus molestiae"
}, {
	id: 68,
	userId: 7,
	title: "odio quis facere architecto reiciendis optio",
	body: "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit"
}, {
	id: 69,
	userId: 7,
	title: "fugiat quod pariatur odit minima",
	body: "officiis error culpa consequatur modi asperiores et\ndolorum assumenda voluptas et vel qui aut vel rerum\nvoluptatum quisquam perspiciatis quia rerum consequatur totam quas\nsequi commodi repudiandae asperiores et saepe a"
}, {
	id: 70,
	userId: 7,
	title: "voluptatem laborum magni",
	body: "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore"
}, {
	id: 71,
	userId: 8,
	title: "et iusto veniam et illum aut fuga",
	body: "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis"
}, {
	id: 72,
	userId: 8,
	title: "sint hic doloribus consequatur eos non id",
	body: "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit"
}, {
	id: 73,
	userId: 8,
	title: "consequuntur deleniti eos quia temporibus ab aliquid at",
	body: "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut"
}, {
	id: 74,
	userId: 8,
	title: "enim unde ratione doloribus quas enim ut sit sapiente",
	body: "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora"
}, {
	id: 75,
	userId: 8,
	title: "dignissimos eum dolor ut enim et delectus in",
	body: "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem"
}, {
	id: 76,
	userId: 8,
	title: "doloremque officiis ad et non perferendis",
	body: "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio"
}, {
	id: 77,
	userId: 8,
	title: "necessitatibus quasi exercitationem odio",
	body: "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident"
}, {
	id: 78,
	userId: 8,
	title: "quam voluptatibus rerum veritatis",
	body: "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus"
}, {
	id: 79,
	userId: 8,
	title: "pariatur consequatur quia magnam autem omnis non amet",
	body: "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos"
}, {
	id: 80,
	userId: 8,
	title: "labore in ex et explicabo corporis aut quas",
	body: "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident"
}, {
	id: 81,
	userId: 9,
	title: "tempora rem veritatis voluptas quo dolores vero",
	body: "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut"
}, {
	id: 82,
	userId: 9,
	title: "laudantium voluptate suscipit sunt enim enim",
	body: "ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic"
}, {
	id: 83,
	userId: 9,
	title: "odit et voluptates doloribus alias odio et",
	body: "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam"
}, {
	id: 84,
	userId: 9,
	title: "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
	body: "sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio"
}, {
	id: 85,
	userId: 9,
	title: "dolore veritatis porro provident adipisci blanditiis et sunt",
	body: "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione"
}, {
	id: 86,
	userId: 9,
	title: "placeat quia et porro iste",
	body: "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio"
}, {
	id: 87,
	userId: 9,
	title: "nostrum quis quasi placeat",
	body: "eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est"
}, {
	id: 88,
	userId: 9,
	title: "sapiente omnis fugit eos",
	body: "consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed"
}, {
	id: 89,
	userId: 9,
	title: "sint soluta et vel magnam aut ut sed qui",
	body: "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est"
}, {
	id: 90,
	userId: 9,
	title: "ad iusto omnis odit dolor voluptatibus",
	body: "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis"
}, {
	id: 91,
	userId: 10,
	title: "aut amet sed",
	body: "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
}, {
	id: 92,
	userId: 10,
	title: "ratione ex tenetur perferendis",
	body: "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui"
}, {
	id: 93,
	userId: 10,
	title: "beatae soluta recusandae",
	body: "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla"
}, {
	id: 94,
	userId: 10,
	title: "qui qui voluptates illo iste minima",
	body: "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
}, {
	id: 95,
	userId: 10,
	title: "id minus libero illum nam ad officiis",
	body: "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
}, {
	id: 96,
	userId: 10,
	title: "quaerat velit veniam amet cupiditate aut numquam ut sequi",
	body: "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
}, {
	id: 97,
	userId: 10,
	title: "quas fugiat ut perspiciatis vero provident",
	body: "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
}, {
	id: 98,
	userId: 10,
	title: "laboriosam dolor voluptates",
	body: "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
}, {
	id: 99,
	userId: 10,
	title: "temporibus sit alias delectus eligendi possimus magni",
	body: "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
}, {
	id: 100,
	userId: 10,
	title: "at nam consequatur ea labore ea harum",
	body: "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
}];

const container = document.querySelector('.container');

posts.map((elem) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <span class="card__id">ID - ${elem.id}</span>
    <h3 class="card__title">Title: ${elem.title}</h3>
    <p class="card__text">Post: ${elem.body}</p>
    <span class="card__userId">User: ${elem.userId}</span>
    `
    card.onclick = () => card.classList.toggle('visited');
    container.append(card);
});

