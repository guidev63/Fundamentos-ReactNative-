import { Text, View,} from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome Do Evento
      </Text>
      <Text style={ styles.eventDate}>
        Sexta , 4 De Novembro De 2025.
      </Text>
    </View>
  )
}