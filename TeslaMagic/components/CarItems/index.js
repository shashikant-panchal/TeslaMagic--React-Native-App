import React from 'react'
import { Text, View, ImageBackground } from 'react-native';
import StyledButton from '../styledBotton';
import styles from './styles';

const CarItem = (props) => {
    const { name, tagLine, tagLineCTA, image } = props.car;
    return (
        <View style={styles.Main}>
            <ImageBackground
                source={image}
                style={styles.image}
                 />
            <View style={styles.titles}>
                <Text style={styles.titleHead}>{name}</Text>
                <Text style={styles.subTitle}>{tagLine}{' '}
                    <Text style={styles.subTitleCTA}>{tagLineCTA}</Text>
                </Text>
            </View>
            <View style={styles.buttonConatainer}>
                <StyledButton type='primary' content={"Custom Order"} onPress={() => console.warn('')} />
                <StyledButton type='secondary' content={"Existing Inventory"} onPress={() => console.warn('')} />
            </View>
        </View>
    )
}

export default CarItem;
