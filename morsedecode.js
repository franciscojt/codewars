/*
Share this kata:
Part of Series 1/3
This kata is part of a series on the Morse code. After you solve this kata, you may move to the next one.

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function decodeMorse(morseCode), that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
The Morse code table is preloaded for you as a dictionary, feel free to use it. In CoffeeScript, C++, JavaScript, PHP, Python, Ruby and TypeScript, the table can be accessed like this: MORSE_CODE['.--'], in Java it is MorseCode.get('.--'), in C# it is MorseCode.Get('.--'), in Haskell the codes are in a Map String String and can be accessed like this: morseCodes ! ".--", in Elixir it is morse_codes variable.

All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

Good luck!

After you complete this kata, you may try yourself at Decode the Morse code, advanced.
ALGORITHMS
*/

morse = {
    A : '.-',
    B : '-...',
    C : '-.-.',
    D : '-..',
    E : '.',
    F : '..-.',
    G : '--.',
    H : '....',
    I : '..',
    J : '.---',
    K : '-.-',
    L : '.-..',
    M : '--',
    N : '-.',
    O : '---',
    P : '.--.',
    Q : '--.-',
    R : '.-.',
    S : '...',
    T : '-',
    U : '..-',
    V : '...-',
    W : '.--',
    X : '-..-',
    Y : '-.--',
    Z : '--..',
    ONE : '.----',
    TWO : '..---',
    THREE : '...--',
    FOUR : '....-',
    FIVE : '.....',
    SIX : '-.....',
    SEVEN : '--...',
    EIGHT : '---..',
    NINE : '----.',
    ZERO : '-----',
    SOS : "...---...",
    COMMA : '--..--',
    PERIOD : '.-.-.-',
    EXCLAMATION : '-.-.--',
}

function decodeMorse(code){
    codes = code.split(' '), message = "";
    console.log(codes)
    for(var i = 0; i< codes.length; i++){
        switch(codes[i]){
            case morse.A:
                message+= "A";
                break;
            case morse.B:
                message+= "B";
                break;
            case morse.C:
                message+= "C";
                break;
            case morse.D:
                message+= "D";
                break;
            case morse.E:
                message+= "E";
                break;
            case morse.F:
                message+= "F";
                break;
            case morse.G:
                message+= "G";
                break;
            case morse.H:
                message+= "H";
                break;
            case morse.I:
                message+= "I";
                break;
            case morse.J:
                message+= "J";
                break;
            case morse.K:
                message+= "K";
                break;
            case morse.L:
                message+= "L";
                break;
            case morse.M:
                message+= "M";
                break;
            case morse.N:
                message+= "N";
                break;
            case morse.O:
                message+= "O";
                break;
            case morse.P:
                message+= "P";
                break;
            case morse.Q:
                message+= "Q";
                break;
            case morse.R:
                message+= "R";
                break;
            case morse.S:
                message+= "S";
                break;
            case morse.T:
                message+= "T";
                break;
            case morse.U:
                message+= "U";
                break;
            case morse.V:
                message+= "V";
                break;
            case morse.W:
                message+= "W";
                break;
            case morse.X:
                message+= "X";
                break;
            case morse.Y:
                message+= "Y";
                break;
            case morse.Z:
                message+= "Z";
                break;            
            case '':
                if(message[message.length-1] === ' '){
                    break;
                }
                message+= ' '
                break;
            case morse.ONE:
                message+= "1";
                break;
            case morse.TWO:
                message+= "2";
                break;
            case morse.THREE:
                message+= "3";
                break;
            case morse.FOUR:
                message+= "4";
                break;
            case morse.FIVE:
                message+= "5";
                break;
            case morse.SIX:
                message+= "6";
                break;
            case morse.SEVEN:
                message+= "7";
                break;
            case morse.EIGHT:
                message+= "8";
                break;
            case morse.NINE:
                message+= "9";
                break;
            case morse.ZERO:
                message+= "0";
                break;
            case morse.SOS:
                message+= "SOS";
                break;
            case morse.COMMA:
                message+= ",";
                break;
            case morse.PERIOD:
                message+= ".";
                break;
            case morse.EXCLAMATION:
                message+= "!";
                break;
            default:
                return "No character was found for that morse code sequence --> " + codes[i]
        }
    }
    return message.trim()
}
//console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
//console.log(decodeMorse("...---... -.-.--"))
//console.log(decodeMorse('-.-. --- -. ...- . .-. -     - . -..- -     - ---     -- --- .-. ... .     -.-. --- -.. .'))
console.log(decodeMorse(' .-   ... '))
console.log('|'+decodeMorse('      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  ')+'|')
