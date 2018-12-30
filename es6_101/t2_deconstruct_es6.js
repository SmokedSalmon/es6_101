let node = {
    type: 'Hello',
    info: 'Description',
    lay1: {
        lay2: {
            lay2_var1: 'you\'ve reached 2nd layer',
            lay2_var2: 'welcome'
        },
        lay1_var1: 'you\'ve reached 1st layer',
        lay1_var2: 'welcome to the cave'
    },
    first_name: 'Mitch',
    last_name: 'Smith'
}

let {
    type, info, 
    lay1: cave,
    lay1: { lay2: real_cave },
    ...bio
} = node;

let { ...full_bio } = node;

console.log(type);
console.log(info);
console.log(unknown);

let list = ['kitty', 'puppy', 'dog', 'cat', {
    leader: 'lion',
    herd: 'sheep'
}];

let [ pet1 = 'first pet', pet2, , , { leader }, pet4 = 'new specy' ] = list;

console.log(pet1);
console.log(pet2);
console.log(leader);

[ pet1, pet2, leader ] = [ pet2, leader, pet1 ];

let [ ...full_pet_list ] = list; 
let full_pet_list_2 = list.concat();

function ex_setCookie (key, value, {
    expire, path = '/', domain = location.origin
} = {}) {
    let cookie = `${key}=${value}`
    .concat(`${!!expire ? (';' + expire) : ''}`)
    .concat(`${!!path ? (';' + path) : ''}`)
    .concat(`${!!domain ? (';' + domain) : ''}`);
    document.cookie = cookie;
}

const optionsDefaults = {
    expire: false,
    path: '/',
    domain: location.origin
}

function serious_about_default (var1, var2, {
    expire = optionsDefaults.expire,
    path = optionsDefaults.path,
    domain = optionsDefaults.domain
} = optionsDefaults) {
    // do something
};