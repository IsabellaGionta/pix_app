export default class DataManager  {
    static myInstance = null;
    userID = "";

    collections = [
        {
            userid: "user1",
            collectionid: 1,
            name:"2020",
            image:require("../assets/icon.png"),
            description: "editable",
        },
        {
            userid: "user1",
            collectionid: 2,
            name:"2021",
            image:require("../assets/logo.png"),
            description: "editable",
        },
        {
            userid: "user2",
            collectionid: 3,
            name:"2022",
            image:require("../assets/plant.jpg"),
            description: "editable",
        },
    ]

    photos = [
        {
            userid: "user1",
            collectionid: 1,
            photoid:1,
            name:"2020",
            image: require("../assets/icon.png"),
            description: "This is the description of the photos",
        },
        {
            userid: "user1",
            collectionid: 2,
            photoid:2,
            name:"2021",
            image: require("../assets/logo.png"),
            description: "This is the description of the photos. This is the description of the photos",
        },
        {
            userid: "user2",
            collectionid: 2,
            photoid:3,
            name:"Flowers",
            image:require("../assets/plant.jpg"),
            description: "This photo was taken on 03/04/2017",
        },
        {
            userid: "user2",
            collectionid: 2,
            photoid:4,
            name:"icon",
            image:require("../assets/icon.png"),
            description: "This photo was taken on 03/12/2021",
        },
        {
            userid: "user2",
            collectionid: 2,
            name:"Plant photos",
            image:require("../assets/plant.jpg"),
            description: "This photo was taken on 22/04/2012",
        },
    ]

    
    labels = [
        {
            label: "2020", 
            labelid: 1, 
            collectionid: 2,
            userid: "user1",
            photoid:5,
            icon:"airplane-takeoff", 
            backgroundColor: "orange",
        },
        {
            label: "2021", 
            labelid: 2, 
            userid: "user2",
            collectionid: 1,
            icon:"flash", 
            backgroundColor: "lightblue",
        },
        {
            label: "2022", 
            labelid: 3,
            userid: "user1",
            collectionid: 3, 
            backgroundColor: "lightblue",
        },
    ];


    users = [
        {
            id: "user1",
            name: "Isabella",
            email: "isa@gmail.com",
            password: "123456",
            image: require('../assets/icon.png'),
    
        },
        {
            id: "user2",
            name: "Gionta",
            email: "bel@gmail.com",
            password: "789012",
            image: require('../assets/plant.jpg'),
    
        },
    ];







    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance =  new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }
    setUserID(id){
        this.userID = id;
    }

    getUsers(id){
        return this.users.filter((user)=> user.id === id);
    }

    
    createUser(user){
        this.users.push(user);
    }
    getCollections(id){
        return this.collections.filter((collection)=> collection.userid === id);
    }

    
    addCollection(collection){
        this.collections.push(collection);
    }

    getPhotos(id){
        return this.photos.filter((photo)=> photo.userid === id);
    }

    addPhoto(photo){
        this.photos.push(photo);
    }

    getLabels(id){
        return this.labels.filter((label)=> label.userid === id);
    }


    // editPhoto(photo) {
    //     this.photos.update(photo);


    // }


}