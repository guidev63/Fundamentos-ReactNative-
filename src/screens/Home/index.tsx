import { Text, View, TextInput, TouchableOpacity, FlatList ,Alert} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';


export function Home() {
  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'João', 'Gustavo', 'Vitoria'];



  function handleParticipantAdd() {
    if (participants.includes("Rodrigo")){
     return Alert.alert("Participamnte Existe","já existe um participante na lista com esse nome. ");
    }
    console.log("Você clicou no botão de adicionar!");
  }
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`,[
      {
        text:'Sim',
       onPress: () => Alert.alert("Deletado!")
      },
      {
        text:'Não',
        style: 'cancel'
      }
    ])
    console.log(`Você clicou em remover o Participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome Do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2025.
      </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmplyText}>
            ninguém chegou no evento Ainda ? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}
