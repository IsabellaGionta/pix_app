export default class DataManager  {
    static myInstance = null;
    userID = "";

    collections = [
        {
            userid: "user1",
            collectionid: 1,
            name:"Adventures",
            image:require("../assets/balloons.jpg"),
            description: "editable",
        },
        {
            userid: "user1",
            collectionid: 2,
            name:"Food",
            image:require("../assets/salad.jpg"),
            description: "editable",
        },
        {
            userid: "user2",
            collectionid: 3,
            name:"Cities",
            image:require("../assets/tokyo.jpg"),
            description: "editable",
        },
    ]

    photos = [
        {
            userid: "user1",
            collectionid: 1,
            photoid:1,
            name:"Ballon Ride 2010",
            image: require("../assets/balloons.jpg"),
            description: "Hot air balloon ride",
        },
        {
            userid: "user1",
            collectionid: 2,
            photoid:2,
            name:"Burger",
            image: require("../assets/burger.jpg"),
            description: "Yummy burger",
        },
        {
            userid: "user2",
            collectionid: 2,
            photoid:3,
            name:"Tokyo",
            image:require("../assets/tokyo.jpg"),
            description: "This photo was taken on 03/04/2017",
        },
        {
            userid: "user2",
            collectionid: 2,
            photoid:4,
            name:"Food",
            image:require("../assets/cheese.jpg"),
            description: "Cool cheese photo",
        },
        {
            userid: "user2",
            collectionid: 2,
            photoid:4,
            name:"Hiking",
            image:require("../assets/hiking.jpg"),
            description: "This photo was taken on 22/04/2012",
        },
    ]

    
    labels = [
        {
            label: "Adventure", 
            labelid: 1, 
            collectionid: 1,
            userid: "user1",
            photoid:5,
            icon:"airplane-takeoff", 
            backgroundColor: "orange",
        },
        {
            label: "Food", 
            labelid: 2, 
            userid: "user2",
            collectionid: 2,
            icon:"flash", 
            backgroundColor: "lightblue",
        },
        {
            label: "Cities", 
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
            image: require('../assets/NYC.jpeg'),
    
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