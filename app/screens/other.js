
           
           //Photo screen code 
           
           
           <Overlay style={styles.overlay} isVisible={overlayVisible} onBackdropPress={toggleOverlay}>
            <View style={styles.overlayContainer}> 
                {/* <View  style={styles.close} onPress={close}>
                    <MaterialCommunityIcons  name="close"  /> 
                </View> */}
                <Image source={image} style={styles.imageOverlay}/>
                <View style={styles.textOverlay}> 
                    <AppText style={{textAlign: 'center', marginBottom: 10,}}> Edit Photo</AppText>
                    <AppTextInput style={styles.photoNameOverlay} 
                        placeholder="Edit Photo Name"
                        value={name}
                        onChangeText={(inputText) => setName(inputText)}
                    />  
                    
                    <AppTextInput style={styles.photoTextOverlay}
                        placeholder="Edit Description"
                        value={description}
                        onChangeText={(inputText) => setDescription(inputText)}
                    />     
                </View>
                <AppText style={{textAlign: 'center', fontSize:16,}}> Choose a Photo:</AppText>

                <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
                    <AppIcon  name="camera" size={80} iconColor={AppColors.otherColor}/>
                    {image && <Image source={{uri: image.path}} style={{height:80, width:80, marginLeft: 20,}}/>}
                 </TouchableOpacity>
                <View style={styles.buttonOverlay}>
                    <AppButton title="Save Changes" onPress={() => {
                            console.log('clicked');
                            editPhoto();
                            navigation.navigate("Photos");
                    }} />
                </View>
            </View>
        </Overlay> 





const editPhoto = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    let photoID = commonData.getPhotos().photoid;
    let collectionID = commonData.getCollections().collectionid;


    const photos = commonData.getPhotos(user);

    const updatedPhoto = {
        photoid: photos.photoid,
        userid: user,
        collectionid: photos.collectionid,
        image: image.path,
        name: name,
        description: description
    }
    
    console.log(updatedPhoto);
    // commonData.editPhoto(updatedPhoto);

}




///Collection.js screen

<Overlay style={styles.overlay} isVisible={collectionOverlayVisible} onBackdropPress={toggleCollectionOverlay}>
<View style={styles.overlayContainer}> 
    <View style={styles.textOverlay}> 
        <AppText style={{textAlign: 'center', marginBottom: 10,}}> Add Collection</AppText>
        <AppTextInput style={styles.appTextInput}
            placeholder="Add New Collection Name"
            value={name}
            onChangeText={(inputText) => setName(inputText)}> 
        </AppTextInput>  
    </View>
    <AppText style={{textAlign: 'center', fontSize:16,}}> Choose a Photo:</AppText>
    <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
        <AppIcon  name="camera" size={80} iconColor={AppColors.otherColor}/>
        {image && <Image source={{uri: image.path}} style={{height:80, width:80, marginLeft: 20,}}/>}
     </TouchableOpacity>
    <View style={styles.buttonOverlay}>
        <AppButton title="Create Collection" 
            onPress={() => {
                   addCollection();
                   navigation.navigate("Collection");
            }}
        />
    </View>
</View>
</Overlay> 