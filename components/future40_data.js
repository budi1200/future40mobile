import { links } from '../links';
import axios from 'react-native-axios';

// Accepts sheet name; returns google sheet data
export default function getXFromSheet(sheet){
    return axios.get(links.links[sheet]);
}