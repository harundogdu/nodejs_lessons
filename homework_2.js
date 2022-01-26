/* 
Job:

Post Sıralama ve Post Ekleme
Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.
*/

const posts = [
    {
        user: "user1",
        post: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects."
    },
    {
        user: "user2",
        post: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos."
    },
    {
        user: "user3",
        post: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox."
    },
    {
        user: "user4",
        post: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections."
    },

]


const listPosts = () => {
    posts.map(({ user, post }) => {
        console.log(user, ":", post)
    })
}

listPosts()

//Buraya kadar yeni post eklenmemiş halini yani mevcut postları listeledik. Bundan sonra yeni bir post ekliyoruz ve postları tekrar listeliyoruz.


const addPost = (newPost) => {
    const promisePost = new Promise((resolve, reject) => {
        posts.push(newPost)
        resolve(posts)
        reject("Oops! Post couldn't added. 😕")
    })

    return promisePost
}


let newPost = {
    user: "user5",
    post: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words."
};

async function showPosts() {

    try {
        await addPost(newPost)
        listPosts();
    } catch (err) {
        console.log(err)
    }
}

showPosts();

