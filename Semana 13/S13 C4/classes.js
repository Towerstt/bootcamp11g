class PostClass {
    constructor(props) {
        this.content = props.content
        this.coverUrl = props.coverUrl
        this.creationDate = props.creationDate
        this.creationTime = props.creationTime
        this.duration = props.duration
        this.likes = props.likes
        this.postId = props.postId
        this.tags = props.tags
        this.title = props.title
        this.userId = props.userId
    }
}

class RepliesClass {
    constructor(props) {
        this.content = props.content
        this.creationDate = props.creationDate
        this.creationTime = props.creationTime
        this.post = props.post
        this.replyId = props.replyId
        this.userId = props.userId
    }
}

class UserClass {
    constructor(props) {
        this.description = props.description
        this.joined = props.joined
        this.location = props.location
        this.mail = props.mail
        this.password = props.password
        this.userId = props.userId
        this.userName = props.userName
        this.userNickname = props.userNickname
        this.userPic = props.userPic
        this.work = props.work
    }
}

const newPost = new PostClass({
    content: 1,
    coverUrl: 2,
    creationDate: 3,
    creationTime: 4,
    duration: 5,
    likes: 6,
    postId: 7,
    tags: 8,
    title: 9,
    userId: 10
})

const newReply = new RepliesClass({
    content: 1,
    creationDate: 2,
    creationTime: 3,
    post: 4,
    replyId: 5,
    userId: 6
})

const newUser = new UserClass({
    description: 1,
    joined: 2,
    location: 3,
    mail: 4,
    password: 5,
    userId: 6,
    userName: 7,
    userNickname: 8,
    userPic: 9,
    work: 10
})


class SeresVivos {
    constructor (props){
        this.tipo = props.tipo
        this.genero = props.genero
    }
    get estaVivo(){
        if (this.tipo){
            return `Es un animal de tipo ${this.tipo} y está vivo`
        }else {return 'No'}
    }

    set mamifero(obj){
        const {tipo, genero, raza, edad} = obj
        const frase = `Es un perro ${genero} de raza ${raza} y de ${edad} años`
        this.frase = frase
    }
}

class Perro extends SeresVivos{ //La clase Perros hereda las propiedades de la clase SeresVivos y extiende con nuevas propiedades
    constructor(props){
        super(props)

        this.raza = props.raza
        this.edad = props.edad
    }
}

const dog = new Perro ({tipo : 'animal', genero : 'macho', raza : 'Doberman', edad : 5})
console.log(dog)
console.log(dog.estaVivo)
dog.mamifero = dog
console.log(dog.mamifero)