const posts = [
    { title: 'post One', body: 'This is post one', createdAt: new Date().getTime() },
    { title: 'post Two', body: 'This is post two', createdAt: new Date().getTime() }
];
let intervalId ;

function getPost() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';
        for(let i=0; i<posts.length; i++) {
            output += `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt) /1000} seconds ago</li>`
        }
        console.log('timer running id= ', intervalId)
        document.body.innerHTML = output;
    }, 1000)
}
    


function createPost(post, callback) {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    }, 2000);
}

function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt: new Date().getTime()})
        callback()
    }, 6000)
}

getPost()

createPost({ title: 'Post Three', body: 'this is post three'}, getPost);
createPost({ title:'Post Four', body:'this is post four'}, getPost)

var timer;
var count = 0
function lastEditInSecondaAgo(){
    count = 0;
    clearInterval(timer)
    timer = setInterval(timer)
    timer = setInterval(() => {
        count++;
        console.log(count)
    }, 5000);
}