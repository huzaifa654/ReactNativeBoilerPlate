// shim.js
import 'react-native-get-random-values';
import { Buffer } from 'buffer';
global.Buffer = Buffer;
global.process = {
    env: {},
};
