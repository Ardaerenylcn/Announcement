import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import distances from '../../../../../constants/distances';
import colors from '../../../../../constants/colors';
import fonts from '../../../../../constants/fonts';

const DefectBodyComponent = ({ serialNumber, collerName }) => {
	const [text, onChangeText] = useState('');

	return (
		<View style={styles.defectBodyComponentContainer}>
			<TouchableOpacity style={styles.defectBodyComponentContainerHead}>
				<View style={styles.defectBodyComponentContainerHeadArea}>
					<Text>ARIZA KAYNAĞI</Text>
					<View style={styles.defectBodyComponentContainerHeadSelection}>
						<Text style={{ color: colors.borderColor }}>İşlem Seçiniz</Text>
						<Text>.</Text>
					</View>
				</View>
			</TouchableOpacity>

			<TextInput
				style={styles.input}
				onChangeText={onChangeText}
				value={text}
				placeholder={`${serialNumber} barkod numaralı ${collerName}  arıza açıklaması giriniz`}
				placeholderTextColor={colors.placeholderTextColor}
				multiline={true}
				numberOfLines={4}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	defectBodyComponentContainer: {
		flex: 1,
		backgroundColor: colors.white,
	},
	defectBodyComponentContainerHead: {
		flex: 1,
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
	},
	defectBodyComponentContainerHeadSelection: {
		flexDirection: 'row',
	},
	defectBodyComponentContainerHeadArea: {
		marginHorizontal: distances.defaultDistance,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: distances.defaultDistance,
	},
	input: {
		borderWidth: 1,
		borderColor: colors.borderColor,
		borderRadius: 4,
		padding: distances.defaultDistance,
		height: 120,
		textAlignVertical: 'top',
		fontSize: fonts.big,
	},
});

export default DefectBodyComponent;