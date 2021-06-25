import React, { useEffect, useState } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import {
    ImageBackground,
    Text,
    View,
    FlatList,
    Alert,
    Share,
    Platform
} from 'react-native';
import { AppointmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background/index';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { Member, MemberProps } from '../../components/Member';

import BannerImg from '../../assets/banner.png';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { api } from '../../services/api';

type Params = {
    guildSelected: AppointmentProps;
}

type GuildWidget = {
    is: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
}

export function AppointmentDetails() {
    const [ widget, setWidget ] = useState<GuildWidget>({} as GuildWidget);
    const [ loading, setLoading ] = useState(true);

    const routes = useRoute();
    const { guildSelected } = routes.params as Params;

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            console.log(response.data);
            setWidget(response.data);
        } catch (error) {
            Alert.alert('Verifique se o Widget do servidor esta habilitado.');
        } finally {
            setLoading(false);
        }
    }

    function handleShareInvitation() {
        const message = Platform.OS === 'ios'
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite
        });
    }

    function handleOpenGuild() {
        Linking.openURL(widget.instant_invite);
    }

    useEffect(() => {
        fetchGuildWidget();
    },[]);
    
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    guildSelected.guild.owner &&
                    <BorderlessButton onPress={handleShareInvitation} >
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent} >
                    <Text style={styles.title} >
                        { guildSelected.guild.name }
                    </Text>
                    <Text style={styles.subtitle} >
                        { guildSelected.description }
                    </Text>
                </View>
            </ImageBackground>

            {
                loading ? <Load/> :
            <>
                <ListHeader
                    title="Jogadores"
                    subtitle={`Total ${widget.members.length}`}
                />

                <FlatList
                    data={widget.members}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Member data={item}/>
                    )}
                    ItemSeparatorComponent={() => <ListDivider isCentered />}
                    style={styles.members}
                />
            </>
            }

            {
                guildSelected.guild.owner &&
                <View style={styles.footer} >
                    <ButtonIcon
                        title="Entrar na Partida"
                        onPress={handleOpenGuild} 
                    />
                </View>
            }
        </Background>
    );
}