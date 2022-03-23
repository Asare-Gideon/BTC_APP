import { ImageSourcePropType } from "react-native";

type img = ImageSourcePropType;

interface ImageType {
  img1 : img; 
  img2: img;
}

const images : ImageType = {
 img1 : require("../assets/images/img2.jpg") ,
img2:  require("../assets/images/item3.jpg") ,
 
}


export default images;