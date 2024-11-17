import { Button } from "react-native"
import MainLayout from '../layouts/MainLayout';
const AboutScreen = ({navigation}) => {
    return (
      <MainLayout>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
      </MainLayout>
    );
  };
export default AboutScreen;