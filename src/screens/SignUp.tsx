import { useNavigation } from '@react-navigation/native'
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import { useForm, Controller } from 'react-hook-form';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignUp(){
	const navigation = useNavigation();

	const { control } = useForm();

	function handleGoBack(){
		navigation.goBack();
	}

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
			<VStack flex={1} px={10}>

				<Image
					source={BackgroundImg}
					defaultSource={BackgroundImg}
					alt="Pessoas treinando"
					resizeMode="contain"
					position="absolute"
				/>

				<Center my={24}>
					<LogoSvg />

					<Text color="gray.100" fontSize="sm">
						Treine sua mente e o seu corpo
					</Text>

				</Center>

				<Center>
					<Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
						Crie sua conta
					</Heading>

					<Controller 
						control={control}
						name="name"
						render={({ field: { onChange, value }}) => (
							<Input 
								placeholder="Nome"
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>

					<Controller 
						control={control}
						name="email"
						render={({ field: { onChange, value }}) => (
							<Input 
								placeholder="E-mail"
								keyboardType="email-address"
								autoCapitalize="none"
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>
					
					<Controller 
						control={control}
						name="password"
						render={({ field: { onChange, value }}) => (
							<Input 
								placeholder="Senha"
								secureTextEntry
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>

					<Controller 
						control={control}
						name="confirmPassword"
						render={({ field: { onChange, value }}) => (
							<Input 
								placeholder="Confirmar senha"
								secureTextEntry
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>

					<Button title="Criar e acessar" />
				</Center>

				<Button 
					title="Voltar para o login"
					variant="outline"
					mt={24}
					onPress={handleGoBack}
				/>
			</VStack>
		</ScrollView>
	);
}