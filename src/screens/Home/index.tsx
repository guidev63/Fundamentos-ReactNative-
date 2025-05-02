import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home() {

    function handleParticipantAdd(){
      console.log("voce Clicou no Botão De Adicionar!");
    }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome Do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta , 4 De Novembro De 2025.
      </Text>
       <View style={styles.form}>
      <TextInput style={styles.input}
        placeholder="Nome Do Participante"
        placeholderTextColor="#6B6B6B"
      />
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
           +
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}