import { View, Text,TouchableOpacity,TextInput,StyleSheet,Alert } from 'react-native'
import React,{useRef,useState} from 'react'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../config';
import firebase from 'firebase/compat/app';


const Otp = () => {
    const [phoneNumber, setPhoneNumber] = usestate('');
    const [code, setCode] = useState('');
    const [verificationid, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then(setVerificationId);
        setPhoneNumber('');
        };
    const confirmCode=()=>{
        const credential=firebase.auth.PhoneAuthProvider.credential(
            verificationid,
            code
        );
        firebase.auth().signInWithCredential(credential).then(()=>{
            setCode('');
        })
        .catch((error)=>{
            alert(error);

        })
        Alert.alert(
            'Login succesfull.welcome to dash board',
        );

    }

   


    
    return (
        <View>
            <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig} />
            <Text>login using OTP</Text>
            <TextInput
               placeholder='Phone Number with country code'
               onChangeText={setPhoneNumber}
               keyboardType='phone-pad'
               autoComplete='tel'

             />

             <TouchableOpacity onPress={sendVerification}>
                <Text>send Verification</Text>
             </TouchableOpacity>
             <TextInput
               placeholder='Confirm code'
               onChangeText={setCode}
               keyboardType='phone-pad'

             />
             <TouchableOpacity onPress={confirmCode}>
                <Text>confirm Verification</Text>
             </TouchableOpacity>
        </View>
    )
}

export default Otp;