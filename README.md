# _Pig Latin Translator_

#### _This is a translator, taking English words and translating them into pig latin. See the rules below:_
* _For words beginning with a vowel, add "way" to the end_
* _For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay"_
* _If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!"_
* _For words beginning with "y", treat "y" as a consonant._


_Current Version April, 1, 2020_

#### By _**Celeste Field**_

## Specifications 

|    Behaviors   |   Input      |    Output    |
| :------------- | :----------: | -----------: |
|The translator does nothing to non-alphabetical characters, since they do not contain consonants or vowels.| 3 | [3]
|The translator adds "way" to single-letter words beginning with a vowel.| p | [Pway]|
|The translatoradds "way" to single-letter words beginning with a vowel, even if they're capitalized.| P | [Pway]|
|For words beginning with a vowel add way to the end, even if it capitalized. | eat/Eat | [eatway]|
|For words beginning with y treat y as a consonants. | yikes | [yikesyay]
|For words the begin with one consonant, move the consonant to the end and add "ay".| dog | [dogay] |
Words that begin with one or more consonants, move the first consonants and that all follow to the end of word, and add "ay". This inlcudes "qu" & "y". | street | [eetstray]|
|The program can identify seperated words that are inputted, even if there capitalized | I love cheese | [I love cheese ]|

## Setup/Installation Requirements

* _Clone the github repository $ git clone https://github.com/fieldceleste/pig-latin.git
* _Copy the HTTP code_
* _Open the terminal_
* _Type git clone in the terminal and press enter_
* _Check to make sure current jQuery version is up to date._* _Then open your browser of choice and enter the cloned HTTP code_

## Known Bugs

_There are no known bugs as of 04/01/2020_

## Support and contact details

_If you run into any issues please contact fieldceleste@gmail.com_

## Technologies Used

_This application was used with Javascript, Bootstrap, Css, Jquery, and Html_

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Celeste Field_**
