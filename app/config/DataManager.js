export default class DataManager  {
    static myInstance = null;
    userID = "";

    collections = [
        {
            userid: "user1",
            collectionid: 1,
            name:"2020",
            image:require("../assets/icon.png"),
        },
        {
            userid: "user2",
            collectionid: 2,
            name:"2021",
            image:require("../assets/logo.png"),
        },
        {
            userid: "user3",
            collectionid: 3,
            name:"2022",
            image:require("../assets/plant.jpg"),
        },
    ]

    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance =  new DataManager();
        }
        return this.myInstance;
    }

    getUserID(id){
        this.userID = id;
    }
    setUserID(id){
        this.userID = id;
    }

    getCollections(id){
        return this.collections.filter((collection)=> collection.collectionid === id);
    }

    // addBook(book){
    //     this.books.push(book);
    // }

}